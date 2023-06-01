import { Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Main from "../pages";
import Join from "../pages/join";

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
            </Routes>
        </>
    )
}

export default Router;