import { useEffect, useState } from "react"
import Notifications from "./Notifications"
import GameBoard from "./GameBoard"
import styled from "styled-components"
import Timer from "./Timer"
import { createNewGame } from "../apiQueries.mock"

const StyledGame = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 99vw;
`

const Game = () => {
    const [ messages, setMessages ] = useState([])
    const [ gameStarted, setGameStarted ] = useState(false)
    const [ gameEndedMessage, setGameEndedMessage ] = useState(null)
    const [ initialObjects, setInitialObjects ] = useState(null)
    const [ refresh, setRefresh ] = useState(1)

    const initialSetup = async () => {
        const obj = await createNewGame()
        console.log(obj.token)
        setGameStarted(true)
        setInitialObjects(obj.objects)
    }

    useEffect(() => {
        initialSetup()
    }, [])

    useEffect(() => {
        if (refresh > 1) {
            setGameEndedMessage(null)
            setInitialObjects(null)
            initialSetup()
        }
    }, [refresh])

    const notify = (text) => {
        const id = crypto.randomUUID()
        const newMsg = {id, text}

        setMessages(prevMessages => [
            ...prevMessages,
            newMsg
        ])

        setTimeout(() => {
            setMessages(prevMessages => prevMessages.filter(msg => msg.id != id))
        }, 5000)
    }

    return (
        <StyledGame>
            <Notifications messages={messages} />
            <Timer key={refresh} gameStarted={gameStarted} gameEndedMessage={gameEndedMessage} setGameEndedMessage={setGameEndedMessage} notify={notify} />
            <GameBoard
                initialObjects={initialObjects}
                notify={notify}
                gameEndedMessage={gameEndedMessage}
                setGameEndedMessage={setGameEndedMessage}
                refresh={refresh}
                setRefresh={setRefresh}
            />
        </StyledGame>
    )
}

export default Game