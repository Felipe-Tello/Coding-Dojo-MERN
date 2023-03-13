const FirstJSX = () => {
    return (  
        <div>
            <div style={{display:"flex", justifyContent:"center"}}>
                <div style={{border:"2px solid orange", display:"flex", flexDirection:"column", alignItems:"center", width:"fit-content", height:"fit-content", padding:"1%", margin:"1% 0 1% 0", borderRadius:"5%"}}>
                    <h2>Hello Dojo!</h2>
                    <h4>Things I need to do:</h4>
                    <ul>
                        <li>Learn React</li>
                        <li>Climb Mt.Everest</li>
                        <li>Run a marathon</li>
                        <li>Feed the dogs</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default FirstJSX;