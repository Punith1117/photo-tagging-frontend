import { use, useEffect, useState } from "react"
import Loading from "./Loading"
import { getTimeTakenByPlayer } from "../apiQueries.mock"

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
        <div>
            <h2>Time Taken by you:</h2>
            { (isLoading == true) ? 
                <Loading /> : 
                    (timeTaken == null) ? 
                        <p>- seconds</p> : 
                            <p>{timeTaken} seconds</p>
            } 
        </div>
    )
}

export default TimeTaken