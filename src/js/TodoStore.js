import React from "react"
import {computed, observable} from 'mobx'


class TodoStore {
	@observable todos =['Buy eggs', 'Buy milk', 'Buy chesse', 'Buy apples']
	@observable filter = ''
	@computed get filteredTodos(){
		var matchesFilter  = new RegExp(this.filter, 'i')
		return this.todos.filter(todo => !this.filter || matchesFilter.test(todo))
	}
	createNewTodo(value){
		this.todos.push(value)
	}
}

export default new TodoStore