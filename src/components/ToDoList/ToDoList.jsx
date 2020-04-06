import React from "react";
import './ToDoList.css';
import Tasks from "../Taskss/Tasks";
import MarkersDropDown from "../MarkersDropDown/MarkersDropDown";

class ToDoList extends React.Component{

    state = {
        tasks: [
            {name: 'Create "ToDo" web-application'},
            {name: 'Deploy my web-application to GitHub'},
            {name: 'Start to creating new web-application'}
        ],
        // showTasks: false,

        marker: [
            {name: 'All tasks'},
            {name: 'Home tasks'},
            {name: 'Study tasks'},
            {name: 'Work tasks'},
            {name: 'Sport tasks'},
            {name: 'Goals tasks'},
        ]

        // currentOpenTask: {markerId: 0, task:{name: 'firsTask', description:'learn BD'}},
        //
        // markers:[
        //     {markerId: 0, task:{name: 'firsTask', description:'HTML'}},
        //     {markerId: 1, task:{name: 'secondTask', description:'CSS'}},
        //     {markerId: 2, task:{name: 'third', description:'JavaScript'}},
        //     {markerId: 3, task:{name: 'fourth', description:'React'}},
        //     {markerId: 4, task:{name: 'fifth', description:'Redux'}},
        // ]
    };

    // openTask = (index) => {
    //  const {tasks} = this.state;
    //     this.setState({currentOpenTask: tasks[index]})
    //
    // };

    onTaskDelete = (index) => {
        const {marker = []} = this.state;
        const filteredMarker = marker.filter((_, ind) => ind !== index );
        this.setState({marker: filteredMarker})
    };

    // toggleTasksHandler = () => {
    //     this.setState({
    //         showTasks: !this.state.showTasks
    //     })
    // };

    render() {
        const {marker, tasks} = this.state;

        return (
            <div className="todoList">
                <MarkersDropDown
                    marker = {marker}
                    // openTask = {this.openTask}
                    onTaskDelete = {this.onTaskDelete}/>
                {tasks.map((item, index) => {
                    return (
                        <Tasks key={index} name={item.name}/>
                    )
                })}
            </div>
        )
    }
}

export default ToDoList;