import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getPlayerNameFromToken } from "../utilities.mock"

const PlayerName = ({ userCreated }) => {
    const [playerName, setPlayerName] = useState(null)

    useEffect(() => {
        if (userCreated)
            setPlayerName(getPlayerNameFromToken)
    }, [userCreated])

    return (
        <div>
            <h2>Player Name</h2>
            {
                (playerName == null) ? <Loading /> : <p>{playerName}</p>
            }
        </div>
    )
}

export default PlayerName