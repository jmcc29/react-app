import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  return (
    <Card>
      <CardBody title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <List data={list}/>
    </Card>
  );
}
export default App;
                                           