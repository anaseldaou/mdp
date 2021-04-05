import React, { Component } from "react";
import '../CSS/Form.css';
import Select from 'react-select'
import {MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput,MDBContainer} from 'mdbreact';

class SignUp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            First_Name: '',
            Last_Name: '',
            Email:'',
            Password:'',
            options_selected:'',
            options:[],
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state.options = [
          { value: 'Engineer', label: 'Engineer' },
          { value: 'Scientist', label: 'Scientist' },
          { value: 'Olife Member', label: 'O-life Member' }
        ]
      }
    
      handleInputChange(event) {

        this.setState({
             [event.target.name]: event.target.value
        });
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.Email +this.state.options_selected+this.state.Password);
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
                          <strong className='blue-text font-weight-bold'> UP</strong>
                          
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
                      
                    <lable>Title</lable>
                    <select className="form-control"
                          name="options_selected"
                          value={this.state.options_selected}
                          onChange={this.handleInputChange}>
                          
                          <option value="Engineer">Engineer</option>
                          <option value="Scientist">Scientist</option>
                          <option value="O-life Member">O-life Member</option>
                        
                          
                    </select>
                    
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
                    <br>
                    </br>
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
                            Sign Up
                          </MDBBtn>
                        </div>
                        
                      </MDBRow>
                      
                      <MDBCol md='12'>
                        <p className='font-small white-text d-flex justify-content-end'>
                          Have an account?
                          <a href='#!' className='green-text ml-1 font-weight-bold'>
                            Log in
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
export default SignUp

