import Dashboard from "./components/Dashboard"
import NewPlayer from "./components/NewPlayer"
import ShowPlayer from "./components/ShowPlayer"
import PlayerStatus from "./components/PlayerStatus"

import { BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/players/addplayer" element={<NewPlayer/>}/>
            <Route path="/players/:id" element={<ShowPlayer/>}/>
            <Route path="/status/game/:id" element={<PlayerStatus/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
