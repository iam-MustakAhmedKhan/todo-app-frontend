import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { createContext, useEffect, useState } from "react";
import { lookInSession } from "./common/session";
import Dashboard from "./pages/Dashboard";
import ContentWrapper from "./components/ContentWrapper";

export const UserContext = createContext(null);

function App() {
    const [user, setUser] = useState({});
    const [isShow, setIsShow] = useState(false)
    const [modalShow,setModalShow] = useState(false)

    useEffect(() => {
        let userSession = lookInSession("user");

        userSession
            ? setUser(JSON.parse(userSession))
            : setUser({ accessToken: null });
    }, [setUser]);


    const contex = {
        user,
        setUser,
        setIsShow,
        isShow,
        modalShow,
        setModalShow
    }

    return (
        <UserContext.Provider value={contex}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="dashboard" element={<Dashboard />}>
                        <Route path="all-task" element={<ContentWrapper />} />
                        <Route path="completed" element={<ContentWrapper route="complete" />} />
                        <Route
                            path="incompleted"
                            element={<ContentWrapper route="incomplete" />}
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
