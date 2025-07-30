import { useRouteError } from "react-router-dom"

const ErrorPage = () => {
    const error = useRouteError()
    if (error != null)
        console.log(error)
    return (
        <div>
            <h1>Oops!</h1>
            {
                (error == null) ? <p>Page does not exist</p> : <p>{error.statusText || error.message}</p>
            }
        </div>
    )
}

export default ErrorPage