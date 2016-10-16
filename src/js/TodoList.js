import React from "react"
import {observer} from "mobx-react"

@observer
export default class TodoList extends React.Component {
	createNewTodo(e){
		if( e.which === 13){
			this.props.store.createNewTodo(e.target.value)
			e.target.value=''
		}
	}
	filter(e){
		this.props.store.filter = e.target.value
	}
	render(){
		const {filter, filteredTodos, todos} = this.props.store

		const todoList = filteredTodos.map(items => (
			<li>{items}</li>
			))
 		return (
			<div>
				<h1>todos</h1>
				<input className="create" onKeyPress={this.createNewTodo.bind(this)} />
				<input className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>
					{todoList}
				</ul>	
			</div>
		)
	}
}


