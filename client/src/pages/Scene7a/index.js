import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


function Scene7a() {
  //Need Rep Logic Here

  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 7</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Outcome</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>{ReputationComponent}</Card.Text>
        <Card.Link href="/">Back to Home Page?</Card.Link>
        <Card.Link href='/CC'>New Game?</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene7a;