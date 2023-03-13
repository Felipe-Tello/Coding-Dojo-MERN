import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {

    const [playersList, setPlayersList] = useState([]);

    //Show player list 
    useEffect( () => {
        axios.get("http://localhost:8000/api/players/")
            .then(res => {
                setPlayersList(res.data);
            })
            .catch(err => console.log(err));
    }, [])

    const deletePlayer = player => {
        if (window.confirm(`Are you sure you want to remove ${player.name} ?`)) {
            axios.delete("http://localhost:8000/api/players/delete/"+player._id)
            .then(res => {
                //Update playerList
                let newPlayersList = playersList.filter(p => p._id !== player._id);
                setPlayersList(newPlayersList);
            })
        }
    }

    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <div>
                    <h5><Link to={`/`}>Manage Players</Link>|<Link to={`/status/game/1`}>Manage Player Status</Link></h5>
                </div>
                <div>
                    <h4><Link to={`/`}>List</Link>|<Link to={`/players/addplayer`}>Add Player</Link></h4>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Team Name</th>
                                    <th>Preferred Position</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersList.map((player, index)=> (
                                <tr key={index}>
                                    <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
                                    <td>{player.position}</td>
                                    <td>
                                        <button onClick={() => deletePlayer(player)}>Delete</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;