import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const PlayerStatus = () => {

    const {id} = useParams();
    const [playersList, setPlayersList] = useState([]);
    const [localPlayersList, setLocalPlayersList] = useState([]);

    //Show player list 
    useEffect( () => {
        axios.get("http://localhost:8000/api/players/")
            .then(res => {
                setPlayersList(res.data);
                setLocalPlayersList(res.data);
            })
            .catch(err => console.log(err));
    }, [])


    const handleButtonClick = (playerId,player,status,matchId) =>{
        try {
            if ((status === "playing" && player.playing.includes(parseInt(matchId.id))) ||(status === "notPlaying" && player.notPlaying.includes(parseInt(matchId.id))) ||(status === "undecided" && player.undecided.includes(parseInt(matchId.id)))){
                axios.put("http://localhost:8000/api/players/update/"+playerId, {
                    name:`${player.name}`,
                    position:`${player.position}`,
                    $pull: {
                      [status]: parseInt(matchId.id)
                    }
                }).then(response => {
                    const updatedPlayer = { ...player };
                    const index = updatedPlayer[status].indexOf(parseInt(matchId.id));
                        if (index !== -1) {
                        updatedPlayer[status].splice(index, 1);
                        setLocalPlayersList(prevLocalPlayersList => prevLocalPlayersList.map(p => (p._id === player._id ? updatedPlayer : p)));
                        }
                }).catch(error => {
                    console.error(error);
                });
            }
            if ((status === "playing" && !player.playing.includes(parseInt(matchId.id))) ||(status === "notPlaying" && !player.notPlaying.includes(parseInt(matchId.id))) ||(status === "undecided" && !player.undecided.includes(parseInt(matchId.id)))) {
                axios.put("http://localhost:8000/api/players/update/"+playerId, {
                    name:`${player.name}`,
                    position:`${player.position}`,
                    $push: {
                        [status]: parseInt(matchId.id)
                    }
                }).then(response => {
                    const updatedPlayer = { ...player };
                    updatedPlayer[status].push(parseInt(matchId.id));
                    setLocalPlayersList(prevLocalPlayersList => prevLocalPlayersList.map(p => (p._id === player._id ? updatedPlayer : p)));
                
                }).catch(error => {
                    console.error(error);
                });
            }            
            }catch(error) {
                console.error(error);
          };  
        }
    return (
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <div>
                    <h5><Link to={`/`}>Manage Players</Link>|<Link to={`/status/game/1`}>Manage Player Status</Link></h5>
                </div>
                <div>
                    <h4>Player Status - Game {id}</h4>
                    <h5>
                        <Link to={`/status/game/1`}>Game 1</Link>|
                        <Link to={`/status/game/2`}>Game 2</Link>|
                        <Link to={`/status/game/3`}>Game 3</Link>
                    </h5>
                    <div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Team Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {playersList.map((player, index)=> (
                                <tr key={index}>
                                    <td><Link to={`/players/${player._id}`}>{player.name}</Link></td>
                                    <td>
                                        <button disabled={player.notPlaying.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} onClick={() => handleButtonClick(player._id,player,"playing",{id})}>Playing</button>
                                        <button disabled={player.playing.includes(parseInt(id)) || player.undecided.includes(parseInt(id))} onClick={() => handleButtonClick(player._id,player,"notPlaying",{id})}>Not Playing</button>
                                        <button disabled={player.notPlaying.includes(parseInt(id)) || player.playing.includes(parseInt(id))} onClick={() => handleButtonClick(player._id,player,"undecided",{id})}>Undecided</button>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default PlayerStatus;