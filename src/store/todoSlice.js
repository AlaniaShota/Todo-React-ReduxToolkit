import { createSlice } from "@reduxjs/toolkit";
import nextId from "react-id-generator";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todo: [],
  },
  reducers: {
    addTodo(state, action) {
      console.log(state, action);
      state.todo.push({
        id: nextId(),
        text: action.payload.text,
        complete: false,
      });
    },
    todoRemove(state, action) {
      state.todo = state.todo.filter((item) => item.id !== action.payload.id);
    },
    toggleTodoComplete(state, action) {
      const toggleTodo = state.todo.find(
        (item) => item.id === action.payload.id
      );
      toggleTodo.complete = !toggleTodo.complete;
    },
  },
});

export const { addTodo, todoRemove, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;
