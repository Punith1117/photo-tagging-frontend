import { useEffect, useState } from "react"
import Loading from "./Loading"
import { getTimeLimitFromToken } from "../utilities"

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
            <div>
                <h2>Timer</h2>
                <p>{timeLimit}</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>Timer</h2>
                <Loading />
            </div>
        )
    }
}

export default Timer