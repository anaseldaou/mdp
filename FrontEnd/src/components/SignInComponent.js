import React, { Component } from "react";
import '../CSS/Form.css';
import Select from 'react-select'
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput,MDBContainer} from 'mdbreact';

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Email:'',
            Password:'',
            
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
      }
    
      handleInputChange(event) {

        this.setState({
             [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.Email +this.state.Password);
        event.preventDefault();
      }
    
      render() {
        return (
            <MDBContainer>
              <MDBRow>
              <MDBCol md='3'></MDBCol>
                <MDBCol md='6' className="center">
                <form onSubmit={this.handleSubmit}>
                    <div className='text-black rgba-stylish-strong py-5 px-5 z-depth-4'>
                      <div className='text-center'>
                        <h3 className=' mb-5 mt-4 font-weight-bold'>
                          <strong>SIGN</strong>
                          <strong className='blue-text font-weight-bold'> IN</strong>
                          
                        </h3>
                      </div>
                      <label>Email</label>
                      <input
                        type="email"
                        name="Email"
                        value={this.state.Email}
                        onChange={this.handleInputChange}
                        className="form-control"
                        
                      />
                      <br>
                      </br>
                      <label> Password</label>
                      <input
                        type="password"
                        name="Password"
                        value={this.state.Password}
                        onChange={this.handleInputChange}
                        className="form-control"
                      />
                      <br>
                      </br>
                      <br>
                      </br>

                      <MDBRow className='d-flex align-items-center mb-4'>
                        <div className='text-center mb-3 col-md-12'>
                          <MDBBtn
                            color='success'
                            rounded
                            type="submit" 
                            value="Submit"
                            className='btn-block z-depth-1'
                          >
                            Sign In
                          </MDBBtn>
                        </div>
                        
                      </MDBRow>
                      
                      <MDBCol md='12'>
                        <p className='font-small white-text d-flex justify-content-end'>
                          Dont have an account?
                          <a href='#!' className='green-text ml-1 font-weight-bold'>
                            Sign Up
                          </a>
                        </p>
                      </MDBCol>
                    </div>
                    </form>
                </MDBCol>
                <MDBCol md='3'></MDBCol>
              </MDBRow>
            </MDBContainer>
        
        );
        }
      
}
export default SignIn

