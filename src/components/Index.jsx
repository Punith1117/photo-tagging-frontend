import { useEffect, useState } from "react"
import GameTitleWithAuthor from "./GameTitleWithAuthor"
import { getNewPlayerToken } from "../apiQueries.mock"
import { savePlayerTokenToStorage, getPlayerTokenFromStorage } from "../utilities.mock"
import PlayerName from "./PlayerName"
import GameSummary from './GameSummary'
import TimeTaken from './TimeTaken'
import Leaderboard from './Leaderboard'
import StartGame from "./StartGame"

const Index = () => {
    const [userCreated, setUserCreated] = useState(false)

    useEffect(() => {
        const createUser = async () => {
            const token = await getNewPlayerToken()
            savePlayerTokenToStorage(token)
            setUserCreated(true)
        }
        if (getPlayerTokenFromStorage() == null)
            createUser()
        else
            setUserCreated(true)
    }, [])

    return (
        <div>
            <GameTitleWithAuthor />
            <GameSummary />
            <Leaderboard />
            <PlayerName userCreated={userCreated}/>
            <StartGame userCreated={userCreated}/>
            <TimeTaken userCreated={userCreated}/>
        </div>
    )
}

export default Index