import { render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Index from "../components/Index";
import '@testing-library/jest-dom';

vi.mock('../components/GameTitleWithAuthor', () => ({
    default: () => <p>GameTitleWithAuthor</p> 
}))
vi.mock('../components/PlayerName', () => ({
    default: ({userCreated}) => {
        if (userCreated == true) return <p>Punith</p>
        return <p>loading</p>
    } 
}))
vi.mock('../components/GameSummary', () => ({
    default: () => <p>GameSummary</p> 
}))
vi.mock('../components/Leaderboard', () => ({
    default: () => <p>Leaderboard</p> 
}))
vi.mock('../components/TimeTaken', () => ({
    default: ({userCreated}) => {
        if (userCreated == true) return <p>TimeTaken</p>
        return <p>loading</p> 
    }  
}))
vi.mock('../components/StartGame', () => ({
    default: ({userCreated}) => {
        if (userCreated == true) return <p>StartGame</p>
        return <p>loading</p> 
    } 
}))

vi.mock('../apiQueries', () => ({
    getNewPlayerToken: vi.fn()
}))
vi.mock('../utilities', () => ({
    savePlayerTokenToStorage: vi.fn(),
    getPlayerTokenFromStorage: vi.fn()
}))

import { getNewPlayerToken } from '../apiQueries'
import { savePlayerTokenToStorage, getPlayerTokenFromStorage } from '../utilities'

describe('Index component', () => {
    beforeEach(() => {
        vi.resetAllMocks()
    })
    it('fetches and stores token of new player if player does not exist', async () => {
        getPlayerTokenFromStorage.mockReturnValue(null)
        getNewPlayerToken.mockResolvedValue('token')
        render(<Index />)
        await waitFor(() => {
            expect(getNewPlayerToken).toHaveBeenCalledOnce() 
            expect(savePlayerTokenToStorage).toHaveBeenCalledWith('token')
        })
    })
    it('sets userCreated to true when player token already exists', async () => {
        getPlayerTokenFromStorage.mockReturnValue('token')
        render(<Index />)
        await waitFor(() => {
            expect(screen.getByText('Punith')).toBeInTheDocument()
        })
    })
    it('renders GameSummary, GameTitleWithAuthor, LeaderBoard component', async () => {
        getPlayerTokenFromStorage.mockReturnValue('token')
        render(<Index />)
        await waitFor(() => {
            expect(screen.getByText('GameSummary')).toBeInTheDocument()
            expect(screen.getByText('GameTitleWithAuthor')).toBeInTheDocument()
            expect(screen.getByText('Leaderboard')).toBeInTheDocument()
        })
    })
    it('renders PlayerName, TimeTaken, LeaderBoard, StartGame component with userCreated prop', async () => {
        getPlayerTokenFromStorage.mockReturnValue('token')
        render(<Index />)
        await waitFor(() => {
            expect(screen.getByText('Punith')).toBeInTheDocument()
            expect(screen.getByText('TimeTaken')).toBeInTheDocument()
            expect(screen.getByText('Leaderboard')).toBeInTheDocument()
            expect(screen.getByText('StartGame')).toBeInTheDocument()
        })
    })
})