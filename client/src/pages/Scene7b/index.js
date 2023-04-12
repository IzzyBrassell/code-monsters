import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';


function Scene7b() {
  //Need Reputation Logic Here
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 7</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Outcome</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Card.Text>{ReputationComponent}</Card.Text> */}
        <Button variant='outline-danger' href="/">Back to Home Page?</Button>
        <Button variant='outline-danger' href='/CC'>New Game?</Button>
      </Card.Body>
    </Card>
  );
}

export default Scene7b;