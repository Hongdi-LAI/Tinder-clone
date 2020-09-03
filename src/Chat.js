import React from 'react';
import Avatar from "@material-ui/core/Avatar"
import './Chat.css'
import { Link } from 'react-router-dom';

function Chat({name, message, timestamp, profilePic}) {
    return (

        <Link to = {`/chat/${name}`}>

            {/*Avatar takes name and profilepic, fist pic then initials*/}
            <div className = "chat">
                <Avatar className = "chat__image" alt = {name} src = {profilePic} />
                {/* bundling the {name} and {message} together with <div> tag */}
                <div className = "chat__details">
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className = "chat__timestamp">{timestamp}</p>
            </div>
        </Link>
        
    
    );
    
}

export default Chat;
