import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Scene3c() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 3</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"> Mountain Roads, Take me Home</Card.Subtitle>
        <Card.Text>
        The warrior was always a little unconventional in their approach to problem-solving. (Pronoun) knew that the village's livestock could be an unlikely source of information, but they decided to give it a try anyway. The warrior asked the cows, chickens, and pigs if they had seen anything suspicious, but unsurprisingly, they did not answer? However, the farmer who owned the livestock did have some valuable information to share. The farmer informed the warrior that a dragon had been stealing his cattle over the past few weeks. Unfortunately, none of the guards had taken the farmer's claims seriously. This revelation only strengthened the warrior's resolve to find and defeat the dragon before it caused any more harm to the village.
        <br />  
        As the (Heroine/Hero) wrapped up (Possessive Pronoun) investigation into the recent fires that had devastated the village, (Pronoun) received troubling news. A dragon was wreaking havoc atop Mount Sisyphus, causing chaos and destruction in its wake. Without hesitation, the (Heroine/Hero) set off on the winding mountain trail, determined to confront the beast ready to put an end to its rampage. However, (Possessive Pronoun) journey was soon interrupted when a group of bandits known as the Black Fang suddenly appeared, blocking the (Heroine/Hero)’s path. (Possessive Pronoun) leader, a menacing figure known only as Manuela, stepped forward, sneering at the (Heroine/Hero). The bandits brandished their weapons, clearly intent on causing harm. The (Heroine/Hero) knew that (Pronoun) couldn't let the Black Fang gang stop them. (Pronoun)  drew (Pronoun) weapon, ready for a fight. But as the (Heroine/Hero) looked into the eyes of (pronoun) adversaries, (Pronoun) saw fear and desperation lurking within. Perhaps, the (Heroine/Hero) thought, these bandits were merely pawns in a larger scheme. What Does the (Heroine/Hero) Do?
        </Card.Text>
        <Button variant="outline-danger" href="/S4a">Kill the Bandits</Button>
        <Button variant="outline-danger" href="/S4b">Pay the Bandit’s Toll ($20)</Button>
        {/* <Button variant="outline-danger"href='{ClassChoice}'>Get The Bandits to Protect the Town</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Scene3c;