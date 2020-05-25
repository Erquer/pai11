import React from 'react';


import './App.css';
import TodoItem from "./TodoItem";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: [],
            hideCompleted: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleHiding = this.handleHiding.bind(this)
    }

    addTodoItem(id, text){
        const it = {
            id: id,
            completed: false,
            text: text
        };

        this.setState(prevState =>{
            const copied = prevState.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>);
            copied.push(<TodoItem item={it} />)
            this.state.todos = copied
        })
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    handleHiding(){
       this.setState(prevState =>{
           // eslint-disable-next-line react/no-direct-mutation-state
          return prevState.hideCompleted ? this.state.hideCompleted = false : this.state.hideCompleted = true
       })
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)

        return (
            <div>
                <header className="App-header">
                    <input type="checkbox"
                           checked={this.state.hideCompleted}
                           onChange={()=>this.handleHiding()}/>
                    <p>Hide Completed Tasks.</p>
                </header>
                <main className="App-main">
                    {this.state.todos.length > 0 ? todoItems : <h1>Nothing to do</h1>}
                </main>
                <footer className="App-footer">
                    <input type="text" id="text"/>
                    <button onClick={() => this.addTodoItem(this.state.todos.length,document.getElementById("text"))} >Add</button>
                </footer>
            </div>
        )
    }
}

export default App;
