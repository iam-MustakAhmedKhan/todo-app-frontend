import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { UserContext } from "../App";
import { useContext } from "react";
import Modal from "../components/Modal";

const Dashboard = () => {

    const {
        user,
        modalShow
    } = useContext(UserContext);

    return user.accessToken == null ? (
        <Navigate to="/" />
    ) : (
        <>
            <div className="flex bg-[#0f172a] w-full h-screen text-white/50">
                <Sidebar />
                <div className="p-4 ml-[360px] max-sm:ml-0 w-full">
                    <Navbar />

                    <Outlet />
                </div>
            </div>

            {modalShow && <Modal />}
        </>
    );
};

export default Dashboard;
