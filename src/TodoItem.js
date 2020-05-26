import React from "react"
import './TodoItem.css'
class TodoItem extends React.Component{

    constructor() {
        super();
        this.state ={
        }

    }
    completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }



    render() {
        console.log(this.props.item.id,this.props.item.completed, this.props.isHidden);
        return (
            <div className="TodoItem-item" style={(this.props.isHidden && this.props.item.completed) ? {display:"none"} : {display: "flex"}}>
                <input
                    type="checkbox"
                    checked={this.props.item.completed}
                    onChange={() => this.props.handleChange(this.props.item.id)}
                />
                <p style={this.props.item.completed ? this.completedStyle : null}>{this.props.item.text}</p>
            </div>
        );
    }
}

export default TodoItem