import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { Collapse, Container, NavbarToggler, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class AppNavbar extends Component {

    logOut (e) {
      e.preventDefault()
      localStorage.removeItem('usertoken')
      this.props.history.push(`/`)
  }


  state = {

    isOpen: false

  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render(){

        const loginRegLink = (
          <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink href="/login" className="nav-link">
                      Login
                  </NavLink>
              </li>
              <li className="nav-item">
                  <NavLink href="/register" className="nav-link">
                      Register
                  </NavLink>
              </li>
          </ul>
      )

      const userLink = (
          <ul className="navbar-nav">
              <li className="nav-item">
                  <NavLink href="/profile" className="nav-link">
                      User
                  </NavLink>
              </li>
              <li className="nav-item">
                  <a href="/" onClick={this.logOut.bind(this)} className="nav-link">
                      Logout
                  </a>
              </li>
          </ul>
      )

    return (

        <div>
          <Navbar style={{backgroundColor: '#350074'}} dark expand="sm">
            <Container>
                <NavbarBrand href="/">
                  
                        Shopalot
                  
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle}></NavbarToggler>
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/shoppinglist" className="nav-link">
                            Shopping List
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/TracySpitler/Shopalot" className="nav-link">
                            Github
                        </NavLink>
                    </NavItem>
                </Nav>
                    {localStorage.usertoken ? userLink : loginRegLink}
                    </Collapse>
                </Container>
            </Navbar>
        </div>

    );
  }
}

export default withRouter(AppNavbar)

