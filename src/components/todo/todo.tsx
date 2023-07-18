import { useState } from "react";

function Todo() {
  const [task, setTask] = useState("");
  console.log({ task });
  return (
    <>
      <div className="flex justify-center items-center p-2">
        <div className="w-2/3 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
          <div className="px-10 pt-8 pb-6 bg-white rounded-tr-4xl">
            <form>
              <div className="grid grid-cols-8 relative gap-2">
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
                <button className="rounded bg-rose-500 hover:bg-rose-400 text-white font-semibold text-center">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
