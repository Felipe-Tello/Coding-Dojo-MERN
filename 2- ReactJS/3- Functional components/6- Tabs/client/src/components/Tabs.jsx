import {useState} from "react";

const Tabs = ({labelContent}) => {

    const [idSelected, setIdSelected] = useState(0);

    const onClickHandler = (e, value) => {
        setIdSelected(value);
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                {labelContent.map((tab, index) => {
                    return(
                        <div key={index} style={{padding:"10px 60px", display:"inline-block"}} onClick={(e) => onClickHandler(e,index)}>
                            <span>{tab.label}</span>
                        </div>
                    )
                    })
                }
                <div>
                    {<p>{labelContent[idSelected].content}</p>}
                </div>
            </div>
        </div>
    );
}
 
export default Tabs;
