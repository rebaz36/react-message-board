import React from 'react';
import MessageRow from './MessageRow';
import Table from 'react-bootstrap/Table';

export const MessageBoard = ({className, messageBrd}) => (
    <div className={className}>
        <Table striped bordered hover variant ="dark">
            <tbody>
           <tr>
               <th>#</th>
               <th>Name</th>
               <th>Message</th>
                
           </tr>
               {messageBrd.map(message =>
                    <MessageRow key={message.id} {...message} />
                )}
                </tbody>
        </Table>
    </div>
)

export default MessageBoard;