import React, {useState, useEffect} from 'react'

function Chat({socket, username, room}) {
    
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                sender: username,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
            };

            // send message data to socket server 
            await socket.emit("send_message", messageData);
            setMessageList((list) => [...list, messageData]);
            setCurrentMessage("");
        }
    };
    // calls function whenever change is made in socket server 
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
            console.log(data);
        })
    }, [socket]);

    return (
        <div>
            <div>
                <p>Live Chat</p>
            </div>
            <div>
                {messageList.map((messageContent, index) => {
                    return ( 
                    <div key={index} id={username === messageContent.sender ? "you" : "other"}>
                        <div style={{display:"flex"}}>
                            <div>
                                <p>{messageContent.message}</p>
                            </div>
                            <div style={{display:"flex"}}>
                                <p id='time'>{messageContent.time}</p>
                                <p id="author">{messageContent.sender}</p>
                            </div>
                        </div>                    
                </div>
                    );
                })}
            </div>
            <div>
                <input type="text" placeholder="your message" value={currentMessage} onChange={(event) => {setCurrentMessage(event.target.value)}} onKeyPress={(event) => {event.key === "Enter" && sendMessage();}}/>
                <button onClick={sendMessage}>Send</button>
            </div>
            <p><a href='/socketio/chat-app'>Exit Chat Room</a></p>
        </div>
    )
}

export default Chat
