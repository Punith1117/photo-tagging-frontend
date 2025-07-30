import { Link } from "react-router-dom"
import Loading from "./Loading"

const StartGame = ({userCreated}) => {
    return (
        <div>
            { 
                (userCreated == true) ?
                    <Link to='/game'>Start</Link> :
                        <span>{<Loading />}</span>
            }
        </div>
    )
}

export default StartGame