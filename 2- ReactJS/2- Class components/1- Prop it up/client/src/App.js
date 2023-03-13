import PropItUp from "./components/PropItUp";

const App = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
      <PropItUp firstName="Jane" lastName="Doe" age={45} hairColor="Black"></PropItUp>
      <PropItUp firstName="John" lastName="Smith" age={88} hairColor="Brown"></PropItUp>
      <PropItUp firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown"></PropItUp>
      <PropItUp firstName="Maria" lastName="Smith" age={62} hairColor="Brown"></PropItUp>
    </div>
  );
}

export default App;
