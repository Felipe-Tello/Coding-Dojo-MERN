import {useState} from "react";

const BoxGenerator = () => {

    const [blocks, setBlocks] = useState([]);
    const [color, setColor] = useState("");
    const [number, setNumber] = useState("");

    const addBlock = e =>{
        e.preventDefault();
        if (CSS.supports("color", color)&& number === "") {
            setBlocks([...blocks, { style: { backgroundColor: color, width: 100, height: 100 } }]);
            setColor("");
        }
        if (CSS.supports("color", color)&& number !== ""){
            setBlocks([...blocks, { style: { backgroundColor: color, width: parseInt(number), height: parseInt(number) } }]);
            setColor("");
            setNumber("");
        }
    }

    return (
        <div>
            <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"10%"}}>
                <form onSubmit={addBlock}>
                    <div>
                        <label>Color</label>
                        <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/>
                    </div>
                    <div>
                        <label>Dimensions (By default: is 100 pixel)</label>
                        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}/>
                    </div>
                    <button type="submit">Add</button>
                </form>
                <br />
                <div style={{display:"flex"}}>
                    {blocks.map((block, index) =>{
                        return <div key={index} style={block.style}></div>
                    })}
                </div>
            </div>
        </div>
    );
}
 
export default BoxGenerator;