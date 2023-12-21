import { useContext, useEffect, useState } from "react";
import Modal from "./Modal";
import TaskCard from "./TaskCard";
import axiosInstance from "../utils/axios";
import { UserContext } from "../App";

const ContentWrapper = ({route}) => {

  const {user:{accessToken},tasks,setTasks } =
        useContext(UserContext);



  const [loading, setLoading] = useState(true)
  
  

  const fetchTasks = async () => {
    
    const { data } = await axiosInstance.get('/get-task', {
      headers: {
        Authorization:`Bearer ${accessToken}`
      }
    })

    setLoading(false)
    setTasks(data)

  }

  useEffect(() => {
    fetchTasks()
  },[])



  return (
      <div className="h-full">
          <h1 className="text-xl font-medium sm:text-2xl">All {tasks.length} Tasks</h1>

          <hr className="border-white/20 mt-3 mb-10" />

          {tasks.length?loading ? <p>Loading...</p> : tasks.map((task, i) => <TaskCard key={i} task={task} />):"You Have no tasks"}
      </div>
  );
}

export default ContentWrapper