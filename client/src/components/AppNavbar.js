import React, { Component } from 'react';
import axios from 'axios'
import { withRouter, Route, Link } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Header from './Header'
import Splash from '../views/Splash'

//     logOut (e) {
//       e.preventDefault()
//       localStorage.removeItem('usertoken')
//       this.props.history.push(`/`)
//   }


//   state = {

//     isOpen: false

//   }
    
//   toggle = () => {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }


  const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="#" className="nav-link" onClick={props._logout}>
							Logout
						</Link>
					</li>
				</ul>
			</nav>
		)
	} else {
		return (
			<nav className="navbar">
				<ul className="nav">
					<li className="nav-item">
						<Link to="/" className="nav-link">
							Home
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/login" className="nav-link">
							login
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/register" className="nav-link">
							Register
						</Link>
					</li>
				</ul>
			</nav>
		)
    }
}

class AppNavbar extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			console.log(response.data)
			if (!!response.data.user) {
				console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(email, password) {
		axios
			.post('/auth/login', {
				email,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div >
				<h1>This is the main App component</h1>
				<Header user={this.state.user} />
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Splash user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<Login
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/register" component={Register} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
    }
}

export default withRouter(AppNavbar)