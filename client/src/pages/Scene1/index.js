import React , {useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene1() {
  //Need Class Based Logic on Every Page For the Href on Choice 3
  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 1: A Fiery Introduction</Card.Title>
        <Card.Text>
        As The Aspiring (Heroine/Hero) [Name] awakes in an inn in the small village Oranshire on the outer edge in the kingdom, (Pronoun) Notices the smoke in (possessivePronoun) room. As (name) gathers (possessive Pronoun) items and successfully escapes the inn. (pronoun) watches the village a blaze, with the flames trapping the townspeople. Guards are rushing people out of (possessive Pronoun) homes, people are passing out from the fumes as they leave their homes. And the fire seems to be ever spreading. In the chaos of the event, no one is focused on our (Heroine/Hero). What do you do?
        </Card.Text>
        <Button variant="outline-danger" href="/S2a">Since no one is looking, I would like to see if any of the passed out villagers have any valuables on them?</Button>
        <Button variant="outline-danger" href="/S2b">I am going to immediately try to save any living villagers I can see from the fire </Button>
        {/* <Button variant='outline-danger' href='{ClassChoice}'>Using my Class Abilities, I am Going to try to put out the Fire</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Scene1;