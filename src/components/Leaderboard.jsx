import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getLeaderboard } from "../apiQueries"

const Leaderboard = () => {
    const [players, setPlayers] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLeaderboard()
            setPlayers(data)
        }
        fetchData()
    }, [])

    let content

    if (players == null)
        return (
            <div>
                <h2>Leaderboard</h2>
                {<Loading />}
            </div>
    )
    else {
        return (
            <div>
                <h2>Leaderboard</h2>
                <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player name</th>
                        <th>Time taken in seconds</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{player.playerName}</td>
                                <td>{player.timeTaken}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </div>
        )
    }
}

export default Leaderboard