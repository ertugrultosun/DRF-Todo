import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DatePicker from './DatePicker';


class AddTask extends Component {
	state = {
		estimate: '',
	}
	handleAddClick = () => {
		const title = this.taskTitle.value;
		const estimate = this.state.estimate;
		if (title) {
			let obj = { title };
			if (estimate)
				obj.estimate = estimate;
			if (!['all', 'today', 'tomorrow'].includes(this.props.currentProject))
				obj.project = this.props.currentProject;

			this.props.addTask(this.props.currentProject, obj);
			this.taskTitle.value = '';
		}
	}
	handleTitleKeyUp = (e) => {
		if (e.keyCode === 13)
			this.handleAddClick();
	}
	handleDateChange = (date) => {
		this.setState({
			estimate: date
		});
	}
	render() {
		let value = this.state.estimate.value;
		if (this.props.currentProject === 'today')
			value = new Date().toLocaleDateString('tr-TR');
		else if (this.props.currentProject === 'tomorrow')
			value = new Date(new Date().getTime() + 86400000).toLocaleDateString('tr-TR');

		return (
			<div id="add-task">
				<button
					className="btn-add"
					onClick={this.handleAddClick}></button>
				<input
					type="text"
					className="add-input"
					id="task-title"
					placeholder="What needs to be done?"
					onKeyUp={this.handleTitleKeyUp}
					ref={ref => this.taskTitle = ref} />
				<DatePicker
					className="add-input"
					id="task-date"
					placeholder="Date"
					value={value}
					dateChange={this.handleDateChange} />
			</div>
		);
	}
}

AddTask.propTypes = {
	addTask: PropTypes.func.isRequired
}

export default AddTask;