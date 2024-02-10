import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted?: boolean;
}
interface IInititialState {
  todos: ITodo[];
}
const initialState: IInititialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    delTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete:(state,action:PayloadAction<string>)=>{
      const task=state.todos.find((item=>item.id==action.payload))
      task!.isCompleted=!task?.isCompleted
    }
  },
});
export const { addTodo,delTodo ,toggleComplete} = todoSlice.actions;

export default todoSlice.reducer;