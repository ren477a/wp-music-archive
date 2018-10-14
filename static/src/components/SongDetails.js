import React from "react";
import { Component } from "react";
import axios from "axios";

class SongDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
          songDetails: []
        };
      }

    componentDidMount() {
        //alert(this.props.match.params.id)
        this.getSongDetail();
      }
    
      getSongDetail() {
        axios.get("http://127.0.0.1:8000/api/songs/"+this.props.match.params.id +"/").then(results => {
          this.setState({ songDetails: results.data })
         console.log(results.data)
         //console.log(this.state)
        });
      }

    render() {
        return (
            <div  style={{textAlign: "center"}}>
                <span className="topsong" >
                    <img src={this.state.songDetails.image} width = "400px"></img>
                    <h1>Title: {this.state.songDetails.title}</h1>
                    <h3>Artist: {this.state.songDetails.artist}</h3>
                    <h3>Length: {this.state.songDetails.length}</h3>
                    <h3>Views: {this.state.songDetails.views}</h3>
                    
                </span>
            </div>
        );
    }
}

export default SongDetails;
