import React, {
	Component,
} from 'react';
import ReactDOM from 'react-dom';

export default class MyTitle extends Component{
	render() {
		return (
			<h2>{this.props.title}</h2>
		);
	}
}

MyTitle.propTypes = {
	//  props.title
	title: React.PropTypes.string.isRequired,
};