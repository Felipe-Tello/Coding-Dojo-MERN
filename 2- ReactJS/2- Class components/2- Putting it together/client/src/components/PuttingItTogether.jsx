import React, { Component } from "react";

class PuttingItTogether extends Component {
    state = {
        edad: this.props.age
    }

    aumentarEdad = () => {
        this.setState(prevState => ({
            edad: prevState.edad + 1
        }));
    }

    render() {
        const {firstName, lastName, hairColor} = this.props;
        const {edad} = this.state;

        return(
                <div style={{border:"orange 2px solid",width:"15vw",height:"fit-content", display:"flex", flexDirection:"column", margin:"1% 0 1% 0", padding:"1%", borderRadius:"5%"}}> 
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <h3>{lastName}, {firstName}</h3>
                        <h5>Age: {edad}</h5>
                        <h5>Hair Color: {hairColor}</h5>
                    </div>
                    <button style={{marginTop:"10%"}} className="btn btn-success" onClick={this.aumentarEdad}>Boton de cumpleaños</button>
                </div>
        )
    }
}

export default PuttingItTogether;