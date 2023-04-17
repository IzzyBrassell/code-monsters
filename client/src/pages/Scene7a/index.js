import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from 'react-bootstrap/Button';


function Scene7a() {
  //Need Rep Logic Here

  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 7</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Outcome</Card.Subtitle>
        <Card.Text>As the (Heroine/Hero) raised (Possessive Pronoun) weapon, (Pronoun) hesitated for a moment, wondering if there was another way to resolve the conflict without resorting to violence. But as the dragon let out a fierce roar and unleashed a stream of flames, (Pronoun) knew that there was no other option. (Pronoun) charged forward, dodging the flames and striking the dragon with (Possessive Pronoun) weapon. The battle was long and grueling, with both the (Heroine/Hero) and the dragon sustaining injuries. But in the end, the hero emerged victorious, having slain the mighty beast. As (Pronoun) looked upon the lifeless body of the dragon, (Pronoun) couldn't help but feel a sense of satisfaction. (Pronoun) had rid the land of a dangerous creature and ensured the safety of the people. However, (Pronoun) also couldn't help but wonder what kind of treasure the dragon was willing to offer (Possessive Pronoun). (Pronoun) shook off the thought, knowing that the safety of the people was more important than any treasure. But the act of killing the dragon would have consequences. As the (Heroine/Hero) returned to the village, (Pronoun) couldn't help but feel a sense of unease. (Pronoun) had attracted the attention of other dangerous creatures who sought to avenge the dragon's death. And as (Pronoun) prepared to face these new threats, (Pronoun) couldn't help but wonder if there was another way to handle the situation.</Card.Text>
        {/* <Card.Text>{ReputationComponent}</Card.Text> */}
        <Button variant='outline-danger' href="/">Back to Home Page?</Button>
        <Button variant='outline-danger' href='/CC'>New Game?</Button>
      </Card.Body>
    </Card>
  );
}

export default Scene7a;