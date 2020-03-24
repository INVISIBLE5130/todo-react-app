import React from 'react';
import './ListOfMarkers.css';

class ListOfMarkers extends React.Component {

    state = {
        marker: [
            {name: 'Marker 1'},
            {name: 'Marker 2'},
            {name: 'Marker 3'},
            {name: 'Marker 4'},
            {name: 'Marker 5'},
            {name: 'Add marker'}
        ]
    };

    render() {
        return(
            <div id="markersList" className="dropdown-content">
                <a href="#">{this.state.marker[0].name}</a>
                <a href="#">{this.state.marker[1].name}</a>
                <a href="#">{this.state.marker[2].name}</a>
                <a href="#">{this.state.marker[3].name}</a>
                <a href="#">{this.state.marker[4].name}</a>
                <a href="#">{this.state.marker[5].name}</a>
            </div>
        )
    }

}

export default ListOfMarkers;