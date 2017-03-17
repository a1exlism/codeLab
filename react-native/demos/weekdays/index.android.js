/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import  Moment from 'moment';

import DayItem from './src/DayItem';

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default class Weekdays extends Component {
	render() {
		return (
			<View style={styles.container}>
				{/* USE component you created, here use the funciton I created */}
				{this.days()}
			</View>
		)
	}
	days() {
		// return DAYS.map((day)=>{
		// 	return <DayItem day={day}/>
		// 	//  return the DayItem Components
		// });
		let daysItems = [];
		for (let i = 0;i < 7; i++) {
			let day = Moment().add(i, 'days').format('dddd');
			daysItems.push(
				<DayItem day={day} daysUntil={i}/>
			);
		}
		
		return daysItems;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});

AppRegistry.registerComponent('lesson5', () => Weekdays);
