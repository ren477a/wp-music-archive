import React, { Component } from "react";

class SongSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songs: [
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

    this.createTable = this.createTable.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getSongs();
  }

  getSongs() {
    fetch("http://localhost:8000/api/songs")
      .then(results => results.json())
      .then(results => this.setState({ songs: results }));
  }

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
    let titles = this.state.songs;
    let matches = titles.filter(v =>
      v.title.toLowerCase().includes(searchFor.toLowerCase())
    );
    console.log(matches);
    this.setState({ songs: matches });

    this.createTable();
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
