import React from "react";
import './ToDoList.css';
import Tasks from "./Tasks";

class ToDoList extends React.Component{

    state = {
        tasks: [
            {name: 'Create "ToDo" web-application'},
            {name: 'Deploy my web-application to GitHub'},
            {name: 'Start to creating new web-application'}
        ],
        showTasks: false
    };

    toggleTasksHandler = () => {
        this.setState({
            showTasks: !this.state.showTasks
        })
    };

    render() {
        const {tasks} = this.state;

        return (
            <div className="todoList">
                {tasks.map((index ,item) => {
                    return (<Tasks key={index} name={item.name }/>
                    )
                })}
            </div>
        )
    }
}

export default ToDoList;