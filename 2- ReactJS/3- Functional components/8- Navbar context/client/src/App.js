import Wrapper from "./components/Wrapper"
import Navbar from "./components/Navbar"
import FormWrapper from "./components/FormWrapper"

const App = () => {
  return (
    <div style={{display:"flex", justifyContent:"center", margin:"10%"}}>
      <div>
        <Wrapper>
          <Navbar></Navbar>
          <FormWrapper></FormWrapper>
        </Wrapper>
      </div>
    </div>
  );
}

export default App;
