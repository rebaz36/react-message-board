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
               {messageBrd.map((message,index) =>
                    <MessageRow key={index} number={index +1} msg={message.msg} name = {message.name} />
                )}
                </tbody>
        </Table>
    </div>
)

export default MessageBoard;