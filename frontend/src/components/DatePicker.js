import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Pikaday from 'pikaday';

import '../styles/Pikaday.scss';


class DatePicker extends Component {
	handleDateChange = (e) => {
		this.changeDate(e.target.value);
	}
	changeDate = (date) => {
		const newDate = date ? moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD') : '';
		this.props.dateChange(newDate);
	}
	componentDidMount() {
		this.picker = new Pikaday({
			field: this.date,
			format: 'DD.MM.YYYY',
			firstDay: 1,
			i18n: {
				previousMonth : 'Previous month',
				nextMonth     : 'Next Month',
				months        : ['January','February','March','April','May','June','July',
								 'Аugust','September','October','November','December'],
				weekdays      : ['Monday','Tuesday','Wednesday','Thursday',
								 'Friday','Saturday','Sunday'],
				weekdaysShort : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
			},
			onSelect: () => this.changeDate(this.date.value)
		});
	}
	componentWillUnmount() {
		delete this.picker;
	}
	render() {
		const { dateChange, ...props } = this.props;

		return (
			<input
				type="text"
				{...props}
				ref={ref => this.date = ref}
				onChange={this.handleDateChange} />
		);
	}
}

DatePicker.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	placeholder: PropTypes.string,
	value: PropTypes.string,
	dateChange: PropTypes.func.isRequired
}

export default DatePicker;