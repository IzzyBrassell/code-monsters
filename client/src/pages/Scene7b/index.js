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
        <Card.Text>As the dragon lay at the (Heroine/Hero)'s feet, begging for mercy, (Pronoun) knew that (Pronoun) couldn't bring (Possessive Pronoun) to slay the magnificent creature. It was a tough decision, but (Pronoun) believed it was the right one. The dragon looked at (Possessive Pronoun) with gratitude in its eyes and revealed the location of a cave filled with treasures beyond (Possessive Pronoun) wildest dreams. (Pronoun) knew that (Pronoun) could amass a fortune that could change (Possessive Pronoun) life forever by venturing into the cave. However, (Pronoun) also knew that by sparing the dragon, (Pronoun) was taking a risk. There was a chance that the creature could cause harm to innocent people. (Pronoun) decided to keep a close eye on the dragon's movements and ensure that it didn't cause any trouble. It was a daunting task, but (Pronoun) was determined to make the best of the situation. As (Pronoun) made (Possessive Pronoun) way to the cave, (Pronoun) couldn't help but feel a mix of excitement and trepidation. The journey was long and arduous, but eventually, (Pronoun) arrived at the cave's entrance. (Pronoun) stepped inside, and (Possessive Pronoun) eyes widened as (Pronoun) beheld the vast treasure trove. (Pronoun) couldn't believe (Possessive Pronoun) luck. Despite the incredible wealth, (Pronoun) couldn't shake the thought of the dragon causing harm. (Pronoun) knew that (Pronoun) had to be vigilant and keep a watchful eye on the creature. It was a small price to pay for the fortune (Pronoun) had acquired, but (Pronoun) couldn't help but wonder if (Pronoun) had made the right decision in sparing the dragon.</Card.Text>
        {/* <Card.Text>{ReputationComponent}</Card.Text> */}
        <Button variant='outline-danger' href="/">Back to Home Page?</Button>
        <Button variant='outline-danger' href='/CC'>New Game?</Button>
      </Card.Body>
    </Card>
  );
}

export default Scene7b;