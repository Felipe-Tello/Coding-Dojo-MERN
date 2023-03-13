import CreateJoke from "./CreateJoke";
import DeleteJoke from "./DeleteJoke";
import ReadJoke from "./ReadJoke";
import UpdateJoke from "./UpdateJoke";
import React, { useState, useEffect } from "react";
import axios from "axios";

const JokesAPI = () => {

    const [jokes, setJokes] = useState([]);

    // Show Product List 
    useEffect(() => {
        axios.get("http://localhost:8000/api/jokes/")
            .then(res => {
                setJokes(res.data.jokes);
            })
            .catch(err => console.log(err));
    }, [])

    const refreshJokes = () => {
        axios.get("http://localhost:8000/api/jokes/")
            .then(res => {
                setJokes(res.data.jokes);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                <div style={{display:"flex"}}>
                    <CreateJoke refreshJokes={refreshJokes} />
                    <ReadJoke jokes={jokes} />
                    <UpdateJoke jokes={jokes} refreshJokes={refreshJokes} />
                    <DeleteJoke jokes={jokes} setJokes={setJokes} refreshJokes={refreshJokes} />
                </div>
            </div>
        </div>
    );
}

export default JokesAPI;