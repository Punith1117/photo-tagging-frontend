import styled from "styled-components"
import Loading from "./Loading"

const StyledObjectsToFind = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .objects {
        display: flex;
        gap: 10px;
    }

    .object-wrapper {
        width: 5rem;
        height: auto;

        img {
            width: 100%;
            height: 100%;
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