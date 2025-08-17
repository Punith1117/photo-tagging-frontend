import { getPlayerTokenFromStorage } from "./utilities"

const DOMAIN = 'http://localhost:3000'

const getLeaderboard = async () => {
    try {
        const res = await fetch(`${DOMAIN}/leaderboard`)
        const data = await res.json()
        return data.leaderboard
    } catch (e) {
        console.log(e.message)
    }
}

const getNewPlayerToken = async () => {
    try {
        const res = await fetch(`${DOMAIN}/player/new`, {
            method: 'POST'
        })
        const data = await res.json()
        return data.token
    } catch (e) {
        console.log(e.message)
    }
}

const getTimeTakenByPlayer = async () => {
    try {
        const res = await fetch(`${DOMAIN}/player/time-taken`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getPlayerTokenFromStorage()}`,
            }
        })
        const data = await res.json()
        return data.timeTaken
    } catch (e) {
        console.error(e.message)
    }
}

const createNewGame = async () => {
    try {
        const res = await fetch(`${DOMAIN}/game/new`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${getPlayerTokenFromStorage()}`
            }
        })
        const data = await res.json()
        let {initialObjects, ...rest} = data
        let objects = initialObjects.map(({objectId, ...restData}) => ({
            id: objectId,
            ...restData
        }))

        console.log(objects)
        return {objects, ...rest}
    } catch (e) {
        console.error(e.message)
    }
}

export {
    getLeaderboard,
    getNewPlayerToken,
    getTimeTakenByPlayer,
    createNewGame
}