import { beforeEach, describe, expect, it, vi } from "vitest";
import { getPlayerNameFromToken } from "../utilities";

vi.mock('jwt-decode', () => ({
    jwtDecode: vi.fn()
}))

import { jwtDecode } from 'jwt-decode'

describe('getPlayerNameFromToken', () => {
    beforeEach(() => {
        localStorage.clear()
        vi.clearAllMocks()
    })

    it('calls jwtDecode with correct token', () => {
        const jwtToken = 'asdf'
        localStorage.setItem('player-token', jwtToken)
        jwtDecode.mockReturnValue({ playerName: 'Punith'})
        getPlayerNameFromToken()
        expect(jwtDecode).toHaveBeenCalledWith(jwtToken)
    })

    it('returns decoded player name if token is valid', () => {
        localStorage.setItem('player-token', 'asdf')
        jwtDecode.mockReturnValue({ playerName: 'Punith'})
        const name = getPlayerNameFromToken()
        expect(name).toBe('Punith')
    })

    it('returns null if token does not exist', () => {
        const name = getPlayerNameFromToken()
        expect(name).toBeNull()
    })
})