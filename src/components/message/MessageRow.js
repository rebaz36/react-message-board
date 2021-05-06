import React from "react";

export const MessageRow = ({ number, name, msg }) => (
  <tr>
    <td>{number}</td>
    <td>{name}</td>
    <td>{msg}</td>
  </tr>
);

export default MessageRow;
