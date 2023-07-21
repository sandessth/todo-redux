import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todo/todoSlice";
import { deleteTodo } from "../../features/todo/todoSlice";
import { updateTodo } from "../../features/todo/todoSlice";
import { changeStatus } from "../../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editValue, setEditValue] = useState(todos.text);
  // const [filter, setFilter] = useState("");

  const handleDelete = (id) => {
    event.preventDefault();
    dispatch(deleteTodo(id));
  };

  const saveTodo = () => {
    const payload = {
      id: task.id,
      text: editValue,
    };
    dispatch(updateTodo(payload));
    setEditValue("");
  };

  const cancelEdit = () => {
    setIsEdit(false);
  };

  const status = (id) => {
    event.preventDefault();
    dispatch(changeStatus(id));
    console.log({ status });
  };

  const handleAdd = () => {
    event.preventDefault();
    if (!task) {
      toast.error("Task cannot be empty");
    } else {
      console.log({ task });
      // console.log({ filter });
      dispatch(addTodo(task));
      setTask("");
    }
  };
  return isEdit ? (
    <div className="flex justify-center">
      <div className="w-3/4 bg-white rounded-xl m-2 overflow-hidden shadow-xl">
        <div className="py-3 bg-white rounded-tr-4xl">
          <form className="flex justify-center  m-2 p-2 ">
            <input
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="peer h-10 w-2/3 mr-2 p-2 border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
              name="task"
              type="text"
            />
            <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
              Edit task here
            </label>
            {/* <input
        type="text"
        value={editValue}
        onChange={(e) => setEditValue(e.target.value)}
        className="mr-4 rounded-lg w-1/2"
      /> */}
            <div className="flex gap-2">
              <button
                onClick={() => saveTodo(task.id)}
                className="p-2 px-6 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="p-2 px-5 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="flex justify-center">
        {/* <div className="col-span-1"></div> */}
        <div className=" w-2/3 bg-white rounded-xl m-2 overflow-hidden shadow-xl">
          <div className="px-5 pt-8 pb-6 bg-white rounded-tr-4xl">
            <form>
              <div className="grid grid-cols-9 relative gap-2">
                <input
                  value={task}
                  onChange={(event) => setTask(event.target.value)}
                  className="peer col-span-7 h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-rose-600"
                  name="task"
                  type="text"
                  placeholder="john@doe.com"
                />
                <label className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                  Add task here
                </label>
                <button
                  onClick={handleAdd}
                  className="rounded col-span-2 bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="col-span-2 bg-white rounded-xl m-2 overflow-hidden shadow-xl">
          <div className="px-5 pt-8 bg-white rounded-tr-4xl">
            <form>
              <select
                // value={filter}
                // onChange={(event) => setFilter(event.target.value)}
                className="peer h-10 w-full border-b-2 border-gray-300 text-gray-900"
                name="filter"
              >
                <option>Filter </option>
                <option>All</option>
                <option>Completed</option>
                <option>Incomplete</option>
              </select>
            </form>
          </div>
        </div> */}
      </div>

      {todos.map((tasks) => (
        <div className="text-red-100 flex justify-center rounded-xl overflow-hidden">
          <div className=" w-2/3 m-2 pb-1 shadow-xl">
            <ul>
              <li key={tasks.id}>
                <div className="flex items-center justify-between ">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="appearance indeterminate:bg-gray-300 mr-2 hover:bg-slate-900 items-center"
                      onChange={() => status(tasks.id)}
                      checked={tasks.status}
                    />

                    <span>{tasks.text}</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setIsEdit(!isEdit)}
                      className="p-2 px-5 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(tasks.id)}
                      className="p-2 px-3 rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ))}

      <ToastContainer position={toast.POSITION.TOP_CENTER} />
    </>
  );
}

export default Todo;
