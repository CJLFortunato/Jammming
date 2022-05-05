import React from 'react';
import './Track.css';

export function Track (props) {

  const addOrRemove = () => {

    if (props.isRemoval) {
      return <button className="Track-action" onClick={props.removeTrack}>-</button>;
    } else {
      return <button className="Track-action" onClick={props.addTrack}>+</button>;
    }

  };
  
  const renderAudioPlayer = () => {
    if (props.track.preview) {
      return <audio src={this.props.track.preview} controls></audio>
    }
  }

  return (
    <div className="Track">
    <div className="Track-information">
      <h3>{props.track.name}</h3>
      <p>{props.track.artist} | {props.track.album}</p>
      {renderAudioPlayer()}
    </div>
    {addOrRemove()}
  </div>);
}