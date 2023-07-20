import { Link } from "react-router-dom";
import { menuLinks } from "./navLinks";

function NavBar() {
  return (
    <>
      <div className="sticky rounded-lg top-0 z-50 shadow-xl mb-2 text-red-100 text-2xl flex justify-center border-2 border-slate-500 bg-slate-900/50 backdrop-blur p-2">
        <div className="flex justify-end">
          {menuLinks.map((item) => (
            <div>{item.text}</div>
          ))}
        </div>
      </div>
    </>
  );
}

export default NavBar;
