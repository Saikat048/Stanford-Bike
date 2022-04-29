import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">STANFORD BIKE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <CustomLink className='text-decoration-none me-3' to='/home'>Home</CustomLink>
                            <CustomLink className='text-decoration-none' to='/inventory'>Inventory</CustomLink>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">More deets</Nav.Link> 
                           {
                               user ?  <CustomLink onClick={handleLogOut} className='text-decoration-none' to='/login'>Log Out</CustomLink>
                               : 
                               <CustomLink className='text-decoration-none' to='/login'>Log in</CustomLink>
                               
                           } 
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;