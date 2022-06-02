import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar as NavBar, NavbarBrand, Collapse, Nav, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { Link } from 'react-router-dom'

function Navbar() {

  const [toggleNavbar, setToggleNavbar] = useState(false)

  const handleToggleNavbar = () => {
    setToggleNavbar(!toggleNavbar)
  }

  const cart = useSelector(store => store)

    return (
        <NavBar
          color="white"
          expand="lg"
          light
          fixed='top'
          >

          <img
            src="/images/logo.png"
            alt="logo"
            className='navbar_logo'
          />

          <NavbarBrand className='navbar_brand'>
            The Bike Shop
          </NavbarBrand>

          <NavbarToggler className="me-2" onClick={handleToggleNavbar} />

          <Collapse isOpen={toggleNavbar} navbar>
            <Nav navbar >
              <NavItem>
                <NavLink tag={Link} to="/">ACCUEIL</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/bikes">VÉLOS</NavLink>
              </NavItem>
              <NavItem style={{display: 'flex'}}>
                <NavLink tag={Link} to="/cart">PANIER</NavLink>
                <p className='nav_cart'>{cart.length !== 0 ? `(${cart.length})` : ''}</p>
              </NavItem>
            </Nav>
          </Collapse>
        </NavBar>
      
    );
}

export default Navbar;