import React, {
	Component
} from 'react';
import ReactDOM from 'react-dom';

export default class NotesList extends Component {
	render() {
		return (
			<ol>
				{
					React.Children.map(this.props.children, function (child) {
						return (
							<li>{child}</li>
						);
					})
				}
			</ol>
		);
	}
}
