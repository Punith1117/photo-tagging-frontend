import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getPlayerNameFromToken } from "../utilities"
import styled from "styled-components"

const StyledPlayerName = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    margin: 2vw;
    background-color: #810000;
    padding: 10px;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    place-items: center;

    h2 {
        padding: 0;
        margin: 0;
        text-decoration: underline dotted;
        text-underline-offset: 10px;
    }

    p {
        font-weight: 600;
        font-family: cursive;
        font-size: 1.2rem;
    }
`
const PlayerName = ({ userCreated }) => {
    const [playerName, setPlayerName] = useState(null)

    useEffect(() => {
        if (userCreated)
            setPlayerName(getPlayerNameFromToken)
    }, [userCreated])

    return (
        <StyledPlayerName>
            <h2>Player Name</h2>
            {
                (playerName == null) ? <Loading /> : <p>{playerName}</p>
            }
        </StyledPlayerName>
    )
}

export default PlayerName