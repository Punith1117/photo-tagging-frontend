import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import GameTitleWithAuthor from "../components/GameTitleWithAuthor";

describe("GameTitleWithAuthor component", () => {
  it("renders correct game title", () => {
    render(<GameTitleWithAuthor />);
    expect(screen.getByRole("heading").textContent).toMatch(/photo tagging/i);
  });
  it('renders correct author with link to github repo', () => {
    render(<GameTitleWithAuthor />)
    const link = screen.getByRole('link', {name: /By Punith1117/i})
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://github.com/Punith1117/photo-tagging-frontend')
  })
});

