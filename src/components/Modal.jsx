
import { X } from "lucide-react";
import { useContext, useRef } from "react";
import { UserContext } from "../App";
import axiosInstance from "../utils/axios";

const Modal = () => {

     const {
         setModalShow,
         user: { accessToken },
         tasks,
         setTasks,
         editMode,
         setEditMode,
         singleTask
     } = useContext(UserContext);
    
    const handleModalClose = () => {
        setModalShow(false);
        setEditMode(false);
    }
    const formRef = useRef(null)

    const handleSave = async (e) => {
        e.preventDefault()
        const form = new FormData(formRef.current);
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        const {date,description,priority,title} = formData;
        

       const {data}= await axiosInstance.post('/create-task', {
            title,
            description,
            date,
            priority
        }, {
            headers: {
             Authorization:`Bearer ${accessToken}`
            }
        })

        setTasks([
            ...tasks,
            data

        ])
        setModalShow(false)
    }

    const handleEdit = async (e) => {
        e.preventDefault();
        const form = new FormData(formRef.current);
        let formData = {};

        for (let [key, value] of form.entries()) {
            formData[key] = value;
        }

        const { date, description, priority, title } = formData;

        const { data } = await axiosInstance.patch(
            "/update-task",
            {
                task_id:singleTask._id,
                title,
                description,
                date,
                priority,
            }
        );

  

        const task = tasks.findIndex(t => t._id === singleTask._id)
        tasks[task] = data
        
        setTasks(tasks);
        setModalShow(false);
        setEditMode(false);
    };




    return (
        <div className="absolute top-0 left-0 z-30 bg-black/50 w-full h-full flex items-center justify-center">
            <div className="w-full bg-white mx-12 p-3 sm:w-[500px] rounded-lg font-inter">
                <button
                    onClick={handleModalClose}
                    className="ml-auto mb-5 bg-[#0f172a] text-white w-12 h-12 flex items-center justify-center rounded-full"
                >
                    <X />
                </button>

                <form action="" onSubmit={editMode?handleEdit:handleSave} ref={formRef}>
                    <input
                        type="text"
                        placeholder="Enter Task Title"
                        name="title"
                        className="w-full border p-3 rounded-lg outline-purple-400 font-inter mb-2 placeholder:text-md"
                        defaultValue={editMode ? singleTask?.title : ""}
                    />
                    <textarea
                        className="border outline-purple-400 w-full h-[100px] p-3 rounded-lg resize-none  mb-2"
                        placeholder="Enter Task Description"
                        name="description"
                        defaultValue={editMode ? singleTask?.des : ""}
                    ></textarea>
                    <input
                        type="date"
                        name="date"
                        className="w-full p-3 border rounded-lg outline-purple-400"
                        defaultValue={
                            editMode
                                ? new Date(singleTask?.date)
                                      .toISOString()
                                      .split("T")[0]
                                : ""
                        }
                    />

                    <div className="my-3 font-inter">
                        <p className="text-lg font-medium">Priority</p>
                        <div className="flex gap-2 flex-col items-start justify-center py-2">
                            <div>
                                <input
                                    type="radio"
                                    id="high"
                                    name="priority"
                                    value="High"
                                    defaultChecked={
                                        editMode &&
                                        singleTask.priority == "High"
                                    }
                                />
                                <label htmlFor="high"> High</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="medium"
                                    name="priority"
                                    value= "Medium"
                                    defaultChecked={
                                        editMode &&
                                        singleTask.priority == "Medium"
                                    }
                                />
                                <label htmlFor="medium"> Medium</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="low"
                                    name="priority"
                                    value= "Low"
                                    defaultChecked={
                                        editMode &&
                                        singleTask.priority == "Low"
                                    }
                                />
                                <label htmlFor="low"> Low</label>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn text-white">
                        {editMode ? "Edit" : "Save"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Modal;
