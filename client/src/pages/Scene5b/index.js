import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene5b() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
      <Card.Title>Scene 5</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Draconic Rage</Card.Subtitle>
        <Card.Text>
        The old woman Josie lived at the base of the mountain for years and knew the land better than anyone. The (Heroine/Hero) asked her to help them find the dragon lair, and Josie agreed to guide them. Unfortunately, the journey was too much for her, and died of exhaustion. The (Heroine/Hero) was devastated, feeling responsible for her death. (Pronoun) knew they couldn't give up now, not after everything they had been through. (Pronoun) pressed on, searching the mountain for any sign of the dragon lair
          <br /> The (Heroine/Hero) finally found the dragon's lair - a dark and foreboding cave hidden deep in the mountains. As (Pronoun) approached the entrance, (Pronoun) could feel the heat emanating from within, and the roar of the beast echoed through the cavernous walls. With weapon in hand and a heart full of courage, the (Heroine/Hero) ventured forth, ready to face (Possessive Pronoun) greatest challenge yet. The dragon was a massive creature, its scales as hard as steel and its breath a scorching inferno. The battle was intense, with the (Heroine/Hero) dodging the dragon's attacks and striking back with all (Possessive Pronoun) might. But after hours of fighting, the (Heroine/Hero) began to feel weary. The journey to the lair had been long and grueling, and the battle was taking its toll. The dragon seemed to sense the (Heroine/Hero)’s fatigue and launched a devastating attack, knocking the (Heroine/Hero) off (Possessive Pronoun) feet. As the (Heroine/Hero) lay on the ground, struggling to catch (Possessive Pronoun) breath, (Pronoun) knew that (Pronoun) needed to turn the fight around. But how? The dragon was too strong, too fierce. It seemed like all hope was lost. How Will the (Heroine/Hero) change the outcome of this fight?
        </Card.Text>
        <Card.Link href="/S6a">Steel yourself</Card.Link>
        <Card.Link href="/S6b">Trick the Dragon</Card.Link>
        <Card.Link href={ClassChoice}>Use your abilities to change the tide of battle</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene5b;