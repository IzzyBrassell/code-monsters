import React from 'react';
import Form from 'react-bootstrap/Form'

function CharacterCreation() {
//Need Post logic for Submit button that also immedietly sends player to /S1
    return(
        <Form>
            <Form.Group>
                <Form.Label>What is our Hero's Name?</Form.Label>
                <Form.Control type='name' placeholder='Enter Name' />
            </Form.Group>
            <Form.Group>
                <Form.Label>What is the Gender of our Hero</Form.Label>
                <Form.Select aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
                <option value="3">NonBinary/Prefer not to Say</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>What are Our Hero or Heroine's Abilities? Are they a Strong Warrior, a Cunning Rogue, or an Intelligent Wizard?</Form.Label>
                <Form.Select aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="1">Warrior</option>
                <option value="2">Rogue</option>
                <option value="3">Wizard</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Every hero and heroine is born with a special trait marking Their name in the world… What would yours be?</Form.Label>
                <Form.Select aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="1">Sturdy</option>
                <option value="2">Springy</option>
                <option value="3">Frail (Hard Mode)</option>
                </Form.Select>
            </Form.Group>
            {/* <Button variant="Secondary" type="submit">Start the Adventure</Button> */}
        </Form>
    );
}

export default CharacterCreation;