import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene3e() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
      <Card.Title>Scene 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Mountain Roads, Take me Home</Card.Subtitle>
        <Card.Text>
        The rogue knew that their contacts in the town's underworld was a long shot. Still it was the only lead (Pronoun) had. (Pronoun) talked to everyone from thieves to smugglers, hoping to find anyone who had seen something suspicious. The crime family of the town was hesitant to offer up any information at first, but after some persuasion, (Pronoun) mentioned the legends of a fire-breathing dragon that lived atop Mount Sisyphus. The rogue knew that this was a significant lead, and (Pronoun) began to prepare themselves for the challenge of facing a dragon.
          <br />  
        As the (Heroine/Hero) wrapped up (Possessive Pronoun) investigation into the recent fires that had devastated the village, (Pronoun) received troubling news. A dragon was wreaking havoc atop Mount Sisyphus, causing chaos and destruction in its wake. Without hesitation, the (Heroine/Hero) set off on the winding mountain trail, determined to confront the beast ready to put an end to its rampage. However, (Possessive Pronoun) journey was soon interrupted when a group of bandits known as the Black Fang suddenly appeared, blocking the (Heroine/Hero)’s path. (Possessive Pronoun) leader, a menacing figure known only as Manuela, stepped forward, sneering at the (Heroine/Hero). The bandits brandished their weapons, clearly intent on causing harm. The (Heroine/Hero) knew that (Pronoun) couldn't let the Black Fang gang stop them. (Pronoun)  drew (Pronoun) weapon, ready for a fight. But as the (Heroine/Hero) looked into the eyes of (pronoun) adversaries, (Pronoun) saw fear and desperation lurking within. Perhaps, the (Heroine/Hero) thought, these bandits were merely pawns in a larger scheme. What Does the (Heroine/Hero) Do?
        </Card.Text>
        <Card.Link href="/S4a">Kill the Bandits</Card.Link>
        <Card.Link href="/S4b">Pay the Bandit’s Toll ($20)</Card.Link>
        {/* <Card.Link href='{ClassChoice}'>Get The Bandits to Protect the Town</Card.Link> */}
      </Card.Body>
    </Card>
  );
}

export default Scene3e;