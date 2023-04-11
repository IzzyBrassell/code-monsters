import React from 'react';
import Card from 'react-bootstrap/Card';
import Dragon from "../../images/Dragon.png"

function HomePage() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={Dragon} alt="Dragon Image" />
      <Card.ImgOverlay>
        <Card.Title>Code Monsters: an Interactive Story</Card.Title>
        <Card.Text>
          Are You Ready to Experience a Interactive Story about a hero you create? Are you Ready for your decisions to affect who lives and dies in the story? Hit the New Game Tab above after logging in to get started.
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default HomePage;