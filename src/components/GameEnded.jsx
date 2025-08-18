import styled from "styled-components"

const StyledGameEnded = styled.div`
    position: fixed;
    top: 25rem;
    left: 50%;
    transform: translateX(-50%);
    background-color: black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;

    h2 {
        padding: 0;
        margin: 0;
    }
`

const GameEnded = ({refresh, setRefresh, gameEndedMessage}) => {
    return (
        <StyledGameEnded>
            <h2>Game Ended</h2>
            <p>{gameEndedMessage}</p>
            <button onClick={() => setRefresh(refresh+1)}>Play again</button>
        </StyledGameEnded>
    )
}

export default GameEnded