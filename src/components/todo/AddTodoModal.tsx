import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
// import { useAppDispatch } from "@/redux/hook";
import { addTodo } from "@/redux/features/TodoSlice";
import { useAddTodoMutation } from "@/redux/api/Api";
import { Select, SelectContent, SelectGroup, SelectLabel, SelectTrigger, SelectValue,SelectItem } from "../ui/select";

const AddTodoModal = () => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  //!for local----
  // const dispatch = useAppDispatch();
  const [addTodo, { data, isLoading, isError, isSuccess }] =
    useAddTodoMutation();
  // console.log(data, isError, isSuccess, isLoading);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // const mathString = Math.random().toString(36).slice(2, 10);
    const taskDetails = {
      title: task,
      isCompleted:false,
      description,
      priority,
    };
    //* for server--
    addTodo(taskDetails);
    //! for local----
    // dispatch(addTodo(taskDetails));
    // console.log(taskDetails)
    console.log(taskDetails)
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primary-gradient text-lg font-semibold">
          Add todo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription>
            Add your task that you want to finish.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="task" className="text-right">
                Task
              </Label>
              <Input
                onBlur={(e) => setTask(e.target.value)}
                id="task"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setDescription(e.target.value)}
                id="description"
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Select Priority
              </Label>
              <Select onValueChange={(value:string)=>setPriority(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select any one" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="low">Low</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
            </div>
          </div>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit">Add Task</Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
