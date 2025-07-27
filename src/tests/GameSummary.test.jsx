import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import '@testing-library/jest-dom';
import GameSummary from "../components/GameSummary";

describe('GameSummary component', () => {
    it('renders summary of the game', () => {
        render(<GameSummary />)
        expect(screen.getByText('Find and tag hidden parts of the image within the time limit')).toBeInTheDocument()
    })
})