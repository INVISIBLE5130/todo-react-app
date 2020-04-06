import React from 'react';
import './MarkersDropDown.css';
import ListOfMarkers from "../ListOfMarkers/ListOfMarkers";

class MarkersDropDown extends React.Component {

    state = {
        show:{
            Dropdown:false
        }
    };

    markersList = () => {
        const {Dropdown} = this.state;

        this.setState({Dropdown: !Dropdown});
    };

    render() {
        const {Dropdown} = this.state;
        const {marker, onTaskDelete} = this.props;

        return (
            <div className="dropDown">
                <button className="markers_list" onClick={this.markersList}>
                    Markers
                    <img className="Arrow" alt="Arrow" src={require('../../img/down-arrow.svg')}/>
                </button>
                {Dropdown && <ListOfMarkers
                    marker = {marker}
                    // openTask = {openTask}
                    onTaskDelete={onTaskDelete} />}
            </div>
        )
    }
}

export default MarkersDropDown;