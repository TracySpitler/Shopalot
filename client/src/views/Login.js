import React, { Component } from 'react';
import styled from 'styled-components';
import splashbg from '../assets/images/splashbg.jpg';
import GoogleLogin from 'react-google-login';

import{
  getFromStorage,
  setInStorage
} from '../utils/storage';

class Splash extends Component{
  
  
  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpFirstName: '',
      signUpLastName: '',
      signUpEmail: '',
      signUpPassword: ''
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    this.onTextboxChangeSignUpFirstName = this.onTextboxChangeSignUpFirstName.bind(this);
    this.onTextboxChangeSignUpLastName = this.onTextboxChangeSignUpLastName.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);
 

  }

  componentDidMount(){

    const obj = getFromStorage('the_main_app');
    if(obj && obj.token){
      const { token } = obj
      //verify token
      fetch('/api/signin/verify?token=' + token)
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            token,
            isLoading: false
          });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      });
    } else{
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpFirstName(event) {
    this.setState({
      signUpFirstName: event.target.value,
    });
  }

  onTextboxChangeSignUpLastName(event) {
    this.setState({
      signUpLastName: event.target.value,
    });
  }


  //Sign in and Sign Up Functions
  onSignUp(){
    // Grab state
    const {
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/signin/signup', { 
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        password: signUpPassword
      }),

    }).then(res => res.json())
      .then(json =>{
        if(json.success){
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            signUpFirstName: '',
            signUpLastName: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });

  }

  onSignIn(){
    // Grab state
    // Post request to backend
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/signin/signin', { 
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword
      }),

    }).then(res => res.json())
      .then(json =>{
        if(json.success){
          setInStorage('the_main_app', {token: json.token});
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInEmail: '',
            signInPassword: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });

  }

  logout(){
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if(obj && obj.token){
      const { token } = obj
      //verify token
      fetch('/api/signin/logout?token=' + token)
      .then(res => res.json())
      .then(json => {
        if(json.success){
          this.setState({
            token: '',
            isLoading: false
          });
        } else {
          this.setState({
            isLoading: false,
          });
        }
      });
    } else{
      this.setState({
        isLoading: false,
      });
    }
  }

  
  render(){


    /**
     * 
     * GOOGLE SIGN IN
     */
    const responseGoogle = (response) =>{
          console.log(response);
          this.signup(response, 'google')
        }

    //USER LOGIN STATE

    const{
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpFirstName,
      signUpLastName,
      signUpEmail,
      signUpPassword,
      signUpError,

    } = this.state;

    if(isLoading){
      return (<div><p>Loading...</p></div>);
    }

    if(!token){
      return (
        <Background>
        <Cta className="container">
        <h1>Shopalot</h1>
           <p>LOGIN USING GOOGLE</p>
          <GoogleLogin
          clientId="733567949180-mf5n6savupomp0l3u8pigrll92rf8mkh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
          
          <div>
            <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
                <p>Sign in</p>
                <input 
                  type="email" 
                  placeholder="Email" 
                  value={signInEmail}
                  onChange={this.onTextboxChangeSignInEmail}
                />

                <input 
                  type="password" 
                  placeholder="Password" 
                  value={signInPassword}
                  onChange={this.onTextboxChangeSignInPassword}
                />
                <br /> 
                <button onClick={this.onSignIn}>Sign In</button> 
            </div>
            <br/>
            <br/>
            <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
                <p>Sign Up</p>
                <input 
                  type="text" 
                  placeholder="First Name"
                  value={signUpFirstName}
                  onChange={this.onTextboxChangeSignUpFirstName}
                />
                <br />
                <input 
                  type="text" 
                  placeholder="Last Name"
                  value={signUpLastName}
                  onChange={this.onTextboxChangeSignUpLastName}
                />
                <br />    
                <input 
                  type="email" 
                  placeholder="Email"
                  value={signUpEmail}
                  onChange={this.onTextboxChangeSignUpEmail}
                />
                <br />
                <input 
                  type="password" 
                  placeholder="Password"
                  value={signUpPassword}
                  onChange={this.onTextboxChangeSignUpPassword}
                />
                <br />
                <button onClick={this.onSignUp}>Sign Up</button>
            </div>

          </div>
          
          
        </Cta>
      
      
      </Background>
        
      );
    }

    return(
      <div>
        <p>Account</p>
        <button onClick={this.logout}>Logout </button>
      </div>
    )

	}
}

export default Splash;

const Background = styled.div`
  background: url(${splashbg}) no-repeat center center fixed;
  background-size: cover;
  height: 94vh;
  padding-top: 10%;
`
const Cta = styled.div`
  color: #fff;
  h1 {
    font-size: 72px;
  }
  p {
    font-size: 30px;
  }
  button {
    background-color: #350074;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  a:link, a:visited {
    background-color: #350074;
    color: white;
    padding: 14px 25px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    border-radius: 10px;
  }
  a:hover, a:hover {
    background-color: #6D538E;
  }
`