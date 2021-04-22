import {Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SignIn from './SignInComponent';
import { Button } from 'reactstrap';
class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
        isNavOpen: false
      };


      this.handleLogout = this.handleLogout.bind(this);
    }

    toggleNav() {
    this.setState({
        isNavOpen: !this.state.isNavOpen
        });
    }

    handleLogout() {
        this.props.logoutUser();
    }

    renderSignInDialog()
    {
        return (<SignIn />);
    }

    render() {
        if(!this.props.auth.isAuthenticated){
            return(
                <div>
                    <Navbar dark color="dark" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand>O-Life</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/about'>About</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/team'>Team</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/SignIn'>Sign In</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </div>
            );
    }
    else{
        return(
            <div>
                <Navbar dark color="dark" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand>O-Life</NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link"  to='/home'>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/about'>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/team'>Team</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/Notes'>Notes</NavLink>
                                </NavItem>
                                <NavItem>
                                    <Button onClick={this.handleLogout}>Log Out</Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
    }
}

export default Header;
