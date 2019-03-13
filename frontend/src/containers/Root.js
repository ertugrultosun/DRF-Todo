import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/Root.scss';


class Root extends Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default connect()(Root);