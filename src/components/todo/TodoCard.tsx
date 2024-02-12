import { FaEdit } from "react-icons/fa";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch } from "@/redux/hook";
import { delTodo, toggleComplete } from "@/redux/features/TodoSlice";
import { MdCloudDone, MdPending } from "react-icons/md";
import { usePutTodoMutation } from "@/redux/api/Api";
interface ITodoCardProps {
  _id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
  priority:string;
}

const TodoCard = ({ title, description, _id, isCompleted,priority }: ITodoCardProps) => {
  // const dispatch = useAppDispatch();
const [data,{isLoading}]=usePutTodoMutation()
  const toggleState = () => {
    const putData = {
      title,
      description,
      isCompleted: !isCompleted,
      priority,
    };
    const options={
      id:_id,
      data:{
        title,
        description,
        isCompleted: !isCompleted,
        priority,
      }
    };
    data(options)
    
  };
  return (
    <div className="bg-white flex justify-between items-center rounded-md p-2 border-2 my-2 ">
      <input
        className="mr-4"
        onClick={toggleState}
        type="checkbox"
        name="complete"
        id="complete"
      />
      <p className="font-semibold flex-[1]">{title}</p>
      <div className="flex items-center justify-center gap-2 flex-1">
        <div
          className={`size-2 rounded-full 
      ${priority == "high" ? "bg-red-600" : null}
      ${priority == "medium" ? "bg-blue-600" : null}
      ${priority == "low" ? "bg-green-600" : null}
       `}
        ></div>
        <p className="">{priority}</p>
      </div>
      <div className="text-2xl font-semibold flex-1">
        {isCompleted ? (
          <div className="text-green-600">
            <MdCloudDone />
          </div>
        ) : (
          <div
            className="text-green-200 flex items-center gap-2"
            title="Pending"
          >
            <MdPending />
          </div>
        )}
      </div>

      <p className="flex-[2]">{description}</p>
      <div className="space-x-5">
        <Button
          onClick={() => dispatch(delTodo(id))}
          className="bg-[#bd2626] hover:bg-[#863030] text-xl"
          title="Delete Task"
        >
          <RiDeleteBin6Line />
        </Button>
        <Button
          className="bg-[#367736] hover:bg-[#1d571d] text-xl"
          title="Update Task"
        >
          <FaEdit />
        </Button>
      </div>
    </div>
  );
};

export default TodoCard;
