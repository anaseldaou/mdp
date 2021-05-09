import React,{Component} from 'react'
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem,
    Form,FormGroup,
Label , Input , Modal , ModalHeader , ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Button } from 'reactstrap';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
    }


    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        event.preventDefault();
        this.props.loginUser({username: this.username.value, password: this.password.value});
        this.toggleModal();
        if (this.props.auth.isAuthenticated == false)
        {
            this.toggleModal();
        }
    }

    handleLogout() {
        this.props.logoutUser();
    }

    render() {
            return(
                <React.Fragment>
                    <Navbar dark color="dark" expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} />
                            <NavbarBrand>O-Life</NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink className="nav-link"  to='/home'>Acceuil</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/about'>A propos</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to='/team'>Equipe</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        {this.props.auth.isAuthenticated ? <NavLink className="nav-link" to='/Notes'>Mes Notes</NavLink>: null}
                                    </NavItem>
                                </Nav>
                                <Nav className="ml-auto" navbar>
                                <NavItem>
                                    { !this.props.auth.isAuthenticated ?
                                        <Button outline onClick={this.toggleModal}>
                                            <span className="fa fa-sign-in fa-lg"></span> S'inscrire
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        :
                                        <div>
                                        <div className="navbar-text mr-3">{this.props.auth.user.username}</div>
                                        <Button outline onClick={this.handleLogout}>
                                            <span className="fa fa-sign-out fa-lg"></span> Fermer
                                            {this.props.auth.isFetching ?
                                                <span className="fa fa-spinner fa-pulse fa-fw"></span>
                                                : null
                                            }
                                        </Button>
                                        </div>
                                    }

                                </NavItem>
                            </Nav>
                            </Collapse>
                        </div>
                    </Navbar>

                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input}  />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">S'inscrire</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                </React.Fragment>
            );

    }
}

export default Header;
