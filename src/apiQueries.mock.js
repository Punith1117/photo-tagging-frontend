// mock data
const leaderboard = [
    {playerName: 'Punith', timeTaken: 10},
    {playerName: 'asdf', timeTaken: 20}
]
const delay = 1000

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

export {
    getLeaderboard,
    getTimeTakenByPlayer,
    getNewPlayerToken
 }