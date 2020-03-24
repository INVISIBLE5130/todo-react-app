import React from 'react';
import './Navigation.css';
import '../img/todo_banner(transparent).png';
import './MarkersDropDown';
import MarkersDropDown from "./MarkersDropDown";

class Navigation extends React.Component{

    state = {
      user: [
          {name: 'Ihor Sheptyakov', email: 'goshakovan14@gmail.com'},
          {name: 'Nikita Levchenko', email: ''}
      ]
    };

  render() {
    return(
        <div className="navBar">
            <img className="logo" alt="Logo" src={require('../img/todo_banner(transparent).png')}/>
            <p className="user_name">
                User: {this.state.user[0].name}
            </p>
            <p className="user_email">
                Email: {this.state.user[0].email}
            </p>

            <h1 className="tasks">
                Tasks
            </h1>

            <MarkersDropDown />
        </div>
    )
  }
}


export default Navigation;
