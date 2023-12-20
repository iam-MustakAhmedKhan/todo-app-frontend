import googleLogo from "../assets/icons/google.png";
import gitHubLogo from "../assets/icons/github.png";
import { authUsingGithub, authUsingGoogle } from "../common/firebase";
import axiosInstance from "../utils/axios";
import { useContext } from "react";
import { Toaster, toast } from "react-hot-toast";
import { UserContext } from "../App";
import { storeInSession } from "../common/session";
import { Navigate } from "react-router-dom";

const HomePage = () => {
    
    const { user, setUser } = useContext(UserContext)

    const handleAuth = async (e,provider) => {
        e.preventDefault();
        try {
            const loadingToast = toast.loading("Sign in...");

            const authProvider = provider=="google" ? await authUsingGoogle() : await authUsingGithub()

            const { data } = await axiosInstance.post("/auth", {
                accessToken: authProvider.user.accessToken,
            });

 
            setUser(data);
            storeInSession('user', JSON.stringify(data));

            toast.dismiss(loadingToast);
            toast.success("sign in successfully");
        } catch (e) {
            toast.error("Couldn't Login");
        }

    }

    return user.accessToken!==null ? (
        <Navigate to="/dashboard/all-task" />
    ) : (
        <div>
            <Toaster />
            <div className="w-full px-12 h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="bg-[#141e33] min-w-[400px] p-4 rounded-md">
                    <h1 className="text-xl text-white/50 font-inter text-center">
                        Create Your Task Today
                    </h1>

                    <button
                        className="btn"
                        onClick={(e) => handleAuth(e, "google")}
                    >
                        <img
                            src={googleLogo}
                            alt="google logo"
                            className="w-6 h-6"
                        />
                        Continue with google
                    </button>

                    <div className="flex items-center justify-center gap-2 text-white/50 font-medium">
                        <hr className="w-1/2 border-white/20" />
                        <p>Or</p>
                        <hr className="w-1/2 border-white/20" />
                    </div>

                    <button
                        className="btn"
                        onClick={(e) => handleAuth(e, "github")}
                    >
                        <img
                            src={gitHubLogo}
                            alt="google logo"
                            className="w-6 h-6"
                        />
                        Continue with Github
                    </button>
                </div>
            </div>
        </div>
    );
        
    
};

export default HomePage;
