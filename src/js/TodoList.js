import React from "react"
import {observer} from "mobx-react"

@observer
export default class TodoList extends React.Component {
	render(){
		const {todos} = this.props.store

		const todoList = todos.map(items => (
			<li>{items}</li>
			))
 		return (
			<div>
				<h1>todos</h1>
				<ul>
					{todoList}
				</ul>	
			</div>
		)
	}
}


