import React from 'react';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';

function CharacterCreation({ userid }) {
    const navigate = useNavigate();
  
    const handleFormSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await fetch(`/api/characters?userid=${userid}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          if (response.ok) {
            const character = await response.json();
            if (character) {
              // Character already exists, send a PUT request to update
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
                    userid: userid,
                  }),
                });
      
                if (updateResponse.ok) {
                  // Handle successful response
                  history.push('/S1');
                } else {
                  // Handle error response
                  console.error('Character Update Failed:', updateResponse.statusText);
                }
              } catch (error) {
                console.error(error);
              }
            } else {
              // Character doesn't exist, send a POST request to create
              try {
                const createResponse = await fetch('/api/characters', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  // Replace with your form data, including the userid from props
                  body: JSON.stringify({
                    name: e.target.name.value,
                    gender: e.target.gender.value,
                    ability: e.target.ability.value,
                    trait: e.target.trait.value,
                    userid: userid,
                  }),
                });
      
                if (createResponse.ok) {
                  // Handle successful response
                  navigate('/S1');
                } else {
                  // Handle error response
                  console.error('Character Creation Failed:', createResponse.statusText);
                }
              } catch (error) {
                console.error(error);
              }
            }
          } else {
            // Handle error response
            console.error('Error fetching character:', response.statusText);
          }
        } catch (error) {
          // Handle fetch error
          console.error(error);
        }
      };

    return(
        <Form onSubmit={handleFormSubmit}>
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
            <Button variant="Secondary" type="submit">Start the Adventure</Button>
        </Form>
    );
}

export default CharacterCreation;