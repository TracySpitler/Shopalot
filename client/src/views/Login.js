import React, { Component } from 'react';
import styled from 'styled-components';
import splashbg from '../assets/images/splashbg.jpg';
import GoogleLogin from 'react-google-login';

class Login extends Component{

    constructor(props){
        super(props);
        this.stats={
            redirect: false
        }
        this.signup = this.signup.bind(this);
    }

    signup(res, type){


    }


	render(){

        const responseGoogle = (response) =>{
            console.log(response);
            this.signup(response, 'google')
        }

		return (
      <Background>
        <Cta className="container">
          <h1>Shopalot</h1>
          <p>LOGIN</p>
          <GoogleLogin
          clientId="733567949180-mf5n6savupomp0l3u8pigrll92rf8mkh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          />
          
          <button>Sign-Up</button>
        </Cta>
      </Background>
		);
	}
}

export default Login;

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
`