import React from "react";

const SongRegister = () => {
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
          <label for="exampleFormControlFile1 col-form-label col-md-2">
            Cover Photo:
          </label>
          <div className="col" style={{ paddingLeft: "20px" }}>
            <input
              type="file"
              className="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
        </div>
        <div className="submit">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SongRegister;
