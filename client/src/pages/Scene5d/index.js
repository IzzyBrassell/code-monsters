import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Scene5d() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
      <Card.Title>Scene 5</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Draconic Rage</Card.Subtitle>
        <Card.Text>
          The wizard knew that (Pronoun) could use (Possessive Pronoun) divination magic to find the source of the dragon's power and, in turn, its lair. (Pronoun) spent days studying ancient tomes and conducting complex spells, finally discovering the location of the dragon lair. It was hidden deep within the mountain, protected by powerful enchantments that the wizard would have to break through if (Pronoun) wanted to face the dragon.
          <br /> The (Heroine/Hero) finally found the dragon's lair - a dark and foreboding cave hidden deep in the mountains. As (Pronoun) approached the entrance, (Pronoun) could feel the heat emanating from within, and the roar of the beast echoed through the cavernous walls. With weapon in hand and a heart full of courage, the (Heroine/Hero) ventured forth, ready to face (Possessive Pronoun) greatest challenge yet. The dragon was a massive creature, its scales as hard as steel and its breath a scorching inferno. The battle was intense, with the (Heroine/Hero) dodging the dragon's attacks and striking back with all (Possessive Pronoun) might. But after hours of fighting, the (Heroine/Hero) began to feel weary. The journey to the lair had been long and grueling, and the battle was taking its toll. The dragon seemed to sense the (Heroine/Hero)’s fatigue and launched a devastating attack, knocking the (Heroine/Hero) off (Possessive Pronoun) feet. As the (Heroine/Hero) lay on the ground, struggling to catch (Possessive Pronoun) breath, (Pronoun) knew that (Pronoun) needed to turn the fight around. But how? The dragon was too strong, too fierce. It seemed like all hope was lost. How Will the (Heroine/Hero) change the outcome of this fight?
        </Card.Text>
        <Button variant="outline-danger" href="/S6a">Steel yourself</Button>
        <Button variant="outline-danger" href="/S6b">Trick the Dragon</Button>
        {/* <Button variant="outline-danger" href='{ClassChoice}'>Use your abilities to change the tide of battle</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Scene5d;