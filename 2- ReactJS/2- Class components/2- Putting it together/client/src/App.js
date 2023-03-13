import PuttingItTogether from "./components/PuttingItTogether";

function App() {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <PuttingItTogether firstName="Jane" lastName="Doe" age={45} hairColor="Black"></PuttingItTogether>
      <PuttingItTogether firstName="John" lastName="Smith" age={88} hairColor="Brown"></PuttingItTogether>
      <PuttingItTogether firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></PuttingItTogether>
      <PuttingItTogether firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></PuttingItTogether>
    </div>
  );
}

export default App;
