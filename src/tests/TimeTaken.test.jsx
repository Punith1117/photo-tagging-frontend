import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import TimeTaken from "../components/TimeTaken";
import '@testing-library/jest-dom';

vi.mock('../apiQueries.mock', () => ({
    getTimeTakenByPlayer: vi.fn()
}))
import { getTimeTakenByPlayer } from "../apiQueries.mock";

vi.mock('../components/Loading', () => ({
    default: () => <p>loading...</p>
}))

describe('TimeTaken component', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    })

    it('exists', async () => {
        render(<TimeTaken userCreated={true}/>)
        expect(await screen.findByRole('heading')).toHaveTextContent(/time taken by you:/i)
    })
    it('renders loading component when user is not yet created', () => {
        render(<TimeTaken userCreated={false}/>)
        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    })
    it('renders loading component when data is being fetched when user is created', async () => {
        getTimeTakenByPlayer.mockImplementation(() => new Promise(() => {}))
        render(<TimeTaken userCreated={true} />)
        expect(await screen.findByText(/loading.../i)).toBeInTheDocument()
    })
    it('renders result in the correct format when time taken is null', async () => {
        getTimeTakenByPlayer.mockResolvedValue(null)
        render(<TimeTaken userCreated={true} />)
        expect(await screen.findByText(/- seconds/i)).toBeInTheDocument()
    })
    it('renders result in the correct format when time taken is not null', async () => {
        getTimeTakenByPlayer.mockResolvedValue(20)
        render(<TimeTaken userCreated={true} />)
        expect(await screen.findByText(/20 seconds/i)).toBeInTheDocument()
    })
})