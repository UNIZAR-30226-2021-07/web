import React from 'react';
import { ListGroup } from 'react-bootstrap';

import Message from './Message'

function MessageList({ messages }) {
    return (
        <ListGroup>
            {messages && messages.map(msg => {
                return (
                    <Message key={msg.id} message={msg} />
                );
            })}
        </ListGroup>
    )
}

export default MessageList;
