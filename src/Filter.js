import React from "react";

//Filtruje Zadania.
class Filter extends React.Component{



    render() {
        return(
            <div className="App-header">
                <input type="checkbox" onChange={this.props.changeCompleted}/>
                <p>Hide Completed Tasks</p>
            </div>
        )
    }


}

export default Filter