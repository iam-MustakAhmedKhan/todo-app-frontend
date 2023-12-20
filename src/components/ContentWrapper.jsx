import Modal from "./Modal";
import TaskCard from "./TaskCard";

const ContentWrapper = () => {
  return (
      <div className="">
          <h1 className="text-xl font-medium sm:text-2xl">All 5 Tasks</h1>
          
          <hr className="border-white/20 mt-3" />

          <TaskCard />
          
 
      </div>
  );
}

export default ContentWrapper