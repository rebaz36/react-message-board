import React from 'react';

export const MessageRow = ({id, name, msg}) => (
    <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{msg}</td>
    </tr>
)

export default MessageRow;