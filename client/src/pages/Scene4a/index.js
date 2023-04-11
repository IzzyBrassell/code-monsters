import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene4a() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
        <Card.Title>Scene 4</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Peak of Mount Sisyphus</Card.Subtitle>
        <Card.Text>
        The (Heroine/Hero)'s decision to face the bandits head-on was a courageous one, but it came with a price. (Pronoun) engaged in a fierce battle with the bandits, taking them all out, but not without sustaining several injuries in the process. The (Heroine/Hero)'s bravery was admired by the town's residents, who celebrated their victory over the bandits. However, the (Heroine/Hero)'s injuries left them incapacitated for several weeks, causing them to delay the fight against the dragon
        <br /> The (Heroine/Hero) stood at the foot of Mount Sisyphus, scanning the surrounding terrain for any sign of the elusive dragon's lair. Despite (Possessive Pronoun) best efforts, (Pronoun) couldn't seem to locate the entrance to the cave. Frustration and uncertainty crept into (Possessive Pronoun) mind. The (Heroine/Hero) knew that (Possessive Pronoun) had three options. The first option was to seek out the remaining Cultists who might have information that could lead (Pronoun) to the lair. The second option was to approach the old woman living in a nearby cabin, who was rumored to have knowledge of the dragon's whereabouts. The third option was to rely on (Possessive Pronoun) unique class abilities to track down the lair on (Possessive Pronoun) own. The (Heroine/Hero) weighed (Possessive Pronoun) options carefully, knowing that each choice came with its own set of risks and potential rewards. As (Pronoun) gazed up at the towering mountain, (Pronoun) wondered which path would ultimately lead (Possessive Pronoun) to success.
        </Card.Text>
        <Card.Link href="/S5a">Seek out the cultists and have them lead you to the Dragon Lair</Card.Link>
        <Card.Link href="/S5b">Ask Old woman Josie to help you find the Dragon lair</Card.Link>
        <Card.Link href='{ClassChoice}'>Using my Skills as a (Character.class) I will track the Dragon's Lair Myself</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene4a;