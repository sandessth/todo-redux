import { Link } from "react-router-dom";
import { FooterComp } from "./footer-comp";

function Footer() {
  return (
    <div className="flex justify-center text-red-100 text-xs gap-1 bg-black p-2">
      {FooterComp.map((item) => (
        <div key={item.text}>{item.text}</div>
      ))}
    </div>
  );
}

export default Footer;
