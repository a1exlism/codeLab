import React, {
	Component,
} from 'react';

export default class GetInput extends Component{
	constructor(props) {
		super(props);
		// this.handleClick = this.handleClick.bind(this);
	}
	render() {
		return (
			<div>
				<input type="text" ref="myTextInput"/>
				<br/>
				<input type="button" value="Focus the text input" onClick={this.handleClick}/>
			</div>
		);
	}
	handleClick() {
		// this.refs.myTextInput.focus();
		console.log(this);
	}
}

