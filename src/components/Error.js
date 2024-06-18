import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    return (
        <div className="container">
            <h2>Oops...</h2>
            <div className="err-container">
                <h1>{err.status}: {err.statusText}</h1>
            </div>
        </div>
    )
}

export default ErrorPage;