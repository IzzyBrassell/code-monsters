import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene7a() {
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 7</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Outcome</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Choice 1</Card.Link>
        <Card.Link href="#">Choice 2</Card.Link>
        <Card.Link href='#'>Choice 3</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene7a;