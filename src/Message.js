import React from 'react';
import './Message.css';
import { Avatar } from '@material-ui/core';

function Message() {
    return (
        <div className="message">
            <Avatar />
            <div className="message__info">
                <h4>Andre is Here 
                    <span className="message__timeStamp">
                        this is a timestamp
                    </span>
                </h4>
                <p>this is a message</p>
            </div>
        </div>
    )
}

export default Message
