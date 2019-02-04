import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

class AppNavbar extends Component {

  state = {

    isOpen: false

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){
    return (
    <div>
      <Navbar style={{backgroundColor: '#350074'}} dark expand="sm">
        <Container>
          <NavbarBrand href="/">Shopalot</NavbarBrand>
          <NavbarToggler onClick={this.toggle}></NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/checkout">
                Checkout (only visible for testing)
              </NavLink>
            </NavItem>
              <NavItem>
                <NavLink href="/browse">
                  Browse
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TracySpitler/Shopalot">
                  Github
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/signup">
                  Log in / Sign up
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
    );
  }
}

export default AppNavbar
