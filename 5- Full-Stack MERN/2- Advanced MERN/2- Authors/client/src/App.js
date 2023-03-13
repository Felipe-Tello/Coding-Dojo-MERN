import Dashboard from "./components/Dashboard"
import NewAuthor from "./components/NewAuthor"
import UpdateAuthor from "./components/UpdateAuthor"
import Error from "./components/Error"
import { BrowserRouter, Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/new" element={<NewAuthor/>}/>
          <Route path="/edit/:id" element={<UpdateAuthor/>}/>
          <Route path="/error" element={<Error/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
