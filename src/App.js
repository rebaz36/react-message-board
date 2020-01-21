import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MessageBoard from './MessageBoard';
import MessageForm from './MessageForm';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export const App = ({className}) => {
  

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

  <div className={className}>
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col><MessageForm handleCallBack= {handleCallBack}/></Col>
      </Row>
      <Row>
        <Col><MessageBoard messageBrd = {messageBrd}/></Col>
      </Row>
      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  </div>
  )}

export default App;
