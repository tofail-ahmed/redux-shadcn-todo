import { FaEdit } from "react-icons/fa";
import { Button } from "../ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";

const TodoCard = () => {
  return (
    <div className="bg-white flex justify-between items-center rounded-md p-2 border-2 my-2 ">
      <input type="checkbox" name="" id="" />
      <p className="font-semibold">Todo Title</p>
      <p>Time</p>
      <p>Description</p>
      <div className="space-x-5">
        <Button className="bg-[#bd2626] hover:bg-[#863030] text-xl"><RiDeleteBin6Line/></Button>
        <Button className="bg-[#367736] hover:bg-[#1d571d] text-xl"><FaEdit /></Button>
      </div>
    </div>
  );
};

export default TodoCard;
