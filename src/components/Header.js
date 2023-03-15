import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src="https://png.pngtree.com/templates/20180809/restaurant-logos-png-png_25706.jpg"
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{' '}
            <span className='text-warning'>&nbsp;Hot Restuarants</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}

export default Header