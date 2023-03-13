import React, {useState, useEffect} from "react";
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const ShowPlayer = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    const [player, setPlayer] = useState({});

    useEffect(() => {
        axios.get("http://localhost:8000/api/players/"+id)
            .then(res => {
                setPlayer(res.data);
            })
            .catch(err => console.log(err));
    }, [id])

    //Delete Player 
    const deletePlayer = player => {
        if (window.confirm(`Are you sure you want to remove ${player.name} ?`)) {
            axios.delete("http://localhost:8000/api/players/delete/"+player._id)
            .then(res => 
                navigate('/'
            ))
            .catch(err => console.log(err));
        }
    }

    return(
        <div style={{display:"flex", justifyContent:"center", marginTop:"10%"}}>
            <div>
                <Link to="/">Back to home</Link>
                <h1>Player Name: {player.name}</h1>
                <h2>Position played: {player.position}</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Match 1</th>
                            <th>Match 2</th>
                            <th>Match 3</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Playing</td>
                            <td>{player.playing ? (player.playing.includes(1)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.playing ? (player.playing.includes(2)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.playing ? (player.playing.includes(3)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.playing ? player.playing.length : " "}</td>
                        </tr>
                        <tr>
                            <td>No Playing</td>
                            <td>{player.notPlaying ? (player.notPlaying.includes(1)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.notPlaying ? (player.notPlaying.includes(2)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.notPlaying ? (player.notPlaying.includes(3)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.notPlaying ? player.notPlaying.length : " "}</td>
                        </tr>
                        <tr>
                            <td>Undecided</td>
                            <td>{player.undecided ? (player.undecided.includes(1)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.undecided ? (player.undecided.includes(2)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.undecided ? (player.undecided.includes(3)?<img src="https://w7.pngwing.com/pngs/102/702/png-transparent-check-mark-computer-icons-green-tick-green-check-icon-miscellaneous-angle-rectangle-thumbnail.png" alt="" height={25} width={25} />: <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt="" height={25} width={25}></img> ): " "}</td>
                            <td>{player.undecided ? player.undecided.length : " "}</td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <button onClick={() => deletePlayer(player)}>Delete</button>
                    <Link to="/status/game/1">Matches</Link>
                </div>
            </div>
        </div>
    )
}
export default ShowPlayer;