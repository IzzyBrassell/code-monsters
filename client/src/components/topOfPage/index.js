import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom'

function TopOfPage() {
const navigate = useNavigate()
      async function handleSave(e){
        e.preventDefault()
        let path = '/CC'
        try{
          if (window.location.pathname.slice(0,2)==='/S'){
            path = window.location.pathname
          }
          const updateResponse = await fetch('/api/characters', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              url: path
            })
          })
          if (updateResponse.ok) {
            alert(`Saved!`) 
        }else {
          // Handle error response
          console.error('Save has failed!');
        }
      } catch (error){
        console.log(error)
      }
    }
      const handleLogout = async (e) => {
        
        try{
            const response = await fetch('/api/users/logout', {
              method: 'POST'

            });
            if (response.ok) {
                navigate('/')
            } else {
              console.log('Oopsy, your logout failed')
            }
        }
        catch(err) {
          console.error(err)
        }
      }
        
  return (
    <Navbar bg="danger" expand="lg">
      <Container>
        <Navbar.Brand href="/">Code Monsters</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Login">Login/Sign Up</Nav.Link>
            <Nav.Link href="/CC">New Game</Nav.Link>
            <Nav.Link onClick={handleLogout}>Log Out</Nav.Link>
            <NavDropdown title="Save/Load" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={handleSave}>Save Game</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='/load'>
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