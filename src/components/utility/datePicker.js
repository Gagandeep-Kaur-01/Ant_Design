import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Select, Row, Col } from "antd";
const Option = Select.Option;

export default class DatePicker extends React.Component {
	constructor(props) { 
		super(props);
		const { dayLabel, monthLabel, yearLabel, defaultDate } = props;
		this.state = {
			day: null,
			month: null,
			year: null,
			selectDay: defaultDate ? moment(defaultDate).date() : (props.mode === 'TH' ? '' : dayLabel),
			selectMonth: defaultDate ? moment(defaultDate).month() + 1 : (props.mode === 'TH' ? '' :monthLabel),
			selectYear: defaultDate ? moment(defaultDate).year() : (props.mode === 'TH' ? '' : yearLabel),
			
		};
	}
	
	shouldComponentUpdate(_nextProps, nextState) { 
	    return this.state.selectDay !== nextState.selectDay || this.state.selectMonth !== nextState.selectMonth || this.state.selectYear !== nextState.selectYear;
	}
	
	//Check if new props are received
    componentWillReceiveProps(nextProps) { 
	    const { dayLabel, monthLabel, yearLabel, defaultDate } = this.props;
		let newSelectDay = nextProps.defaultDate ? moment(nextProps.defaultDate).date() : dayLabel;
		let newSelectMonth = nextProps.defaultDate ? moment(nextProps.defaultDate).month() + 1 : monthLabel;
		let newSelectYear = nextProps.defaultDate ? moment(nextProps.defaultDate).year() : yearLabel;
		if (nextProps && nextProps.editMode && nextProps.defaultDate && this.state.selectDay != newSelectDay && nextProps.defaultDate != '') { 
		  this.setState({ selectDay: newSelectDay, selectMonth: newSelectMonth, selectYear: newSelectYear });
		} else if (nextProps && nextProps.editMode && nextProps.defaultDate == '' && this.state.selectDay!= "") { 
		  this.setState({ selectDay: "", selectMonth: "", selectYear: "" });
		}
    }

	componentWillMount() { 
		let day = [], month = [], year = [];

		const pad = (n) => {
			return (n < 10 ? '0' + n : n );
		};

		for (let i=1; i<=31; i++) {
			day.push(this.props.padDay ? pad(i) : i);
		}

		let monthIndex = 1;
		for (const monthName of moment.localeData().months()) {
			month.push({
				text: this.props.useMonthNames ? monthName : this.props.padMonth ? pad(monthIndex) : monthIndex,
				value: monthIndex
			});
			monthIndex++;
		}

		for (let i=this.props.maxYear; i>=this.props.minYear; i--) {
			year.push(i);
		}

		this.setState({
			day: day,
			month: month,
			year: year
		});
	}

	changeDate(e, type) { 
		this.setState({
			[type]: e
		});
		this.checkDate(e, type);
	}

	getDate(date) {
		if(moment(date).isValid()) {
			return moment(date).format("YYYY-MM-DD");
		} else {
			return undefined;
		}
	}

	checkDate(value, type) {
		let { selectDay, selectMonth, selectYear } = this.state;

		if (type === 'selectDay') {
			selectDay = value;
		} else if (type === 'selectMonth') {
			selectMonth = value;
		} else if (type === 'selectYear') {
			selectYear = value;
		}

		if (this.isSelectedAllDropdowns(selectDay, selectMonth, selectYear)) {
			const dateObject = {
				year :selectYear,
				month :selectMonth - 1,
				day :selectDay
			};
			this.props.dateChange(this.getDate(dateObject));
		} else {
			this.props.dateChange(undefined);
		}
	}

	isSelectedAllDropdowns(selectDay, selectMonth, selectYear) {
		if (selectDay === '' || selectMonth === '' || selectYear === '') {
			return false;
		}
		return this.props.mode === 'TH' ?
			selectDay !== '' && selectMonth !== '' && selectYear !== ''
			:
			(selectDay !== this.props.dayLabel) && (selectMonth !== this.props.monthLabel) && (selectYear !== this.props.yearLabel);
	}

	render() {
		const dayElement = this.state.day.map((day, id) => {
			return <Option value={ day } key={ id }>{ day }</Option>;
		});
		const monthElement = this.state.month.map((month, id) => {
			return <Option value={ month.value } key={ id }>{ month.text }
			</Option>;
		});
		const yearElement = this.state.year.map((year, id) => {
			return <Option value={ year } key={ id }>{ year }</Option>;
		});
		return (
			<Row justify="start">
			  <Col sm={8} xs={24}>		
				<Select defaultValue="" onChange={(e) => this.changeDate(e, 'selectMonth')} style={{ width: "95%" }} value={this.state.selectMonth}
				getPopupContainer={trigger => trigger.parentNode}>
				  <Option value="">{this.props.monthLabel} </Option>
					{ monthElement }
				</Select>
			  </Col>

			  <Col sm={8} xs={24}>	
				<Select defaultValue="" onChange={(e) => this.changeDate(e, 'selectDay')} style={{ width: "95%" }} value={this.state.selectDay}
				getPopupContainer={trigger => trigger.parentNode}>
				  <Option value="">{this.props.dayLabel}</Option>
				  { dayElement }
			    </Select>
			  </Col>			  
				
			  <Col sm={8} xs={24}>			
				<Select defaultValue="" onChange={(e) => this.changeDate(e, 'selectYear')} value={this.state.selectYear}
				getPopupContainer={trigger => trigger.parentNode}> 
					<Option value="">{this.props.yearLabel}</Option>
					{ yearElement }
				</Select>
			  </Col>	
			</Row>
		);
	}
}

DatePicker.propTypes = {
	className: PropTypes.string,
	dateChange: PropTypes.func,
	dayLabel: PropTypes.string,
	defaultDate: PropTypes.string,
	maxYear: PropTypes.number,
	minYear: PropTypes.number,
	mode: PropTypes.string,
	monthLabel: PropTypes.string,
	padDay: PropTypes.bool,
	padMonth: PropTypes.bool,
	selectDay: PropTypes.string,
	selectMonth: PropTypes.string,
	selectYear: PropTypes.string,
	useMonthNames: PropTypes.bool,
	yearLabel: PropTypes.string,
	
};

DatePicker.defaultProps = {
	dayLabel: 'Day',
	minYear: 1916,
	maxYear: (new Date()).getFullYear(),
	monthLabel: 'Month',
	padDay: false,
	padMonth: false,
	selectDay: '',
	selectMonth: '',
	selectYear: '',
	yearLabel: 'Year',
	useMonthNames: true
};