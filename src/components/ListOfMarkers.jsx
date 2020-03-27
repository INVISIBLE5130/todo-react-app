import React from 'react';
import './ListOfMarkers.css';
import '../img/delete.svg';

class ListOfMarkers extends React.Component {

    render() {
        const {marker = [], openTask, onTaskDelete} = this.props;
        return(
            <div id="markersList" className="dropdown-content">
                {marker.map((item,index) => {
                    return(
                        <p onClick = { () => openTask(index)} key={index}> {item.name}
                            <span onClick = { () => onTaskDelete(index)}>
                                <img className = "delete" alt = "Delete" src = {require('../img/delete.svg')} />
                            </span>
                        </p>
                    )
                })}

            </div>
        )
    }
}

export default ListOfMarkers;