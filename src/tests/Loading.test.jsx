import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Loading from "../components/Loading";
import '@testing-library/jest-dom';

describe('Loading component', () => {
    it('exists', () => {
        render(<Loading />)
        expect(screen.getByRole('status')).toBeInTheDocument()
    })
    it('renders correct text content', () => {
        render(<Loading />)
        expect(screen.getByRole('status')).toHaveTextContent(/loading.../)
    })
})