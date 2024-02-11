import { FaEdit } from "react-icons/fa";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch } from "@/redux/hook";
import { delTodo, toggleComplete } from "@/redux/features/TodoSlice";
import { MdCloudDone, MdPending } from "react-icons/md";
interface ITodoCardProps {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}

const TodoCard = ({ title, description, id, isCompleted,priority }: ITodoCardProps) => {
  const dispatch = useAppDispatch();

  const toggleState=()=>{
    // console.log("clicked")
    dispatch(toggleComplete(id))
  }
  return (
    <div className="bg-white flex justify-between items-center rounded-md p-2 border-2 my-2 ">
      <input onClick={toggleState} type="checkbox" name="complete" id="complete" />
      <p className="font-semibold">{title}</p>
      <p>{priority}</p>
      <div className="text-2xl font-semibold">
        {isCompleted ? (
          <div className="text-green-600">
            <MdCloudDone />
          </div>
        ) : (
          <div className="text-green-200 flex items-center gap-2" title="Pending">
            <MdPending />
          </div>
        )}
      </div>
      <div></div>
      <p>{description}</p>
      <div className="space-x-5">
        <Button
          onClick={() => dispatch(delTodo(id))}
          className="bg-[#bd2626] hover:bg-[#863030] text-xl"
          title="Delete Task"
        >
          <RiDeleteBin6Line />
        </Button>
        <Button className="bg-[#367736] hover:bg-[#1d571d] text-xl" title="Update Task">
          <FaEdit />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
