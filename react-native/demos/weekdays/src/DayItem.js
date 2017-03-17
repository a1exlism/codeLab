/**
 * Created by a1exlism on 3/7/17.
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class DayItem extends Component {
	render() {
		return <Text style={this.style()}>
			{this.props.day}
			{/* here need a prop: day */}
		</Text>
	}
	style() {
		return {
			color: this.color(),
			fontSize: this.fontSize(),
			lineHeight: this.lineHeight()
		};
	}
	color() {
		let opacity = 1 / (1 + this.props.daysUntil);
		return 'rgba(0, 0, 0,' + opacity + ')';
	}
	fontSize() {
		return 60 - 6 * this.props.daysUntil;
	}
	lineHeight() {
		return 70 - 4 * this.props.daysUntil;
	}
};

AppRegistry.registerComponent('DayItem', () => DayItem);