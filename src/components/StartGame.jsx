import { Link } from "react-router-dom"
import Loading from "./Loading"
import styled from "styled-components"

const StyledStartGame = styled.div`

    a {
        padding: 1rem;
        border-radius: 1rem;
        border: 1px solid black;
        color: white;
        background-color: green;
        box-shadow: 3px 3px 3px black;

        &:hover {
            filter: brightness(0.7);
        }
    }
`
const StartGame = ({userCreated}) => {
    return (
        <StyledStartGame>
            { 
                (userCreated == true) ?
                    <Link to='/game'>Start</Link> :
                        <span>{<Loading />}</span>
            }
        </StyledStartGame>
    )
}

export default StartGame