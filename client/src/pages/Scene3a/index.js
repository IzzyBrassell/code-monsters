import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene3a() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Mountain Roads, Take me Home</Card.Subtitle>
        <Card.Text>
        The (Heroine/Hero) studied the crime scene, searching for any clues that might point them in the direction of the arsonist. (Pronoun) examined the burnt rubble and the remnants of what was once a thriving village. It wasn't until the hero stumbled upon a piece of scorched earth that they knew for sure who had started the fire. The earth bore the telltale signs of dragon's fire, a destructive force that only a dragon could produce. The (Heroine/Hero)’s heart sank as they realized the scope of the destruction that the dragon had wrought upon the village. (Pronoun) knew that they had to act fast if they were going to catch the dragon before it caused any more harm.
        <br />
        As the (Heroine/Hero) wrapped up (Possessive Pronoun) investigation into the recent fires that had devastated the village, (Pronoun) received troubling news. A dragon was wreaking havoc atop Mount Sisyphus, causing chaos and destruction in its wake. Without hesitation, the (Heroine/Hero) set off on the winding mountain trail, determined to confront the beast ready to put an end to its rampage. However, (Possessive Pronoun) journey was soon interrupted when a group of bandits known as the Black Fang suddenly appeared, blocking the (Heroine/Hero)’s path. (Possessive Pronoun) leader, a menacing figure known only as Manuela, stepped forward, sneering at the (Heroine/Hero). The bandits brandished their weapons, clearly intent on causing harm. The (Heroine/Hero) knew that (Pronoun) couldn't let the Black Fang gang stop them. (Pronoun)  drew (Pronoun) weapon, ready for a fight. But as the (Heroine/Hero) looked into the eyes of (pronoun) adversaries, (Pronoun) saw fear and desperation lurking within. Perhaps, the (Heroine/Hero) thought, these bandits were merely pawns in a larger scheme. What Does the (Heroine/Hero) Do?
        </Card.Text>
        <Card.Link href="/S4a">Kill the Bandits</Card.Link>
        <Card.Link href="/S4b">Pay the Bandit’s Toll ($20)</Card.Link>
        <Card.Link href={ClassChoice}>Get The Bandits to Protect the Town</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene3a;