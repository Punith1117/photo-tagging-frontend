import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import StartGame from "../components/StartGame";
import { MemoryRouter } from "react-router-dom";
import '@testing-library/jest-dom';

vi.mock('../components/Loading', () => ({
    default: () => <p>loading...</p>
}))

describe('StartGame component', () => {
    it('renders loading component when user is not created', () => {
        render(
            <MemoryRouter>
                <StartGame userCreated={false} />
            </MemoryRouter>
        )
        expect(screen.getByText(/loading.../i)).toBeInTheDocument()
    })
    it('renders link that navigates to the correct path', () => {
        render(
            <MemoryRouter>
                <StartGame userCreated={true} />
            </MemoryRouter>
        )
        expect(screen.getByRole('link')).toHaveTextContent(/^start$/i)
        expect(screen.getByRole('link')).toHaveAttribute('href', '/game')
    })
})