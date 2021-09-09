//import logo from './logo.svg';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
      {
        name: 'Doctor',
        artist: 'Truslow',
        album: 'Hurricane',
        id: 1
        },
        {
          name: 'Icarus',
          artist: 'Bastille',
          album: 'All This Bad Blood',
          id: 2
          },
          {
            name: 'Demons at the Door',
            artist: 'Sleeping Wolf',
            album: 'The Dark',
            id: 3
            }
    ],
    playlistName: "New Playlist",
    playlistTracks: [
      {
        name: 'Doctor',
        artist: 'Truslow',
        album: 'Hurricane',
        id: 1
        },
        {
          name: 'Icarus',
          artist: 'Bastille',
          album: 'All This Bad Blood',
          id: 2
          },
          {
            name: 'Demons at the Door',
            artist: 'Sleeping Wolf',
            album: 'The Dark',
            id: 3
            }
    ]};
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    this.state.playlistTracks.push(track);
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
