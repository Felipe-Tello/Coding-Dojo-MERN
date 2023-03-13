const ReadJoke = ({ jokes }) => {

    return (
        <div style={{ width: "25%", height:"33vh", overflow: "scroll" }}>
            <h2 style={{textAlign:"center"}}>Read Joke</h2>
            <ul style={{paddingLeft: "0px"}}>
                <div>
                {jokes && (
                    jokes.map((joke, index) => {
                        return <li key={index} style={{display:"flex", padding:"5%", alignItems:"center"}}>
                            <div style={{width:"100%"}}>
                                <h6><strong>ID: </strong>{joke._id}</h6>
                                <h6><strong>Setup: </strong>{joke.setup}</h6>
                                <h6><strong>Punch line: </strong>{joke.punchLine}</h6>
                            </div>
                        </li>
                    })
                )}
                </div>
            </ul>
        </div>
    );
}

export default ReadJoke;