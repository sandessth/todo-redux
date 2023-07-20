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
  },
});

// this is for dispatch
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
