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
    delTodo:(state,action)=>{
      state.todos=state.todos.filter((item)=>item.id!==action.payload)
      
    }
  },
});
export const { addTodo,delTodo } = todoSlice.actions;

export default todoSlice.reducer;