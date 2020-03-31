import React from "react";
import './Tasks.css';
import '../img/unchecked.svg';
import '../img/more.svg';

export default props => (
    <div className="todo">
        <img alt="Check box" className="checkBox" src={require('../img/unchecked.svg')}/>
        <p className="title">
            {props.name}
        </p>
        <img alt="More" className="more" src={require('../img/more.svg')}/>
    </div>
)