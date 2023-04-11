import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene2e() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');

  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        The rogue approached the burning building, (Possessive Pronoun) heart racing with excitement. (Pronoun) knew exactly what to do to put out the fire (Pronoun) had started enough of them in their day. With a flick of (Possessive Pronoun) wrist, the rogue produced a bag of sand and began to pour it over the flames. However, to (Possessive Pronoun) surprise, the sand only made things worse. It turned out that the rogue had accidentally grabbed a bag of gunpowder instead of sand, which only served to fuel the fire further. The rogue tried to smother the flames with (Possessive Pronoun) cloak, but was too late. The fire had grown too large, and the rogue was forced to flee before (Pronoun) were consumed by the flames.
        <br /> The serene village was encapsulated in flames, with thick smoke rising up into the sky. The heat was so intense it became much harder to breathe and smells of burning timber filling the air . It was a tragic sight, the (Heroine/Hero) knew there was little (Pronoun) could do to stop the inferno from spreading. Despite (possessive Pronoun) best efforts to change the situation, the flames consumed everything in (possessive Pronoun) path. As the (Heroine/Hero) stood amidst the destruction, (pronoun) were approached by a group of guards who recognized (name) and asked for (possessive Pronoun) assistance in the investigation of the fire. The (Heroine/Hero) agreed, and soon Arrived at the scene of the crime - a burned-out building that was now a crime scene and a prisoner in tow. The (Heroine/Hero) looked around, wondering where to start. Where could (pronoun) find the clues that would help them solve this devastating crime?
        </Card.Text>
        <Card.Link href="/S3a">Look for Clues around the Crime Scene</Card.Link>
        <Card.Link href="/S3b">Torture the prisoner until they tell you what they know</Card.Link>
        {/* <Card.Link href='{ClassChoice}'>Using my Class abilities, I investigate the town</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Scene2e;