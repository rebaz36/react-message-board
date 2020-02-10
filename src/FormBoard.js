//child of app and parent to MessageForm and Message Board
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
//This should be a GET
export const FormBoard = () => {
const [messageBrd, setMessageBrd] = React.useState([
    { name : "Bill", msg : "Hi All!"},
    { name : "Ann", msg : "ICS 221 is fun!"},
    { name : "Johnny", msg : "I'm stranded!"},
    { name : "Barb", msg : "Hi"},
    { name : "Frank", msg : "Who's tired?"},
    { name : "Sarah", msg : "I heart React"}]);
  
    const handleCallBack = (values =>{
      setMessageBrd([values, ...messageBrd])
    })
return (

    <div>
    <Row>
        <Col><MessageForm handleCallBack= {handleCallBack}/></Col>
      </Row>
      <Row>
        <Col><MessageBoard messageBrd = {messageBrd}/></Col>
      </Row>
      </div>
)}

export default FormBoard