import Card, { CardBody } from "./components/Card";
import List from "./components/List";
function App() {
  const list = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const handSelect = (elemento: string) => {
    console.log(elemento);
  }
  const handSelect2 = (elemento: string) => {
    console.log("Mostrando: " + elemento);
  }
  return (
    <Card>
      <CardBody title="Card title" text="Some quick example text to build on the card title and make up the bulk of the card's content."/>
      <List data={list} onSelect = {handSelect}/>
      <List data={list} onSelect = {handSelect2}/>
    </Card>
  );
}
export default App;
                                           