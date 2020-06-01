import React from 'react';


import './App.css';
import TodoList from "./TodoList";

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            todos: [],
            hideCompleted: false
        };
        this.handleChange = this.handleChange.bind(this);
       //this.changeCompleted = this.changeCompleted.bind(this);
    }

    changeCompleted = () =>{
        this.setState({
            hideCompleted: !this.state.hideCompleted
        });
    }

    handleChange(id) {
        console.log("inside changing");
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    console.log("Found matching",todo.id,id,todo.completed);
                    return {
                        id: todo.id,
                        text: todo.text,
                        completed: !todo.completed
                    };
                }
            });
            return {
                todos: updatedTodos
            }
        });
    }

    addToDoItem = () =>{
        console.log("inside Add Method");
        this.setState({todos:
                this.state.todos.concat([{
                    id: this.state.todos.length,
                    text: document.getElementById('taskName').value,
                    completed: false
                }])
        });
        document.getElementById("taskName").value = ""

    };


    render() {
        return (
            <div>
                <header className="App-header">
                    <input type="checkbox" onChange={()=>this.changeCompleted()}/>
                    <p>Hide Completed Tasks</p>
                </header>
            <TodoList todoItems={this.state.todos} shouldHide={this.state.hideCompleted} handleChange={this.handleChange} />
            <footer className="App-footer">
                <input id="taskName" />
                <button onClick={()=> this.addToDoItem()}>Add</button>
            </footer>
            </div>
        )
    }
}

export default App;
