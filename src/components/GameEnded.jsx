import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledGameEnded = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: black;
`

const GameEnded = ({refresh, setRefresh, gameEndedMessage}) => {
    return (
        <StyledGameEnded>
            <h2>Game Ended</h2>
            <p>{gameEndedMessage}</p>
            <button onClick={() => setRefresh(refresh+1)}>Play again</button>
            <Link to={'/'}>Home</Link>
        </StyledGameEnded>
    )
}

export default GameEnded