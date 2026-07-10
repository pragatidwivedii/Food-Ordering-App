import {useRouteError} from "react-router";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="mx-20 mt-5">
            <h1 className="text-2xl font-bold">Oops! Something went wrong</h1>
            <h2 className="text-xl font-bold">{err.status + " : " + err.statusText}</h2>
        </div>
    );
}   

export default Error;