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

	toggleComplete(todo){
		todo.complete = !todo.complete
	}

	render(){
		const {clearCompletedItmes, filter, filteredTodos, todos} = this.props.store

		const todoList = filteredTodos.map(itemTodo => (
			<li key={itemTodo.id}>
			<input type="checkbox" onChange={this.toggleComplete.bind(this, itemTodo)} value={itemTodo.complete} checked={itemTodo.complete}/>{itemTodo.value}</li>
			))
 		return (
			<div>
				<h1>todos</h1>
				<p>Add a Todo</p><input className="create" onKeyPress={this.createNewTodo.bind(this)} />
				<p>Filter Out</p><input className="filter" value={filter} onChange={this.filter.bind(this)} />
				<ul>
					{todoList}
				</ul>
				<button href="#" onClick={clearCompletedItmes}>Clear Completed	Itmes</button>
			</div>
		)
	}
}


