import React from 'react';
import ReactDOM from 'react-dom';

import NotesList from './NotesList.jsx';
import MyTitle from './MyTitle.jsx';
import GetInput from './GetInput.jsx';

let num = 666;
let str = 'Game On';
ReactDOM.render(
	<div>
		{/*  About children reverse */}
		<div id="children-traversal">
			<NotesList>
				<span>Hello</span>
				<span>World</span>
			</NotesList>
		</div>
		
		{/*  propTypes  */}
		<div id="my-title">
			<MyTitle title={str}/>
		</div>
		
		{/*  Ref usage  */}
		<div id="get-input">
			<GetInput/>
		</div>
	</div>,
	document.querySelector('body'),
);

