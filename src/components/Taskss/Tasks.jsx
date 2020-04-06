import React from "react";
import './Tasks.css';
import '../../img/more.svg';
import '../../img/unchecked.svg';

class Tasks extends React.Component{

    render(){
        const {name} = this.props;

        return(
            <div className="todo">
                <img alt="Check box" className="checkBox" src={require('../../img/unchecked.svg')}/>
                    <p className="title">
                        {name}
                    </p>
                <img alt="More" className="more" src={require('../../img/more.svg')}/>
            </div>
        )
    }
}

export default Tasks;