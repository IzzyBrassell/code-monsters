import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopOfPage() {
        //Need Save/Load Logic Here with an onclick function
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="/">Code Monsters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Login">Login/Sign Up</Nav.Link>
            <Nav.Link href="/CC">New Game</Nav.Link>
            <NavDropdown title="Save/Load" id="basic-nav-dropdown">
              <NavDropdown.Item>Save Game</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
                Load Game
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TopOfPage;