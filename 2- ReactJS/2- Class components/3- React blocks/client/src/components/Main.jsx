import Advertisement from "./Advertisement";
import SubContents from "./SubContents";

const Main = () => {
    return (
        <div style={{width: "72.9%",height: "25.5vw", backgroundColor:"#e06666", display:"inline-block" ,verticalAlign:"top", padding:"2% 0 2% 2.5%", border:"3px solid black"}}>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </div>
    );
}
 
export default Main;