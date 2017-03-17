/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
	Component
} from 'react';

import {
	Text,
	View,
	TouchableHighlight,
	AppRegistry,
	StyleSheet,
} from 'react-native';

import formatTime from 'minutes-seconds-milliseconds';

export default class StopWatch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeElapsed: null,
			running: false,
      startTime: null,
      laps: [],
		};
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.header, this.border('yellow')]}>
					<View style={[styles.timerWrapper, this.border('red')]}>
						<Text style={styles.timer}>
							{formatTime(this.state.timeElapsed)}
						</Text>
					</View>
					<View style={[styles.buttonWrapper, this.border('green')]}>
						{this.startStopButton()}
						{this.lapButton()}
					</View>
				</View>

				<View style={[styles.footer, this.border('blue')]}>
            {this.laps()}
				</View>
			</View>
		);
	}

	startStopButton() {
		return (
			<TouchableHighlight
				underlayColor="gray"
				onPress={(this.handleStartPress).bind(this)}
				style={[styles.button, this.state.running ? styles.stopButton : styles.startButton]}
			>
				<Text>
					{this.state.running ? 'Stop' : 'Start'}
				</Text>
			</TouchableHighlight>
		)
	}

	handleStartPress() {
    this.setState({
      startTime: new Date()
    });

		if (this.state.running === true) {
			clearInterval(this.interval);
			this.setState({
        running: false
      });
		} else {
			this.setState({
				running: true,
				timeElapsed: null
			});
			this.interval = setInterval(() => {
				this.setState({
					timeElapsed: new Date() - this.state.startTime,
				});
			}, 30);
		}
	}

	lapButton() {
		return (
			<TouchableHighlight
				style={[styles.button, styles.lapButton]}
			  onPress={this.handleLapPress.bind(this)}
			>
				<Text>
					Lap
				</Text>
			</TouchableHighlight>
		)
	}

  laps() {
    return this.state.laps.map((time, index) => {
      return (
        <View style={styles.lap}>
          <Text style={styles.lapText}>
            Lap #{index + 1}
          </Text>
          <Text style={styles.lapText}>
            {formatTime(time)}
          </Text>
        </View>
      );
    })
  }

	handleLapPress() {
    let lap = this.state.timeElapsed;

    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat(lap)
    });
	}

	border(color) {
		return {
			borderColor: color,
			borderWidth: 4
		}
	}


}

Text.defaultProps = {
	color: 'black',
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'stretch',
		flexDirection: 'column',
	},

	header: { //
		flex: 1,

	},

	footer: {
		flex: 1,
	},

	timerWrapper: {
		flex: 5,
		justifyContent: 'center',
		alignItems: 'center',
	},

	timer: {
		fontSize: 60
	},

	buttonWrapper: {
		flex: 3,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	button: {
		borderWidth: 2,
		height: "30%",
		width: "30%",
		borderRadius: 50,
		justifyContent: 'center',
		alignItems: 'center',
	},
	startButton: {
		borderColor: '#45BF61',
	},
	stopButton: {
		borderColor: '#FF2200',
	},
	lapButton: {
		borderColor: '#4B67FF',
	},
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  lapText: {
    fontSize: 30,
  }
});

AppRegistry.registerComponent('stopwatch', () => StopWatch);
