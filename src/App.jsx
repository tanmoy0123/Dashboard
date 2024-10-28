import Card from "./components/cards/Card";
import Content from "./components/content/Content";
import Navbar from "./components/navbar/Navbar";
import Row from "./components/row/Row";
import Row2 from "./components/row-2/Row2";
import Graph2 from "./components/graph/Graph2";

const App = () => {
  return (
    <div className="overflow-hidden  w-full block">
      <Navbar />
      <Content />
      <Card />
      <Row />
      <Row2 />
    </div>
  );
};

export default App;
