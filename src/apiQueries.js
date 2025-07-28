const URL = 'dummyUrl'

const getLeaderboard = async () => {
    let { players } = await fetch(URL + '/leaderboard')
        .then(res => res.json())
    return players
}
const getTimeTakenByPlayer = async () => {
    let { timeTaken } = await fetch(URL + '/me/time-taken')
        .then(res => res.json())
    return timeTaken
}

export {
    getLeaderboard,
    getTimeTakenByPlayer
 }