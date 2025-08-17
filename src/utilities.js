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

const saveGameTokenToStorage = (token) => {
    localStorage.setItem('game-token', token)
}

const getTimeLimitFromToken = () => {
    const jwt = localStorage.getItem('game-token')
    if (!jwt) return null
    const decoded = jwtDecode(jwt)
    return decoded.exp - decoded.iat
}

const allObjectsFound = (objects) => {
    return objects.every(object => object.found === true)
}

export {
    getPlayerNameFromToken,
    savePlayerTokenToStorage,
    getPlayerTokenFromStorage,
    saveGameTokenToStorage,
    getTimeLimitFromToken,
    allObjectsFound
}