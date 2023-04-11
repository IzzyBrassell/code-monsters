import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Scene4c() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
      <Card.Title>Scene 4</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Peak of Mount Sisyphus</Card.Subtitle>
        <Card.Text>
        The warrior's decision to duel the bandits' leader, Manuela, for dominance was a bold move. (Pronoun) challenged the bandit leader to a one-on-one duel, and after a hard-fought battle, emerged victorious. The bandits were impressed by the warrior's strength and leadership, and (Pronoun) agreed to become a protective mercenary group for the town. The town's residents were grateful for the warrior's bravery, and (Pronoun) looked up to them as a symbol of hope and strength.
          <br /> The (Heroine/Hero) stood at the foot of Mount Sisyphus, scanning the surrounding terrain for any sign of the elusive dragon's lair. Despite (Possessive Pronoun) best efforts, (Pronoun) couldn't seem to locate the entrance to the cave. Frustration and uncertainty crept into (Possessive Pronoun) mind. The (Heroine/Hero) knew that (Possessive Pronoun) had three options. The first option was to seek out the remaining Cultists who might have information that could lead (Pronoun) to the lair. The second option was to approach the old woman living in a nearby cabin, who was rumored to have knowledge of the dragon's whereabouts. The third option was to rely on (Possessive Pronoun) unique class abilities to track down the lair on (Possessive Pronoun) own. The (Heroine/Hero) weighed (Possessive Pronoun) options carefully, knowing that each choice came with its own set of risks and potential rewards. As (Pronoun) gazed up at the towering mountain, (Pronoun) wondered which path would ultimately lead (Possessive Pronoun) to success.
        </Card.Text>
        <Card.Link href="/S5a">Seek out the cultists and have them lead you to the Dragon Lair</Card.Link>
        <Card.Link href="/S5b">Ask Old woman Josie to help you find the Dragon lair</Card.Link>
        <Card.Link href={ClassChoice}>Using my Skills as a (Character.class) I will track the Dragon's Lair Myself</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Scene4c;