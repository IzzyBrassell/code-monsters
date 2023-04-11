import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene2d() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');

  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
        The wizard raised (Possessive Pronoun) staff chanting a spell, summoning a powerful jet of aqua pura from (Possessive Pronoun) fingertips as water surged towards the fire, drenching everything in its path. However, to the wizard's dismay, the fire continued to rage on? The wizard realized too late that the flames had been fueled by some kind of magical source, making them resistant to regular water-based attacks. The wizard in a frazzle could not think clearly by then the fire had spread too far and wide.
        <br /> The serene village was encapsulated in flames, with thick smoke rising up into the sky. The heat was so intense it became much harder to breathe and smells of burning timber filling the air . It was a tragic sight, the (Heroine/Hero) knew there was little (Pronoun) could do to stop the inferno from spreading. Despite (possessive Pronoun) best efforts to change the situation, the flames consumed everything in (possessive Pronoun) path. As the (Heroine/Hero) stood amidst the destruction, (pronoun) were approached by a group of guards who recognized (name) and asked for (possessive Pronoun) assistance in the investigation of the fire. The (Heroine/Hero) agreed, and soon Arrived at the scene of the crime - a burned-out building that was now a crime scene and a prisoner in tow. The (Heroine/Hero) looked around, wondering where to start. Where could (pronoun) find the clues that would help them solve this devastating crime?
        </Card.Text>
        <Card.Link href="/S3a">Look for Clues around the Crime Scene</Card.Link>
        <Card.Link href="/S3b">Torture the prisoner until they tell you what they know</Card.Link>
        {/* <Card.Link href='{ClassChoice}'>Using my Class abilities, I investigate the town</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Scene2d;