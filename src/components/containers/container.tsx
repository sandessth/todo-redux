import NavBar from "../nav-bar/navBar";
import Footer from "../footer/footer";

function Container({ children }) {
  return (
    <div className="bg-neutral-600">
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default Container;
