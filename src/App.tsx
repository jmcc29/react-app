import Card, { CardBody } from "./components/Card";
import List from "./components/List";
/**
 * truthy
 * falsy
 */

function App() {
  const list: string[] = ["Elemento 1", "Elemento 2", "Elemento 3"];
  const handSelect = (elemento: string) => {
    console.log(elemento);
  };
  const content = () => list.length !== 0 ? (
      <List data={list} onSelect={handSelect} />
    ) : (
      <p>No hay elementos</p>
    );
  return (
    <Card>
      <CardBody
        title="Card title"
        text="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
      {content()}
    </Card>
  );
}
export default App;