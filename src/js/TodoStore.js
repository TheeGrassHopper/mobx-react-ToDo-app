import {autorun, computed, observable } from "mobx"

class TodoStore {
    @observable todos = ['Buy Eggs', 'fix Car', 'eggs ballons', 'organic milk']
    @observable filter = ''
}

var store = window.store = new TodoStore;

export default store

