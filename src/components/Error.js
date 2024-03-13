import { useRouteError } from "react-router-dom"
const Error = () => {
    const err = useRouteError();
    //("Error", err);
    return (
        <div>
            <h1>Error : {err.status}</h1>
            <h1>Status Text : { err.statusText }</h1>
    </div>
)
}
export default Error;