import { jwtDecode } from "jwt-decode"

const getPlayerNameFromToken = () => {
    const jwt = localStorage.getItem('player-token')
    if (!jwt) return null
    const decoded = jwtDecode(jwt)
    return decoded.playerName
}

const savePlayerTokenToStorage = (token) => {
    localStorage.setItem('player-token', token)
}

const getPlayerTokenFromStorage = () => {
    return localStorage.getItem('player-token')
}

export {
    getPlayerNameFromToken,
    savePlayerTokenToStorage,
    getPlayerTokenFromStorage
}