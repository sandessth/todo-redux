import React, { useState } from "react";

function Layout() {
  const [task, setTask] = useState("Welcom back!!");
  const [isMousedOver, setMousedOver] = useState(false);
  const [name, setName] = useState("");

  function handleClick(event) {
    setTask(name);
    event.preventDefault();
  }

  function handleChange(event) {
    console.log(event.target.valule);
    // console.log(event?.target.placeholder);
    // console.log(event?.target.type);
    setName(event.target.valule);
  }

  function handleMouseOver() {
    // console.log("Moused over");
    setMousedOver(true);
  }

  function handleMouseOut() {
    // console.log("Moused over");
    setMousedOver(false);
  }

  return (
    <div className="p-15 mb-4 border-b border-gray-200 dark:border-gray-700  bg-teal-600">
      <ul
        className="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="myTab"
        data-tabs-toggle="#myTabContent"
        role="tablist"
      >
        <li className="mr-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 rounded-t-lg"
            id="profile-tab"
            data-tabs-target="#profile"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
          >
            Profile
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="dashboard-tab"
            data-tabs-target="#dashboard"
            type="button"
            role="tab"
            aria-controls="dashboard"
            aria-selected="false"
          >
            Dashboard
          </button>
        </li>
        <li className="mr-2" role="presentation">
          <button
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="settings-tab"
            data-tabs-target="#settings"
            type="button"
            role="tab"
            aria-controls="settings"
            aria-selected="false"
          >
            Settings
          </button>
        </li>
        <li role="presentation">
          <button
            className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            id="contacts-tab"
            data-tabs-target="#contacts"
            type="button"
            role="tab"
            aria-controls="contacts"
            aria-selected="false"
          >
            Contacts
          </button>
        </li>
      </ul>

      <form className="p-10 mt-10" onSubmit={handleClick}>
        <h1>{task}</h1>
        <h2 className="ext-4xl font-black text-gray-900 dark:text-white mb-5">
          Add your to-do list: {name}
        </h2>

        <input
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChange}
          type="text"
          placeholder="what is your name?"
          value={name}
        />
        <br />
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          style={{ backgroundColor: isMousedOver ? "black" : "white" }}
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Layout;
