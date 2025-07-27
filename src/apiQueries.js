const URL = 'dummyUrl'

const getLeaderboard = async () => {
    let { players } = await fetch(URL + '/leaderboard')
        .then(res => res.json())
    return players
}