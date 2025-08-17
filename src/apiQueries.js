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

export {
    getLeaderboard
}