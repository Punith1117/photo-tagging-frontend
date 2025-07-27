import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Leaderboard from "../components/Leaderboard";
import '@testing-library/jest-dom';

vi.mock('../apiQueries', () => ({
    getLeaderboard: vi.fn()
}))
vi.mock('../components/Loading', () => ({
    default: () => <div role="status">loading...</div>
}))

import { getLeaderboard } from '../apiQueries'

describe('Leaderboard component', () => {

    it('should exist', async () => {
        getLeaderboard.mockResolvedValue([
            {playerName: 'Varun', timeTaken: 20},
            {playerName: 'Mahesh', timeTaken: 25},
            {playerName: 'Loser', timeTaken: 26},
        ])
        render(<Leaderboard />)
        expect(await screen.findByText('Leaderboard')).toBeInTheDocument()
    })
    it('should render loading component before players are fetched from api', async () => {
        getLeaderboard.mockResolvedValue(new Promise(() => {}))
        render(<Leaderboard />)
        expect(await screen.findByRole('status')).toHaveTextContent(/loading.../i) //findByRole is asynchronous by default
    })
    it('should display all players in order with time taken', async () => {
        getLeaderboard.mockResolvedValue([
            {playerName: 'Varun', timeTaken: 20},
            {playerName: 'Mahesh', timeTaken: 25},
            {playerName: 'Loser', timeTaken: 26},
        ])
        render(<Leaderboard />)
        const rows = await screen.findAllByRole('row');

        const dataRows = rows.slice(1); // Skip the header row

        const expected = [
            ['1', 'Varun', '20'],
            ['2', 'Mahesh', '25'],
            ['3', 'Loser', '26']
        ];

        dataRows.forEach((row, i) => {
            const cells = within(row).getAllByRole('cell');
            expect(cells[0]).toHaveTextContent(expected[i][0]); // position
            expect(cells[1]).toHaveTextContent(expected[i][1]); // name
            expect(cells[2]).toHaveTextContent(expected[i][2]); // time
        });
    })
})