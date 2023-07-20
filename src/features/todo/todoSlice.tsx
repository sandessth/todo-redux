import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        text: action.payload,
        status: false,
      };

      return [...state, todo];
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;

      const todo = state.find((todo) => todo.id === id);
      todo.text = text;
    },
    changeStatus: (state, action) => {
      const statusChange = state.find((todo) => todo.id === action.payload);
      if (statusChange) {
        statusChange.status = !statusChange.status;
      }
      //   console.log({state.status})
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeStatus } =
  todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
