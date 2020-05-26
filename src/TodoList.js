import React, {Component} from "react";
import TodoItem from "./TodoItem";


class TodoList extends Component{
    constructor() {
        super();
        this.state ={}
    }


    render() {

        const toDos = this.props.todoItems.map(item => <TodoItem key={item.id} item={item} isHidden={this.props.shouldHide} handleChange={this.props.handleChange} />);
        return(
            <div className="App-main">
                {toDos.length > 0 ? toDos : "Nothing to Do"}
            </div>
        )
    }
}

export default TodoList