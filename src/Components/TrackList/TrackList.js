import './TrackList.css';
import React from 'react';


export class TrackList extends React.Component {
    render() {
        return (
        <div className="TrackList">
            {/* You will add a map method that renders a set of Track components */}
            <h3>Doctor</h3>
            <p>Truslow | Hurricane</p> 
            <h3>Icarus</h3>
            <p>Bastille | All This Bad Blood</p>
            <h3>Demons at the Door</h3>
            <p>Sleeping Wolf | The Dark</p>
        </div> 
    ); }
}