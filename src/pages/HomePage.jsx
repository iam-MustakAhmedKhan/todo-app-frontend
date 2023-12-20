import googleLogo from "../assets/icons/google.png";
import gitHubLogo from "../assets/icons/github.png";
import { authUsingGithub, authUsingGoogle } from "../common/firebase";
import axiosInstance from "../utils/axios";
import { useState } from "react";

const HomePage = () => {
    const [user, setUser] = useState({});

    const handleGoogleAuth = async (e) => {
        e.preventDefault();
        try {
            const googleUser = await authUsingGoogle();

            const { data } = await axiosInstance.post("/auth", {
                accessToken: googleUser.user.accessToken,
            });

            setUser({});
            setUser(data);
        } catch (e) {
            console.log(e);
        }
    };


    const handleGithutAuth = async (e) => {
        e.preventDefault();
        try {
            const githubUser = await authUsingGithub();

            const { data } = await axiosInstance.post("/auth", {
                accessToken: githubUser.user.accessToken,
            });
            setUser({});
            setUser(data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <>
            <div className="w-full px-12 h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="bg-[#141e33] min-w-[400px] p-4 rounded-md">
                    <h1 className="text-xl text-white/50 font-inter text-center">
                        Create Your Task Today
                    </h1>

                    <button className="btn" onClick={handleGoogleAuth}>
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

                    <button className="btn" onClick={handleGithutAuth}>
                        <img
                            src={gitHubLogo}
                            alt="google logo"
                            className="w-6 h-6"
                        />
                        Continue with Github
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
