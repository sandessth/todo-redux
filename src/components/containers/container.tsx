import NavBar from "../nav-bar/navBar";
import Footer from "../footer/footer";
import Layout from "../todo/nams-to-do-ui";
import Todo from "../todo/todo";

function Container() {
  return (
    <div className="bg-neutral-600 bg-cover bg-center bg-fixed">
      <NavBar />
      <Layout />
      <Todo />
      <Footer />
    </div>
  );
}

export default Container;
