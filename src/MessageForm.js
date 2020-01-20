import React from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const MessageForm = ({className}) => (
    <div className={className}>
        <Form>
        <Card spacing="mb-4">
            <Card.Body padding="2px">
                <Card.Title>Add a Message:</Card.Title>
                <Form.Row className="align-items-center">
                    <Form.Group as={Col} controlId="name">
                        <Form.Label>Enter Name:</Form.Label>
                        <Form.Control placeholder="Your name"></Form.Control>
                    </Form.Group>
                    <Form.Group as={Col} md={6} controlId="msg">
                        <Form.Label>Enter Message:</Form.Label>
                        <Form.Control placeholder="Your message"></Form.Control>
                    </Form.Group>
                    <Col>
                    <Button variant="primary" type="submite" className="mt-3">Submit</Button>
                    </Col>
                </Form.Row>
            </Card.Body>
        </Card>
        </Form>
    </div>
)

export default MessageForm;