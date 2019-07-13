// import React, { Component } from 'react';

// class TodoItem extends Component {

// 	render() {
// 		let { index, content, onClick } = this.props
// 		return (
// 			<li onClick={()=>onClick(index)}>{content}</li>			
// 		);
// 	}
// }

// export default TodoItem;


import React from 'react';
export default function(props){
	console.log(props)
	return <li onClick={()=>props.onClick(props.index)}>{props.content}</li>
}