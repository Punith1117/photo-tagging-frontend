import { allObjectsFound } from "./utilities.mock"

// mock data
const leaderboard = [
    {playerName: 'Punith', timeTaken: 10},
    {playerName: 'asdf', timeTaken: 20}
]
const delay = 1000
const initialObjects = [
    {id: 1, found: false}, {id: 2, found: false}, {id: 3, found: false}
]
let updatedObjects = [
    {id: 1, found: false}, {id: 2, found: false}, {id: 3, found: false}
]
const objectsCoordinates = [
    {
        x: [0, 50],
        y: [0, 50]
    },
    {
        x: [50, 100],
        y: [0, 50]
    },
    {
        x: [50, 100],
        y: [50, 100]
    }
]

const getLeaderboard = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(leaderboard)
        }, delay)
    }) 
}
const getTimeTakenByPlayer = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(20)
        }, delay)
    }) 
}

const getNewPlayerToken = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('fake.token')
        }, delay)
    }) 
}

const createNewGame = async () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                token: 'abcd',
                objects: initialObjects
            })
        }, delay)
    })
}

const verifyGuess = async (coordinates, objectId) => {
    let result, timeTaken
    const x = objectsCoordinates[objectId-1].x
    const y = objectsCoordinates[objectId-1].y
    if ((coordinates.x > x[0]) && (coordinates.x < x[1]) && (coordinates.y > y[0]) && (coordinates.y < y[1]))
        result =  true
    else
        result =  false

    if (result) {
        updatedObjects = updatedObjects.map(obj => (obj.id == objectId) ? {...obj, found: true} : obj)
        if (allObjectsFound(updatedObjects))
            timeTaken = 10
    }

    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                found: result,
                updatedObjects,
                timeTaken
            })
        }, delay)
    })
}

export {
    getLeaderboard,
    getTimeTakenByPlayer,
    getNewPlayerToken,
    createNewGame,
    verifyGuess
 }