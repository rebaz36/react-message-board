import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MessageBoard from './MessageBoard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var messageBrd = [{id : 1, name : "Bill", message : "Hi All!"},
                  {id : 2, name : "Ann", message : "ICS 221 is fun!"},
                  {id : 3, name : "Johnny", message : "I'm stranded!"},
                  {id : 4, name : "Barb", message : "Hi"},
                  {id : 5, name : "Frank", message : "Who's tired?"},
                  {id : 6, name : "Sarah", message : "I heart React"}]

export const App = ({className}) => (
  <div className={className}>
    <Container>
      <Row>
        <Col><Header /></Col>
      </Row>
      <Row>
        <Col><MessageBoard messageBrd = {messageBrd}/></Col>
      </Row>
      <Row>
        <Col><Footer /></Col>
      </Row>
    </Container>
  </div>
)

export default App;
