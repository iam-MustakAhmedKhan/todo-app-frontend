
import { X } from "lucide-react";
import { useContext, useRef } from "react";
import { UserContext } from "../App";

const Modal = () => {

     const {setModalShow } =
        useContext(UserContext);
    
    const handleModalClose = () => {
        setModalShow(false);
    }
    const formRef = useRef(null)

    const handleSave = (e) => {
        e.preventDefault()
        const form = new FormData(formRef.current);
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        const {date,description,priority,title} = formData;
        console.log(formData);
    }

    return (
        <div className="absolute top-0 left-0 z-30 bg-black/50 w-full h-full flex items-center justify-center">
            <div className="w-full bg-white mx-12 p-3 sm:w-[500px] rounded-lg font-inter">
                <button
                 onClick={handleModalClose}
                    className="ml-auto mb-5 bg-[#0f172a] text-white w-12 h-12 flex items-center justify-center rounded-full"
                >
                    <X />
                </button>

                <form action="" onSubmit={handleSave} ref={formRef}>
                    <input
                        type="text"
                        placeholder="Enter Task Title"
                        name="title"
                        className="w-full border p-3 rounded-lg outline-purple-400 font-inter mb-2 placeholder:text-md"
                    />
                    <textarea
                        className="border outline-purple-400 w-full h-[100px] p-3 rounded-lg resize-none  mb-2"
                        placeholder="Enter Task Description"
                        name="description"
                    ></textarea>
                    <input
                        type="date"
                        name="date"
                        className="w-full p-3 border rounded-lg outline-purple-400"
                    />

                    <div className="my-3 font-inter">
                        <p className="text-lg font-medium">Priority</p>
                        <div className="flex gap-2 flex-col items-start justify-center py-2">
                            <div>
                                <input
                                    type="radio"
                                    id="high"
                                    name="priority"
                                    value="high"
                                />
                                <label htmlFor="high"> High</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="medium"
                                    name="priority"
                                    value="medium"
                                />
                                <label htmlFor="medium"> Medium</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="low"
                                    name="priority"
                                    value="low"
                                />
                                <label htmlFor="low"> Low</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn text-white">Save</button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
