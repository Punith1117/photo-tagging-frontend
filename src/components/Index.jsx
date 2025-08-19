import { useEffect, useState } from "react"
import GameTitleWithAuthor from "./GameTitleWithAuthor"
import { getNewPlayerToken } from "../apiQueries"
import { savePlayerTokenToStorage, getPlayerTokenFromStorage } from "../utilities"
import PlayerName from "./PlayerName"
import GameSummary from './GameSummary'
import TimeTaken from './TimeTaken'
import Leaderboard from './Leaderboard'
import StartGame from "./StartGame"
import styled from "styled-components"


const StyledIndex = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: 5rem;

    * {
        box-sizing: border-box;
    }
`
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
        <StyledIndex>
            <GameTitleWithAuthor />
            <GameSummary />
            <Leaderboard />
            <PlayerName userCreated={userCreated}/>
            <StartGame userCreated={userCreated}/>
            <TimeTaken userCreated={userCreated}/>
        </StyledIndex>
    )
}

export default Index