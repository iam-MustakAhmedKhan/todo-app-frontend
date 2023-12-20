
import { Pencil,Trash2 } from "lucide-react";

const TaskCard = () => {
  return (
      <div className="py-10 font-inter">
          <div className="bg-[#141e33] p-4 rounded-lg flex items-center max-sm:flex-col max-sm:items-start justify-between gap-12">
              <div className='overflow-hidden'>
                  <h1 className="text-xl py-2 line-clamp-1">Title</h1>
                  <p className="text-md my-5 line-clamp-3 overflow-hidden">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque quidem tempore ex, ullam debitis nihil possimus architecto voluptate neque voluptatem, aspernatur optio esse quae laudantium magnam pariatur veritatis autem. </p>
                  <p className='text-sm'>08/25/2003</p>
              </div>

              <div className="flex gap-5">
                  <button className="bg-orange-300 text-black px-5 py-3 rounded-full font-medium hover:bg-orange-400">
                      complete
                  </button>

                  <button className="flex items-center justify-center rounded-full bg-[#0f172a] w-12 h-12">
                      <Trash2 />
                  </button>

                  <button className="flex items-center justify-center rounded-full bg-[#0f172a] w-12 h-12">
                      <Pencil />
                  </button>
              </div>
          </div>
      </div>
  );
}

export default TaskCard