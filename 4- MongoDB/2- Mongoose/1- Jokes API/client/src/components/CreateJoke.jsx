import React, { useState } from "react";
import axios from "axios";

const FormJoke = ({ refreshJokes }) => {

    const [setup, setSetup] = useState("");
    const [punchLine, setPunchLine] = useState("");

    const submitJoke = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/jokes/new", {setup,punchLine})
            .then(res => {
                setSetup("")
                setPunchLine("")
                refreshJokes()
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{width:"25%", height:"33vh", overflow: "scroll"}}>
            <h2 style={{textAlign:"center"}}>Create Joke</h2>
            <form onSubmit={submitJoke}>
                <div style={{marginTop:"5vh"}}>
                    <label htmlFor="setup">Setup:</label>
                    <input id="setup" name="setup" type="text" value={setup} onChange={(e) => setSetup(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="punchLine">PunchLine:</label>
                    <input id="punchLine" name="punchLine" type="text" value={punchLine} onChange={(e) => setPunchLine(e.target.value)} />
                </div>
                <input type="submit" value="Create" />
            </form>
        </div>
    );
}
 
export default FormJoke;