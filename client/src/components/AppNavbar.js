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
                <NavLink href="/shoppinglist">
                  Shopping List
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/TracySpitler/Shopalot">
                  Github
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