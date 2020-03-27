import React from 'react';
import './Navigation.css';
import '../img/todo_banner(transparent)_1.png';
import './MarkersDropDown';
import MarkersDropDown from "./MarkersDropDown";
import Tasks from "./Tasks";

class Navigation extends React.Component{

    state = {
      user: [
          {name: 'Ihor Sheptyakov', email: 'goshakovan14@gmail.com'},
          {name: 'Nikita Levchenko', email: 'slyfox7@gmail.com'}
      ],

        marker: [
            {name: 'Marker 1'},
            {name: 'Marker 2'},
            {name: 'Marker 3'},
            {name: 'Marker 4'},
            {name: 'Marker 5'},
        ],

        currentOpenTask: {markerId: 0, task:{name: 'firsTask', description:'learn BD'}},

        tasks:[
            {markerId: 0, task:{name: 'firsTask', description:'HTML'}},
            {markerId: 1, task:{name: 'secondTask', description:'CSS'}},
            {markerId: 2, task:{name: 'third', description:'JavaScript'}},
            {markerId: 3, task:{name: 'fourth', description:'React'}},
            {markerId: 4, task:{name: 'fifth', description:'Redux'}},
        ]
    };

    openTask = (index) => {
     const {tasks} = this.state;
        this.setState({currentOpenTask: tasks[index]})

    };

    onTaskDelete = (index) => {
        const {marker = []} = this.state;
        const filteredMarker = marker.filter((_, ind) => ind !== index );
        this.setState({marker: filteredMarker})
    };

  render() {
      const {marker, currentOpenTask, user} = this.state;
    return(
        <div className="navBar">
            <img className="logo" alt="Logo" src={require('../img/todo_banner(transparent)_1.png')}/>
            <p className="user_name">
                User: <span>{user[0].name}</span>
            </p>
            <p className="user_email">
                Email: <span>{user[0].email}</span>
            </p>

            <h2 className="tasks">
                Tasks
            </h2>

            <MarkersDropDown
                marker = {marker}
                openTask = {this.openTask}
                onTaskDelete = {this.onTaskDelete}/>
            <Tasks currentOpenTask = {currentOpenTask} openTask = {this.openTask} />
            {/*<div>{currentOpenTask.task.name + ' ' + currentOpenTask.task.description} </div>*/}

            <h2 className="stats">
                Statistics
            </h2>

            <h2 className="settings">
                Settings
            </h2>
            {/*<TaskDetail currentOpenTask={currentOpenTask}/> */}
        </div>
    )
  }
}


export default Navigation;
