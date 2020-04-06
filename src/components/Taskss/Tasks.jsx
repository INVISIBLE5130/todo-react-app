import React from "react";
import './Tasks.css';
import '../../img/more.svg';
import '../../img/unchecked.svg';
import '../../img/checked.svg'

class Tasks extends React.Component{

    constructor(props) {
        super(props);
        this.CheckBox = this.CheckBox.bind(this);

        this.state = {
            show: {
                checked: false
            }
        };
    }

    Checked() {
        return <img alt="Check box" className="checkBox" src={require('../../img/checked.svg')}/>
    }

    Unchecked() {
        return <img alt="Check box" className="checkBox" src={require('../../img/unchecked.svg')}/>
    }

    CheckBox() {
        if (this.checked !== false) {
            return this.Checked()
        } else {
            return this.Unchecked()
        }
    }

    checkUpdate = () => {
        const {checked} = this.state;

        this.setState({checked: !checked});
    };

    render(){
        const {checked} = this.state;
        const {name} = this.props;

        function Checked() {
            return <img alt="Check box" className="checkBox" src={require('../../img/checked.svg')}/>
        }

        function Unchecked() {
            return <img alt="Check box" className="checkBox" src={require('../../img/unchecked.svg')}/>
        }

        function CheckBox() {
            if (checked !== false) {
                return <Unchecked />
            } else {
                return <Checked />
            }
        }

        return(
            <div className="todo">
                <button onClick={this.CheckBox}>Click Me</button>
                {/*<CheckBox/> https://ru.stackoverflow.com/questions/1041389/%D0%9A%D0%B0%D0%BA-%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D1%82%D1%8C-%D0%B4%D0%B8%D0%BD%D0%B0%D0%BC%D0%B8%D1%87%D0%BD%D1%83%D1%8E-%D1%81%D0%BC%D0%B5%D0%BD%D1%83-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BE%D0%BA-%D0%BF%D1%80%D0%B8-%D0%BD%D0%B0%D0%B6%D0%B0%D1%82%D0%B8%D0%B8-%D0%B2-reactjs*/}
                <p className="title">
                    {name}
                </p>
                <img alt="More" className="more" src={require('../../img/more.svg')}/>
            </div>
        )
    }
}

export default Tasks;