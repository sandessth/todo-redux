import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
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
      let foundElement = state.find((todo) => todo.id === id);
      let index = state.indexOf(foundElement);
      state[index].text = text;
      return state;
    },
    changeStatus: (state, action) => {
      const statusChange = state.find((todo) => todo.id === action.payload);
      if (statusChange) {
        statusChange.status = !statusChange.status;
      }
      return state;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, changeStatus } =
  todoSlice.actions;

export default todoSlice.reducer;
