import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import * as userActions from '../actions/UserActions';
import '../styles/user.css';

class User extends Component {
	componentDidMount() {
		this.props.userActions.loadUser();
	}
	render() {
		const { logout } = this.props.userActions;
		const { username } = this.props.user.user;

		let template;
		if (username)
			template = (
				<p class="user display-4">
					 <u>{username}</u>{' | '}
					<button onClick={logout}>Logout</button>
				</p>
			);
		else
			template = (
				<p class="user">
					<Link to="/login/">Login</Link>{' | '}
					<Link to="/registration/">Register</Link>
				</p>
			);

		return template;
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

export default connect(mapStateToProps, mapDispatchToProps)(User);