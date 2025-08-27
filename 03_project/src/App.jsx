import Card from "./components/Card";

function App() {
  let myArr = [1,2,10]
  return (
    <>
      <h1 className="text-3xl font-bold underline text-green-400">
        Hello world!
      </h1>
      <Card title = "WebDev" developer = "Carel" myArr = {myArr}  btnText = "Go next"/>
      <Card title = "CP" developer = "Andriev"/>
    </>
  );
}

export default App;
