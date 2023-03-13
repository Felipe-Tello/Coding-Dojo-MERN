import Dashboard from "./components/Dashboard";
import ShowProduct from "./components/ShowProduct";
import { BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard></Dashboard>}/>
          <Route path="/:id" element={<ShowProduct></ShowProduct>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
