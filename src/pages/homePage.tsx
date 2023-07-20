import Layout from "../components/Layout/layout";
import Container from "../components/containers/container";
import Todo from "../components/todo/todo";

function HomePage() {
  return (
    <>
      <Container>
        <Layout />
        <Todo />
      </Container>
    </>
  );
}

export default HomePage;
