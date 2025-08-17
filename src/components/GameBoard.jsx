import { useEffect, useState } from "react"
import styled from "styled-components"
import Popup from "./Popup"
import { verifyGuess } from "../apiQueries"
import GameEnded from "./GameEnded"
import { allObjectsFound } from "../utilities"

const StyledGameBoard = styled.div`
    position: relative;
    min-width: 60rem;
    width: 95vw;
    height: auto;
`

const StyledImage = styled.div`
    background-image: url('/image.jpg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    aspect-ratio: 2000 / 1142;

    &:hover {
        cursor: pointer;
    }
`

const Marker = styled.div`
    position: absolute;
    background-image: radial-gradient(#ff0000, #ff000011);
    border-radius: 1rem;
    height: 1rem;
    width: 1rem;
    top: ${props => props.$coordinates.y * props.$photoHeight / 100 - 10}px;
    left: ${props => props.$coordinates.x * props.$photoWidth / 100 - 7}px;
`

const GameBoard = ({initialObjects, notify, gameEndedMessage, setGameEndedMessage, refresh, setRefresh}) => {
    const [ coordinates, setCoordinates ] = useState({x: 0, y: 0})
    const [ showPopup, setShowPopup ] = useState(false)
    const [ photoWidth, setPhotoWidth ] = useState(0)
    const [ photoHeight, setPhotoHeight ] = useState(0)
    const [ objects, setObjects ] = useState(null)
    const [ foundObjectId, setFoundObjectId ] = useState(null)

    useEffect(() => {
        setObjects(initialObjects)
    }, [initialObjects])

    useEffect(() => {
        const apiQuery = async () => {
            let result = await verifyGuess(coordinates, foundObjectId)
            if (result.found) {
                notify('Congrats! You found the object')
                if (allObjectsFound(result.updatedObjects)) {
                    setGameEndedMessage(`Congratulations! You have completed the game in ${result.timeTaken} seconds.`)
                }
            }
            else
                notify('You are wrong :(')
            setObjects(result.updatedObjects)
            setFoundObjectId(null)
        }
        if (foundObjectId)
            apiQuery()
    }, [foundObjectId])

    const handleImageClick = (e) => {
        const x = e.nativeEvent.offsetX
        const y = e.nativeEvent.offsetY
        const newPhotoWidth = e.currentTarget.clientWidth
        const newPhotoHeight = e.currentTarget.clientHeight
        const normalizedX = x / e.currentTarget.clientWidth * 100 //in percentage
        const normalizedY = y / e.currentTarget.clientHeight * 100
        setCoordinates({x: normalizedX, y:  normalizedY})
        setShowPopup(true)
        setPhotoWidth(newPhotoWidth)
        setPhotoHeight(newPhotoHeight)
    }


    return (
        <StyledGameBoard>
            <StyledImage onClick={handleImageClick}/>
            <Marker $coordinates={coordinates} $photoWidth={photoWidth} $photoHeight={photoHeight} />
            {showPopup && (gameEndedMessage === null) && <Popup 
                coordinates={coordinates}
                photoWidth={photoWidth}
                photoHeight={photoHeight}
                setShowPopup={setShowPopup}
                objects={objects}
                setObjects={setObjects}
                notify={notify}
                setFoundObjectId={setFoundObjectId}
            />}
            {(gameEndedMessage != null) && <GameEnded refresh={refresh} setRefresh={setRefresh} gameEndedMessage={gameEndedMessage} />}
        </StyledGameBoard>
    )
}

export default GameBoard