import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import PlayerName from "../components/PlayerName";
import '@testing-library/jest-dom';

vi.mock('../utilities.mock', () => ({
    getPlayerNameFromToken: vi.fn()
}))

vi.mock('../components/Loading', () => ({
    default: () => <p>loading...</p>
}))

import { getPlayerNameFromToken } from "../utilities.mock";

describe('PlayerName component', () => {
    it('exists', () => {
        render(<PlayerName userCreated={false} />)
        expect(screen.getByText(/player name/i)).toBeInTheDocument()
    })
    it('renders loading component when userCreated is false', () => {
        render(<PlayerName userCreated={false} />)
        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    })
    it('renders player name when userCreated is true', async () => {
        getPlayerNameFromToken.mockReturnValue('Punith')
        render(<PlayerName userCreated={true} />)
        expect(await screen.getByText('Punith')).toBeInTheDocument()
    })
})