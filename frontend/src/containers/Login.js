import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router'
import * as userActions from '../actions/UserActions';
import '../styles/Login.scss';


class Login extends Component {
	handleSubmit = (e) => {
		e.preventDefault();

		let username = this.username.value;
		let pass = this.password.value;
		this.props.userActions.login(username, pass);
	}
	render() {
		const { error } = this.props.user;

		return (
			<div>
				<h1>Login</h1>
				<div className="box box-login clearfix">
					{error ?
						<p className="error">{error}</p>
					: ''}
					<form onSubmit={this.handleSubmit}>
						<input
							type="text"
							className="add-input"
							placeholder="Enter username.."
							ref={ref => this.username = ref} />
						<input
							type="password"
							className="add-input"
							placeholder="Enter password.."
							ref={ref => this.password = ref} />
						<input
							type="submit"
							className="login-button"
							value="Login" />
					</form>
				
					<Link to="/registration/"
					className="Register-button">
					<button type="button">
						Go to Register page..
					</button>
				</Link>
					
				</div>

				
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		userActions: bindActionCreators(userActions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);