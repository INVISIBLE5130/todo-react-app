import React from "react";
import './Tasks.css';
import './Navigation';

class Tasks extends React.Component{

    render() {
        const {currentOpenTask} = this.props;

        return (
            <div>{currentOpenTask.task.name + ' ' + currentOpenTask.task.description} </div>
        )
    }

}

export default Tasks;