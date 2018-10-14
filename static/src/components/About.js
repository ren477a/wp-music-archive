import React from "react";
import "./About.css";
import Efren from "../img/efren.jpg";
import Paul from "../img/paul.jpg";
import Freanu from "../img/freanu.jpg";
import JD from "../img/jd.jpg";

const About = () => {
  return (
    <div className="container-fluid">
      <div className="row" style={{textAlign: "center"}} >
        <div className="col-lg-12">
          <h2 style={{ color: "#C553E9" }}>About the Music Archive...</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-2" />
        <div className="col-lg-8">
          <p>
            "Music Archive was created by Efren Mercado, Paul Prieto, Freanu
            Peria, and Jaydee Diano. In partial fulfillment of the requirements
            for the subject IT 201 - Web Programming. "
          </p>
          <em>- The Team</em>
        </div>
        <div className="col-lg-2" />
      </div>

      <div className="row">
        <div className="col-lg-12">
          <h2 style={{ color: "#C553E9" }}>About the team...</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-8 content">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut dui sed ligula accumsan fermentum. Etiam commodo quam libero,
              at elementum magna rutrum eu. Praesent scelerisque quam arcu, a
              sodales dui auctor a. Proin non diam a ex blandit mollis quis vel
              nisi. Donec fringilla leo luctus diam cursus, sit amet aliquet
              nisi egestas. Curabitur feugiat dui quis elit hendrerit, eget
              dignissim magna laoreet. Nullam sit amet ante eget nisl semper
              scelerisque et ac lacus. Sed sit amet sodales est, eget venenatis
              ante. Sed tellus dolor, convallis id nibh id, rhoncus finibus
              sapien. Nullam ut feugiat nulla. Phasellus eleifend ultricies
              maximus. Praesent faucibus fringilla lectus.
            </p>
            <em className="lead">-Efren Mercado Jr</em>
            <em>., CEO & Back-End</em>
          </blockquote>
        </div>
        <div className="col-sm12 col-md-6 col-lg-4">
          <img src={Efren} alt="efrenimg" className="rounded-circle pics" />
        </div>
      </div>
      <div className="row">
        <div className="col-sm12 col-md-6 col-lg-4">
          <img src={Paul} alt="efrenimg" className="rounded-circle pics" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8 content">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut dui sed ligula accumsan fermentum. Etiam commodo quam libero,
              at elementum magna rutrum eu. Praesent scelerisque quam arcu, a
              sodales dui auctor a. Proin non diam a ex blandit mollis quis vel
              nisi. Donec fringilla leo luctus diam cursus, sit amet aliquet
              nisi egestas. Curabitur feugiat dui quis elit hendrerit, eget
              dignissim magna laoreet. Nullam sit amet ante eget nisl semper
              scelerisque et ac lacus. Sed sit amet sodales est, eget venenatis
              ante. Sed tellus dolor, convallis id nibh id, rhoncus finibus
              sapien. Nullam ut feugiat nulla. Phasellus eleifend ultricies
              maximus. Praesent faucibus fringilla lectus.
            </p>
            <em className="lead">-Paul Christian Prieto</em>
            <em>,&nbsp;President & Back-End</em>
          </blockquote>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-8 content">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut dui sed ligula accumsan fermentum. Etiam commodo quam libero,
              at elementum magna rutrum eu. Praesent scelerisque quam arcu, a
              sodales dui auctor a. Proin non diam a ex blandit mollis quis vel
              nisi. Donec fringilla leo luctus diam cursus, sit amet aliquet
              nisi egestas. Curabitur feugiat dui quis elit hendrerit, eget
              dignissim magna laoreet. Nullam sit amet ante eget nisl semper
              scelerisque et ac lacus. Sed sit amet sodales est, eget venenatis
              ante. Sed tellus dolor, convallis id nibh id, rhoncus finibus
              sapien. Nullam ut feugiat nulla. Phasellus eleifend ultricies
              maximus. Praesent faucibus fringilla lectus.
            </p>
            <em className="lead">-JD Diano</em>
            <em>&nbsp;Manager, Front-End</em>
          </blockquote>
        </div>
        <div className="col-sm12 col-md-6 col-lg-4">
          <img src={JD} alt="efrenimg" className="rounded-circle pics" />
        </div>
      </div>

      <div className="row">
        <div className="col-sm12 col-md-6 col-lg-4">
          <img src={Freanu} alt="efrenimg" className="rounded-circle pics" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-8 content">
          <blockquote>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              ut dui sed ligula accumsan fermentum. Etiam commodo quam libero,
              at elementum magna rutrum eu. Praesent scelerisque quam arcu, a
              sodales dui auctor a. Proin non diam a ex blandit mollis quis vel
              nisi. Donec fringilla leo luctus diam cursus, sit amet aliquet
              nisi egestas. Curabitur feugiat dui quis elit hendrerit, eget
              dignissim magna laoreet. Nullam sit amet ante eget nisl semper
              scelerisque et ac lacus. Sed sit amet sodales est, eget venenatis
              ante. Sed tellus dolor, convallis id nibh id, rhoncus finibus
              sapien. Nullam ut feugiat nulla. Phasellus eleifend ultricies
              maximus. Praesent faucibus fringilla lectus.
            </p>
            <em className="lead">-Freanu Peria</em>
            <em>,&nbsp; Floor Manager & Front-End</em>
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default About;
