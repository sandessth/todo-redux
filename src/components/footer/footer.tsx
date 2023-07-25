// import { Link } from "react-router-dom";
import { FooterComp } from "./footer-comp";

function Footer() {
  return (
    <>
      <div className="fixed bottom-0 shadow-xl flex justify-center w-full text-red-100 text-xs border-2 border-slate-500 bg-slate-900/50 backdrop-blur p-2 gap-1 bg-black p-2">
        {FooterComp.map((item) => (
          <div key={item.text}>{item.text}</div>
        ))}
      </div>
    </>
  );
}

export default Footer;
