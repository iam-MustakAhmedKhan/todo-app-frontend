
import { Pencil,Trash2 } from "lucide-react";
import axiosInstance from "../utils/axios";
import { useContext, useState } from "react";
import { UserContext } from "../App";

const TaskCard = ({ task }) => {
    
    const { title, des, date, _id,completed,priority } = task
    const {
        user: { accessToken },
        tasks,
        setTasks,
        setEditMode,
        setModalShow,
        setSingleTask
    } = useContext(UserContext);

    const [com,setComp]=useState(completed);
    
    const handleDelete = async () => {
        const { data } = await axiosInstance.post('/delete-task', {
            task_id: _id
        })

        setTasks(tasks.filter(task=>task._id !==_id))
    }


    const handleEdit = async () => {
        const { data } = await axiosInstance.post('/single-task', {
            task_id: _id
        })
        setSingleTask(data)
        setModalShow(true);
        setEditMode(true);
    }

    const handleComplete = async () => {
        
        const { data } = await axiosInstance.patch("/update-task", {
            task_id: _id,
            completed: !com,
        });
        
        
        console.log(data)
        
        const task = tasks.findIndex((t) => t._id === data._id);
        tasks[task] = data;
        setTasks(tasks);
        
        console.log(tasks)
        setComp((prev)=>!prev)

        
    }

    console.log(priority)

  return (
      <div className="py-2 font-inter">
          <div
              className={`bg-[#141e33] ${priority=='High'&&'border-green-500 border'} ${priority=='Medium'&&'border-yellow-500 border'} border-red-500 border p-4 rounded-lg flex items-center max-sm:flex-col max-sm:items-start justify-between gap-12`}
          >
              <div className="overflow-hidden">
                  <h1 className="text-xl py-2 line-clamp-1"> {title} </h1>
                  <p className="text-md my-5 line-clamp-3 overflow-hidden">
                      {des}
                  </p>
                  <p className="text-sm">
                      {new Date(date).toISOString().split("T")[0]}
                  </p>
              </div>

              <div className="flex gap-5">
                  <button
                      onClick={handleComplete}
                      className={`${
                          com ? "border text-white/50" : "bg-orange-300"
                      } text-black px-5 py-3 rounded-full font-medium hover:bg-orange-400`}
                  >
                      {com ? "completed" : "complete"}
                  </button>

                  <button
                      onClick={handleDelete}
                      className="flex items-center justify-center rounded-full bg-[#0f172a] w-12 h-12"
                  >
                      <Trash2 />
                  </button>

                  <button
                      onClick={handleEdit}
                      className="flex items-center justify-center rounded-full bg-[#0f172a] w-12 h-12"
                  >
                      <Pencil />
                  </button>
              </div>
          </div>
      </div>
  );
}

export default TaskCard