import './Playlist.css';
import React from 'react';
import { Track } from '../Track/Track';

export function Playlist(props) {

    const handleNameChange = (e) => {
        props.onNameChange(e.target.value);
    }

    return (
        <div className="playlist">
            <input defaultValue={"New Playlist"} onChange={handleNameChange}/>
            <div className='tracklist'>
                {props.tracks.map(track => {
                    return <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>}
                )}
            </div>
        </div>
    );
}
