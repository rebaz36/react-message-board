import React from 'react';
import MessageRow from './MessageRow';

export const MessageBoard = ({className, messageBrd}) => (
    <div className={className}>
        <table>
           <tr>
               <th>#</th>
               <th>Name</th>
               <th>Message</th>
                
           </tr>
               {messageBrd.map(message =>
                    <MessageRow key={message.id} {...message} />
                )}
        </table>
    </div>
)

export default MessageBoard;