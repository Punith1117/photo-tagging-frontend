import styled from "styled-components"
import Loading from "./Loading"

const StyledPopup = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    top: ${props => {
        const y = props.$coordinates.y
        let top = props.$coordinates.y * props.$photoHeight / 100
        if (y > 60)
            top = top - 200
        else
            top = top + 10

        return top
    }}px;
    left: ${props => {
        const x = props.$coordinates.x
        let left = props.$coordinates.x * props.$photoWidth / 100
        if (x > 80)
            left = left - 150
        else
            left = left + 30
        return left
    }}px;
`
const StyledButton = styled.button`
    height: 5rem;
    width: 6rem;
    background-image: url(${props => props.$imageUrl});
    background-size: cover;
    background-position: center;
    border: 1px solid #ccc;
    filter: ${props => props.$found ? 'grayscale(100%)': 'grayscale(0%)'};
    cursor: ${props => props.$found ? 'not-allowed': 'pointer'};
`
const Popup = ({coordinates, photoWidth, photoHeight, setShowPopup, objects, setObjects, setFoundObjectId}) => {
    return (
        <StyledPopup $coordinates={coordinates} $photoWidth={photoWidth} $photoHeight={photoHeight} >
            <button onClick={() => setShowPopup(false)}>Close</button>
            {(objects == null) ? (
                <Loading />
            ) : (
                    objects.map(object => (
                        <StyledButton
                            key={object.id}
                            $imageUrl={`/objects/${object.id}.jpeg`}
                            $found={object.found}
                            disabled={object.found}
                            onClick={() => {
                                setObjects(null)
                                setFoundObjectId(object.id)
                            }}
                        />
                    ))
            )} 
        </StyledPopup>
    )
}

export default Popup