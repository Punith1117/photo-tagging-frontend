import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getTimeLimitFromToken } from "../utilities"
import styled from "styled-components"


const StyledTimer = styled.div`
    position: sticky;
    top: 2rem;
    z-index: 1000;
    background-color: black;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 1rem;
    box-shadow: 5px 5px 1rem black;

    h2,p {
        padding: 0;
        margin: 0;
        font-size: 1rem;
    }

    p {
        font-size: 2rem;
    }
`
const Timer = ({gameStarted, gameEndedMessage, setGameEndedMessage, notify}) => {
    const [timeLimit, setTimeLimit] = useState(null)

    useEffect(() => {
        if (gameStarted == true) {
            setTimeLimit(getTimeLimitFromToken())
        }
    }, [gameStarted])

    useEffect(() => {
        if (typeof timeLimit === 'number') {
            if (timeLimit == 0) {
                setGameEndedMessage('Time limit exceeded')
                notify('Time limit exceeded')
            } else if (gameEndedMessage == null){
                setTimeout(() => {
                    setTimeLimit(timeLimit - 1)
                }, 1000)
            }
        }
    }, [timeLimit])

    if (gameStarted) {
        return (
            <StyledTimer>
                <h2>Timer</h2>
                <p>{timeLimit}</p>
            </StyledTimer>
        )
    } else {
        return (
            <StyledTimer>
                <h2>Timer</h2>
                <Loading />
            </StyledTimer>
        )
    }
}

export default Timer