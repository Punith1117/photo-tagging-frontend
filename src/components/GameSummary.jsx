import styled from "styled-components"

const StyledGameSummary = styled.div`
    font-family: cursive;
    font-size: 2rem;
`

const GameSummary = () => {
    return (
        <StyledGameSummary>Find and tag hidden parts of the image <br />within the time limit</StyledGameSummary>
    )
}

export default GameSummary