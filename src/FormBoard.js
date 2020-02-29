//child of app and parent to MessageForm and Message Board
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageForm from './MessageForm';
import MessageBoard from './MessageBoard';
//This should be a GET
export const FormBoard = () => {
const [messageBrd, setMessageBrd] = React.useState([]);
React.useEffect( () => {
  (async () => {
    try {
      const response = await(await fetch('http://10.21.75.37:3004/messages')).json();
      console.log(response);
      setMessageBrd(response);
    }catch(error){
      console.log('API Error: ' + error);
    }
  })();
},[]);

const userCredentials = { username: 'test2', password: 'test1234' };

  
    const handleCallBack = (values =>{
      const basicString = `${userCredentials.username}:${userCredentials.password}`;
      (async () => {
        
      
        try {
          // Make an API Request and store the Response
          await fetch(`http://10.21.75.37:3004/messages`, {
            method: 'POST',
            headers: {
              'Authorization': `Basic ${btoa(basicString)}`,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "name" : values.name,
              "msg" : values.msg
            })
            
          });
          setMessageBrd([values, ...messageBrd])
          console.log(JSON.stringify(values));
        } catch (error) {
          // This is for Networking Errors
          console.log('API Error: ' + error);
        }
      })();
    
    })
return (

    <div>
    <Row>
        <Col><MessageForm handleCallBack = {handleCallBack} /></Col>
      </Row>
      <Row>
        <Col><MessageBoard messageBrd = {messageBrd}/></Col>
      </Row>
      </div>
)}

export default FormBoard