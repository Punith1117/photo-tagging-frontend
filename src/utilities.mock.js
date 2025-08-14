const savePlayerTokenToStorage = () => {
    return 'token'
}

const getPlayerTokenFromStorage = () => {
    return 'token'
}

export const getPlayerNameFromToken = () => {
    return 'player-name'
}

const getTimeLimitFromToken = () => {
    //It extracts issued at and expires at time from game token in the storage
    // and subtracts it to get time limit
    return 10
}

const allObjectsFound = (objects) => {
    return objects.every(object => object.found === true)
}

export {
    savePlayerTokenToStorage,
    getPlayerTokenFromStorage,
    getTimeLimitFromToken,
    allObjectsFound
}