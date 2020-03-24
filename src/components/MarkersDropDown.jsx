import React from 'react';
import './MarkersDropDown.css';
import ListOfMarkers from "./ListOfMarkers";

class MarkersDropDown extends React.Component {

    markersList = () => {
        document.getElementById("markersList").classList.toggle("show");
    };

    render() {
        return (
            <div className="dropDown">
                <button className="markers_list" onClick={this.markersList = () => {
                    window.onClick = function(event) {
                        if (!event.target.matches('.markers_list')) {
                            let dropDown = document.getElementsByClassName("dropdown-content");
                            let i;
                            for (i = 0; i < dropDown.length; i++) {
                                let openDropdown = dropDown[i];
                                if (openDropdown.classList.contains('show')) {
                                    openDropdown.classList.remove('show');
                                }
                            }
                        }
                    }
                }}>
                    Markers
                    <img alt="Down arrow" className="downArrow" src={require('../img/down-arrow.svg')}/>
                </button>

                <ListOfMarkers markersList={this.markersList()} />
            </div>
        )
    }
}

export default MarkersDropDown;