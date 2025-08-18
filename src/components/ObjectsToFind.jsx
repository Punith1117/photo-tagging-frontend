import styled from "styled-components"
import Loading from "./Loading"

const StyledObjectsToFind = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #ffdd80;
    padding: 1rem;
    border-radius: 1rem;
    color: darkblue;

    .objects {
        display: flex;
        gap: 10px;
    }

    .object-wrapper {
        width: 7rem;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            max-inline-size: 100%;
            display: block;
        }
    }
`

const ObjectsToFind = ({ objects }) => {
    return (
        <StyledObjectsToFind>
            <h2>Objects to find</h2>
            <div className="objects">
                {
                    (objects === null) ?
                        <Loading />
                    :
                    objects.map(object => (
                        <div className="object-wrapper" key={object.id}>
                            <img src={`/objects/${object.id}.jpeg`} alt={`object ${object.id}`} />
                        </div>
                    ))
                }
            </div>
        </StyledObjectsToFind>
    )
}

export default ObjectsToFind