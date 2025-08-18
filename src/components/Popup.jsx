import styled from "styled-components"
import Loading from "./Loading"

const StyledPopup = styled.div`
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    max-width: 30rem;
    gap: 1rem;
    padding: 1rem;
    background-color: #0000006a;
    border-radius: 1rem;
    box-shadow: 10px 10px 10px black;

    top: ${props => {
        const y = props.$coordinates.y
        let top = props.$coordinates.y * props.$photoHeight / 100
        if (y > 60)
            top = top - 280
        else
            top = top + 40

        return top
    }}px;
    left: ${props => {
        const x = props.$coordinates.x
        let left = props.$coordinates.x * props.$photoWidth / 100
        if (x > 50)
            left = left - 500
        else
            left = left + 30
        return left
    }}px;
`
const StyledButton = styled.button`
    flex: 1;
    min-height: 6rem;
    min-width: 6rem;
    background-image: url(${props => props.$imageUrl});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    border: 1px solid #ccc;
    filter: ${props => props.$found ? 'grayscale(100%)': 'grayscale(0%)'};
    cursor: ${props => props.$found ? 'not-allowed': 'pointer'};
`

const StyledCloseButton = styled.button`
    position: absolute;
    top: -3rem;
    left: 0;
`
const Popup = ({coordinates, photoWidth, photoHeight, setShowPopup, objects, setObjects, setFoundObjectId}) => {
    return (
        <StyledPopup $coordinates={coordinates} $photoWidth={photoWidth} $photoHeight={photoHeight} >
            <StyledCloseButton onClick={() => setShowPopup(false)}>Close</StyledCloseButton>
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