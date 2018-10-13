import React from "react";
import { Component } from "react";
import axios from "axios";

class SongRegister extends Component {
  state = {
    formFields: []
  };
  componentDidMount() {
    // Assuming you are using jQuery,
    // if not, try fetch().
    // Note that 2 is hardcoded, get your user id from
    // URL or session or somewhere else.
    axios.get("http://127.0.0.1:8000/api/songs", data => {
      this.setState({
        formFields: data.fields // fields is an array
      });
      // console.log(data);
    });
  }

  submitForm(e) {
    e.preventDefault();
    console.log(document.getElementById("image").value);
    axios
      .post(
        "http://127.0.0.1:8000/api/songs/",
        {
          title: document.getElementById("title").value,
          artist: document.getElementById("artist").value,
          length: document.getElementById("length").value,
          views: document.getElementById("views").value,
          image: document.getElementById("image").value
        },
        response => {
          console.log("Success Adding!"); // check fully.
        }
      )
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div className="col">
        <h1>Register a Song:</h1>
        <form>
          <div className="form-group">
            <label className="col-form-label">Title: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter title of song..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Artist/s: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="artist"
                placeholder="Enter artist..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Length: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="length"
                placeholder="Enter length(mm:ss) ..."
              />
            </div>
          </div>

          <div className="form-group">
            <label className="col-form-label">Views: </label>
            <div className="col">
              <input
                type="text"
                className="form-control"
                id="views"
                placeholder="Enter number of views..."
              />
            </div>
          </div>
          <div className="form-group">
            <label form="col-form-label col-md-2">Cover Photo:</label>
            <div className="col" style={{ paddingLeft: "20px" }}>
              <input type="file" className="form-control-file" id="image" />
            </div>
          </div>
          <div className="submit">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.submitForm.bind(this)}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default SongRegister;
