import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSongs: [
        {
          id: 1,
          title: "Victorious",
          artist: "Panic! At The Disco",
          length: "00:03:04",
          views: "3,892,453"
        },
        {
          id: 2,
          title: "Lucid Dreams",
          artist: "Juice WRLD",
          length: "00:03:50",
          views: "10,239,893"
        }
      ]
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    fetch("http://localhost:8000/api/songs/top")
      .then(results => results.json())
      .then(results => this.setState({ songs: results }));
  }

  render() {
    return (
      <div className="col">
        <h1 style={{ color: "#C553E9" }}>TOP SONGS:</h1>

        <ul className="song-container">
          {this.state.topSongs.map(function(song, id) {
            return (
              <div key={song.id}>
                <h3>{song.title}</h3>
                <p>{song.artist}</p>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
