import './SearchResults.css';
import React from 'react';
import { Track } from '../Track/Track';
    
export function SearchResults(props) {

    return (
        <div className="SearchResults">
             <h2>Results</h2>
            <div className='tracklist'>
                {props.tracks.map(track => {
                    return <Track track={track} key={track.id} onAdd={props.onAdd} onRemove={props.onRemove} isRemoval={props.isRemoval}/>}
                )}
            </div>
        </div>
    );

}
