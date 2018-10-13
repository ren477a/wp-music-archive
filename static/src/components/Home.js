import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topSongs: []
    };
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    axios.get("http://127.0.0.1:8000/api/songs/top").then(results => {
      this.setState({ topSongs: results.data });
    });
  }

  render() {
    return (
      <div className="col">
        <h1 style={{ color: "#C553E9" }}>TOP SONGS:</h1>

        <ul className="song-container" xs="6">
          {this.state.topSongs.map(function(song) {
            return (
              <div key={song.id} xs="6">
                <span className="topsong">
                  <img
                    src={song.image}
                    alt={"Cover Photo: " + song.title}
                    width="300px"
                    length="300px"
                  />
                  <h3> {song.title} </h3>
                  <p> {song.artist} </p>
                  <p> {song.views} </p>
                </span>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Home;
