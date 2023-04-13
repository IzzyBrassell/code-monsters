import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

function Scene4d() {

  const [isRogue, setIsRogue] = useState('');
  const [isWarrior, setIsWarrior] = useState('');
  const [isWizard, setIsWizard] = useState('');
  
  return (
    <Card className='bg-secondary text-white'>
      <Card.Body>
      <Card.Title>Scene 4</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">The Peak of Mount Sisyphus</Card.Subtitle>
        <Card.Text>
        The wizard's decision to use a charm spell to make the bandits believe (Pronoun) had always been part of the town guard was a risky move. (Pronoun) cast a powerful charm spell on the bandits, erasing their memories of their criminal past and convincing them that (Pronoun) had always been part of the town guard. The spell was successful, and the bandits began to work alongside the town guard to protect the town. However, the wizard's actions were met with skepticism by some of the town's residents, who were concerned about the ethics of erasing someone's memories. Despite the controversy, the wizard's spell was effective in making the bandits into protectors of the town.
          <br /> The (Heroine/Hero) stood at the foot of Mount Sisyphus, scanning the surrounding terrain for any sign of the elusive dragon's lair. Despite (Possessive Pronoun) best efforts, (Pronoun) couldn't seem to locate the entrance to the cave. Frustration and uncertainty crept into (Possessive Pronoun) mind. The (Heroine/Hero) knew that (Possessive Pronoun) had three options. The first option was to seek out the remaining Cultists who might have information that could lead (Pronoun) to the lair. The second option was to approach the old woman living in a nearby cabin, who was rumored to have knowledge of the dragon's whereabouts. The third option was to rely on (Possessive Pronoun) unique class abilities to track down the lair on (Possessive Pronoun) own. The (Heroine/Hero) weighed (Possessive Pronoun) options carefully, knowing that each choice came with its own set of risks and potential rewards. As (Pronoun) gazed up at the towering mountain, (Pronoun) wondered which path would ultimately lead (Possessive Pronoun) to success.
        </Card.Text>
        <Button variant="outline-danger" href="/S5a">Seek out the cultists and have them lead you to the Dragon Lair</Button>
        <Button variant="outline-danger" href="/S5b">Ask Old woman Josie to help you find the Dragon lair</Button>
        {/* <Button variant="outline-danger" href='{ClassChoice}'>Using my Skills as a (Character.class) I will track the Dragon's Lair Myself</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Scene4d;