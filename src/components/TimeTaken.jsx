import { use, useEffect, useState } from "react"
import Loading from "./Loading"
import { getTimeTakenByPlayer } from "../apiQueries"
import styled from "styled-components"

const StyledTimeTaken = styled.div`
    display: flex;
    flex-direction: column;
    place-items: center;
    background-color: #7a5002;
    padding: 10px;
    border-radius: 5px;

    h2, p {
        margin: 0;
        padding: 0;
    }

    p {
        font-size: 1.5rem;
    }

`
const TimeTaken = ({ userCreated }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [timeTaken, setTimeTaken] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const timeTaken = await getTimeTakenByPlayer()
            setTimeTaken(timeTaken)
            setIsLoading(false)
        }
        if (userCreated == true)
            fetchData()
    }, [userCreated])

    return (
        <StyledTimeTaken>
            <h2>Time Taken by you:</h2>
            { (isLoading == true) ? 
                <Loading /> : 
                    (timeTaken == null) ? 
                        <p>- seconds</p> : 
                            <p>{timeTaken} seconds</p>
            } 
        </StyledTimeTaken>
    )
}

export default TimeTaken