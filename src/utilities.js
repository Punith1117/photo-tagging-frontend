import { jwtDecode } from "jwt-decode"

export const getPlayerNameFromToken = () => {
    const jwt = localStorage.getItem('player-token')
    if (!jwt) return null
    const decoded = jwtDecode(jwt)
    return decoded.playerName
}