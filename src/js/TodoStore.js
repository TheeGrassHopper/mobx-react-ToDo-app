import React from "react"
import {observable} from 'mobx'


class TodoStore {
	@observable todos =['Buy eggs', 'Buy milk', 'Buy chesse', 'Buy apples']
	@observable filter = ''
}

export default new TodoStore