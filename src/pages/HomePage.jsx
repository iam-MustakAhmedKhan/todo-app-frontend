import googleLogo from "../assets/icons/google.png";
import gitHubLogo from "../assets/icons/github.png"

const HomePage = () => {
    return (
        <>
            <div className="w-full px-12 h-screen bg-[#0f172a] flex items-center justify-center">
                <div className="bg-[#141e33] min-w-[400px] p-4 rounded-md">
                    <h1 className="text-xl text-white/50 font-inter text-center">
                        Create Your Task Today
                    </h1>

                    <button className="btn">
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

                    <button className="btn">
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
