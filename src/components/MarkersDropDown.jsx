import React from 'react';
import './MarkersDropDown.css';
import ListOfMarkers from "./ListOfMarkers";

class MarkersDropDown extends React.Component {

    state = {
        showDropdown:false
    };

    markersList = () => {
    const {showDropdown} = this.state;
        this.setState({showDropdown: !showDropdown})
    };

    render() {
        const {showDropdown} = this.state;
        const {marker, openTask, onTaskDelete} = this.props;

        return (
            <div className="dropDown">
                <button className="markers_list" onClick={this.markersList}>
                    Markers
                    <img alt="Down arrow" className="downArrow" src={require('../img/down-arrow.svg')}/>
                </button>
                {showDropdown && <ListOfMarkers
                    marker = {marker}
                    openTask = {openTask}
                    onTaskDelete={onTaskDelete} />}
            </div>
        )
    }
}

export default MarkersDropDown;