import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getLeaderboard } from "../apiQueries"
import styled from "styled-components"

const StyledLeaderboard = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    margin: 2vw;
    display: flex;
    flex-direction: column;
    place-items: center;
    background-color: #011969;
    padding: 1vw;
    border-radius: 2rem;

    h2 {
        margin: 0;
    }
    table {
        padding: 5px;
        * {
            border: 1px solid white;
            padding: 5px;
        }
        
        th {
            background-color: #b83737;

            p {
                font-size: 13px;
                padding: 0;
                border: 0;
                margin: 0;
            }
        }
    }
`
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
            <StyledLeaderboard>
                <h2>Leaderboard</h2>
                <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player name</th>
                        <th>Time taken <p>in seconds</p></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        players.map((player, index) => (
                            <tr key={index + 1}>
                                <td>{index + 1}</td>
                                <td>{player.name}</td>
                                <td>{player.timeTaken}</td>
                            </tr>
                        ))
                    }
                </tbody>
                </table>
            </StyledLeaderboard>
        )
    }
}

export default Leaderboard