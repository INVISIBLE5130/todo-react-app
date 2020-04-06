import React from 'react';
import './Navigation.css';
import '../../img/todo_banner(transparent)_1.png';
// import '../MarkersDropDown/MarkersDropDown';
import Scrollbar from '../ScrollBar/ScrollBar';
// import ToDoList from "./ToDoList";

class Navigation extends React.Component{

    state = {
      user: [
          {name: 'Ihor Sheptyakov', email: 'goshakovan14@gmail.com'},
          {name: 'Nikita Levchenko', email: 'slyfox7@gmail.com'}
      ]
    };

  render() {
      const {user} = this.state;

      return(
          <Scrollbar
              style={{ height: 665 }}>
            <div className="navBar">
                <img className="logo" alt="Logo" src={require('../../img/logo.png')}/>

                <div className="user">
                    <img className="userName" alt="User" src={require('../../img/user.svg')}/>
                    <p className="user_name">
                        {user[0].name}
                    </p>
                </div>

                <div className="email">
                    <img className="userEmail" alt="Email" src={require('../../img/mail.svg')}/>
                    <p className="user_email">
                        {user[0].email}
                    </p>
                </div>

                <h2 className="stats">
                    Statistics
                </h2>

                <h2 className="settings">
                    Settings
                </h2>
            </div>
          </Scrollbar>
      )
  }
}

export default Navigation;