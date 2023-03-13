import { useParams } from "react-router-dom";

const ParamsId = () => {

    const {id,color,bgcolor} = useParams();

    let style = {};

    if (color && bgcolor) {
      style = { color: color, backgroundColor: bgcolor };
    }

    return (
        <div>
        
            <div>
                <div>
                    <h5>Possible routes</h5>
                    <ul>
                        <li>.../react-routing/practica-de-enrutamiento - <a href="/">Back to home</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"number" - Example: <a href="/5">5</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"word" - Example: <a href="/portfolio">portfolio</a></li>
                        <li>.../react-routing/practica-de-enrutamiento/"word"/"color"/"color" - Example: <a href="/MERN/red/green">MERN/red/green</a></li>
                    </ul>
                    <div>
                    {(color && bgcolor) || isNaN(id) ? 
                    <h1 style={style}>The Word is: {id}</h1>
                    :
                    <h1>The Number is: {id}</h1>}
                </div>
                </div>
            </div>
        </div>
    );
}
 
export default ParamsId;