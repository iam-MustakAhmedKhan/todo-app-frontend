import { useContext } from "react";
import { UserContext } from "../App";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { removeFromSession } from "../common/session";

const Sidebar = () => {
    const {
        user: { profile_img, name },
        isShow,
        setIsShow,
        setUser
    } = useContext(UserContext);


    const handleSignOut = () => {
        removeFromSession('user')
        setUser({accessToken:null})
    };

    return (
        <div
            className={`bg-[#141e33] max-sm:w-1/2 w-[350px] py-8 h-full overflow-y-auto overflow-x-hidden max-sm:left-[-100%] duration-700 transition fixed ${
                isShow ? "max-sm:left-0" : ""
            }`}
        >
            <button
                onClick={() => setIsShow(false)}
                className="absolute right-5 sm:hidden bg-[#0f172a] w-12 h-12 flex items-center justify-center rounded-full"
            >
                <X />
            </button>
            <div className="p-5 my-12">
                <img
                    src={profile_img}
                    alt="Profile Image"
                    className="w-28 h-28 aspect-square rounded-full mx-auto"
                />

                <h1 className="font-medium py-5 text-center line-clamp-1">
                    {name}
                </h1>

                <button className="btn mt-0" onClick={handleSignOut}>
                    Sign out
                </button>
            </div>

            <hr className="border-white/20" />

            <div className="flex flex-col gap-2 mt-5">
                <NavLink to="all-task" className="navlink">
                    All Task's
                </NavLink>
                <NavLink to="completed" className="navlink">
                    Completed Task's
                </NavLink>
                <NavLink to="incompleted" className="navlink">
                    InCompleted Task's
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;
