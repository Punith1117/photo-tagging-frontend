import styled from "styled-components"

const StyledGameTitleWithAuthor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const GameTitleWithAuthor = () => {
    return (
        <StyledGameTitleWithAuthor>
            <h1>Photo Tagging</h1>
            <a href="https://github.com/Punith1117/photo-tagging-frontend" target="_blank" rel="noopener noreferrer">By Punith1117</a>
        </StyledGameTitleWithAuthor>
    )
}

export default GameTitleWithAuthor