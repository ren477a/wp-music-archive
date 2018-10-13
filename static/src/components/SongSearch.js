import React, { Component } from "react";
import axios from "axios";

class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: []
    };

    this.createTable = this.createTable.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {}

  createTable() {
    let songs = this.state.songs;
    let table = [];

    // Outer loop to create parent
    for (let i = 0; i < songs.length; i++) {
      let children = [];

      //Inner loop to create children
      for (let j = 0; j < 4; j++) {
        if (j === 0) children.push(<td>{songs[i].title}</td>);
        if (j === 1) children.push(<td>{songs[i].artist}</td>);
        if (j === 2) children.push(<td>{songs[i].length}</td>);
        if (j === 3) children.push(<td>{songs[i].views}</td>);
      }
      //Create the parent and add the children
      table.push(<tr>{children}</tr>);
    }
    return table;
  }

  handleSearch(searchFor) {
    axios.get("http://127.0.0.1:8000/api/songs").then(results => {
      var length = results.data.length;
      var i;
      var res = [];
      for (i = 0; i < length; i++) {
        if (
          results.data[i].title.toLowerCase().includes(searchFor.toLowerCase())
        ) {
          console.log("HELLO");
          res.push(results.data[i]);
        }
      }

      this.setState({ songs: res });
      console.log(res);
      console.log(results);
      console.log(length);
      console.log(results.data);
    });
    //let titles = this.state.songs;
    //let matches = titles.filter(v =>
    //  v.title.toLowerCase().includes(searchFor.toLowerCase())
    //);
    //console.log(matches);
    //this.setState({ songs: matches });

    //this.createTable();
  }

  render() {
    return (
      <div className="col">
        <h1>Search a Song</h1> <br />
        <input
          id="searchFor"
          name="title"
          placeholder="Search by Title"
          type="text"
        />
        <button
          onClick={() =>
            this.handleSearch(document.getElementById("searchFor").value)
          }
        >
          Search
        </button>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Length</th>
              <th>Views</th>
            </tr>
          </thead>
          <tbody>{this.createTable()}</tbody>
        </table>
      </div>
    );
  }
}

export default SongSearch;
