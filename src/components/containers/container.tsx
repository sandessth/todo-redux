import NavBar from "../nav-bar/navBar";
import Footer from "../footer/footer";

function Container({ children }) {
  return (
    <div className="bg-teal-600 h-screen">
      <NavBar />
      {children}

      <Footer />
    </div>
  );
}

export default Container;
