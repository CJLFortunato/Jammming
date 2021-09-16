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
        name: "All the King's Horses",
        artist: 'Karmina',
        album: "All the King's Horses",
        id: 4
        },
        {
          name: "The London Air Raids",
          artist: 'Vian Izak',
          album: "Northern Anthems",
          id: 5
          }
    ]};
    this.addTrack = this.addTrack.bind(this);
  }

  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks});
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
