import Dashboard from "./components/Dashboard";
import ShowProduct from "./components/ShowProduct";
import UpdateProduct from "./components/UpdateProduct";
import { BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/:id" element={<ShowProduct/>}/>
          <Route path="/:id/edit" element={<UpdateProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
