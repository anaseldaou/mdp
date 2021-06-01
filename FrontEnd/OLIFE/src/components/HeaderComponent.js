import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Background } from 'victory';


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
        this.props.loginUser({username: this.username.value, password: this.password.value});
        event.preventDefault();

    }

    handleLogout() {
        this.props.logoutUser();
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        if (prevProps.auth.errorLogin==true && this.props.auth.errorLogin == false ) {
            this.setState({
                isModalOpen: false
            });
          }
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
                            { this.props.auth.errorLogin ?
                             <FormGroup>
                                 <h4 style={{ color: 'red' }}>Invalid username or password</h4>
                            </FormGroup>
                            : null
                            }
                            <FormGroup>
                                <Label htmlFor="username">UserName</Label>
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