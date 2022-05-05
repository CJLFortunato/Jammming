import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';
import React, { useState} from 'react';
import Spotify from '../../util/Spotify.js';


export function App() {

  const [ searchResults, setSearchResults ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState("New Playlist");
  const [ playlistTracks, setPlaylistTracks ] = useState([]);

  const addTrack = (track) => {

    if(playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    setPlaylistTracks([...playlistTracks, track]);
  };
  const removeTrack = (track) => {
    setPlaylistTracks(playlistTracks.filter(currentTrack => currentTrack.id !== track.id));
  }

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  }

  const savePlaylist = () => {
    const trackUris = playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTracks: []
      });
    });
  };

  const search = (searchTerm) => {
    Spotify.search(searchTerm).then(searchResults => {
      setSearchResults(searchResults);
    });
  };

  return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist playlistName={playlistName} playlistTracks={playlistTracks} onRemove={removeTrack} onNameChange={updatePlaylistName} onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
);









}
