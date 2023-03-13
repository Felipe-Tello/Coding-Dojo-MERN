import Home from "./components/Home";
import ParamsId from "./components/ParamsId";
import { BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/:id" element={<ParamsId></ParamsId>}/>
          <Route path="/:id/:color/:bgcolor" element={<ParamsId></ParamsId>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
