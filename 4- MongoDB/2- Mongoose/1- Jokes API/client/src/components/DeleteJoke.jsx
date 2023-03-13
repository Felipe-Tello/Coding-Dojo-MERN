import axios from "axios";

const DeleteJoke = ({ jokes, setJokes, refreshJokes }) => {

    const deleteJoke = id => {
        axios.delete("http://localhost:8000/api/jokes/delete/" + id)
            .then(res => {
                setJokes(jokes.filter(producto => producto._id !== id));
                refreshJokes();
            })
    }

    return (
        <div style={{ width: "25%", height:"33vh", overflow: "scroll"  }}>
            <h2 style={{textAlign:"center"}}>Delete Joke</h2>
            <ul style={{paddingLeft: "0px"}}>
                <div>
                {jokes && (
                    jokes.map((joke, index) => {
                        return <li key={index} style={{display:"flex", padding:"5%", alignItems:"center", justifyContent:"space-evenly"}}>
                            <div style={{width:"80%"}}>
                                <h6><strong>ID: </strong>{joke._id}</h6>
                                <h6><strong>Setup: </strong>{joke.setup}</h6>
                                <h6><strong>Punch line: </strong>{joke.punchLine}</h6>
                            </div>
                            <div style={{width:"20%",display:"flex", justifyContent:"center"}}>
                                <button onClick={() => deleteJoke(joke._id)}>Delete</button>
                            </div>
                        </li>
                    })
                )}
                </div>
            </ul>
        </div>
    );
}

export default DeleteJoke;