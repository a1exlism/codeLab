import React, {
  Component,
  PropTypes
} from 'react';

import {
  View,
  Text,
  TouchableHighlight  //  What's this?
} from 'react-native';

export default class MyScene extends Component {
  //  export default: 导出组件,并允许复用
  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title} </Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text>Tap me to load next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text>Tap me to back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};
