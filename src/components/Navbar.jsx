import { Menu } from "lucide-react";
import { useContext } from "react";
import { UserContext } from "../App";

const Navbar = () => {

    const {isShow,setIsShow,modalShow,setModalShow} = useContext(UserContext)

    const handleShow = () => {
        setIsShow(true)
    
    }
    const handleModalShow = () => {
        setModalShow(true)
    }
    return (
        <div className="w-full flex items-center justify-between">
            <button
                className="sm:hidden w-12 h-12 flex items-center justify-center rounded-full bg-[#141e33]"
                onClick={handleShow}
            >
                <Menu />
            </button>

            <button onClick={handleModalShow} className="bg-gray-500 btn w-fit px-5 ml-auto">
                Create New Task
            </button>
        </div>
    );
};

export default Navbar;
