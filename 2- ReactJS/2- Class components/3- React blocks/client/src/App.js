import Main from './components/Main';
import Header from './components/Header';
import SubContents from './components/SubContents';
import Navigation from './components/Navigation';
import Advertisement from './components/Advertisement';
import './App.css';

function App() {
  return (
    <div style={{display:"flex", justifyContent:"center"}}>
      <div style={{width: "60vw",height: "100%", backgroundColor:"#dddddd", padding:"2% 2% 2% 2%", border:"3px solid black", margin:"1% 0 1% 0"}}>
        <Header/>
        <Navigation/>
        <Main>
          <SubContents/>
          <SubContents/>
          <SubContents/>
          <Advertisement/>
        </Main>
      </div>
    </div>
  );
}

export default App;
