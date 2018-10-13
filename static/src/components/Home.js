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
    axios.get("http://127.0.0.1:8000/api/songs/top/").then(results => {
      //var topsongs = this.state.topSongs;
      //this.setState({ topSongs: topsongs });
      //console.log(this.state);

      //sort data by views
      var views = [];
      var j;
      for (j = 0; j < results.data.length; j++) {
        views.push(results.data[j].views);
      }
      console.log(views);
      views.sort(function(a, b) {
        return b - a;
      });
      console.log(views);

      //get top 3
      var top = [];
      var m1, m2, m3;
      for (m1 = 0; m1 < results.data.length; m1++) {
        if (results.data[m1].views === views[0]) {
          top.push(results.data[m1]);
        }
      }
      for (m2 = 0; m2 < results.data.length; m2++) {
        if (results.data[m2].views === views[1]) {
          top.push(results.data[m2]);
        }
      }
      for (m3 = 0; m3 < results.data.length; m3++) {
        if (results.data[m3].views === views[2]) {
          top.push(results.data[m3]);
        }
      }
      this.setState({ topSongs: top });
      //console.log(this.state);
      // for(i = 0; i < 3; i++){
      //Math.max(results.data.views)
      //res.push(results.data[i])
      // }
      //var i;
      //var res = [];
      //for (i = 0; i < length; i++) {
      //if (results.data[i].title.includes(searchFor)) {
      //if (results.data[i].title.toLowerCase() === searchFor.toLowerCase()) {
      //console.log("HELLO");
      //res.push(results.data[i]);
      //this.setState({ songs: results.data[i] });
      // }
      //}
      //this.setState({ songs: res });
      //console.log(res);
      //console.log(results);
      //console.log(length);
      //console.log(results.data);
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
