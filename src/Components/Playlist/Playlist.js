import './Playlist.css';
import  { TrackList } from '../TrackList/TrackList.js';
import React from 'react';

export class Playlist extends React.Component {
    render() {
        return (
        <div className="Playlist">
            <input defaultValue={"New Playlist"}/>
            <TrackList playlistTracks={this.props.playlistTracks}/>
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
    }
}