
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-4">
        
        <AddTodoModal/>
       <TodoFilter/>
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-2 space-y-2 ">
       <div className="bg-white/50 text-center p-5  rounded-md">
            {/* <p className="font-bold p-5 text-3xl">There is no pending task</p> */}
            
            {
              todos.map((todo)=>(
                <TodoCard {...todo}></TodoCard>
              ))
            }
            </div>
       </div>
      </div>
  
  );
};

export default TodoContainer;
