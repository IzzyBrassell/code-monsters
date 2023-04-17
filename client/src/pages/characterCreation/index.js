import React from 'react';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button'

function CharacterCreation({ userid }) {
    const navigate = useNavigate();
  
    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
                const updateResponse = await fetch('/api/characters', {
                  method: 'PUT',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  // Replace with your form data, including the userid from props
                  body: JSON.stringify({
                    name: e.target.name.value,
                    gender: e.target.gender.value,
                    ability: e.target.ability.value,
                    trait: e.target.trait.value,
                    url: '/CC'
                  }),
                });
                if (updateResponse.ok) {
                  // Handle successful response
                  navigate('/S1');
                } else {
                  // Handle error response
                  console.error('Character Update Failed:', updateResponse.statusText);
                }
    
            }catch (error) {
              // Handle fetch error
              console.error(error);
            }
          }

    return(
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Label>What is our Hero's Name?</Form.Label>
                <Form.Control id='name' name='name' type='name' placeholder='Enter Name' />
            </Form.Group>
            <Form.Group>
                <Form.Label>What is the Gender of our Hero</Form.Label>
                <Form.Select id='gender' name='gender' aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="NonBinary">NonBinary/Prefer not to Say</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>What are Our Hero or Heroine's Abilities? Are they a Strong Warrior, a Cunning Rogue, or an Intelligent Wizard?</Form.Label>
                <Form.Select id='ability' name='ability' aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="Warrior">Warrior</option>
                <option value="Rogue">Rogue</option>
                <option value="Wizard">Wizard</option>
                </Form.Select>
            </Form.Group>
            <Form.Group>
                <Form.Label>Every hero and heroine is born with a special trait marking Their name in the world… What would yours be?</Form.Label>
                <Form.Select id='trait' name='trait' aria-label="Default select example" required>
                <option>Open this select menu</option>
                <option value="Sturdy">Sturdy</option>
                <option value="Springy">Springy</option>
                <option value="Frail">Frail (Hard Mode)</option>
                </Form.Select>
            </Form.Group>
            <Button variant="Secondary" type="submit">Start the Adventure</Button>
        </Form>
    );
}

export default CharacterCreation;