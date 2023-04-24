import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import "../index.css";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    //w 765 h 800
    return (
      <header id="home" className="homem">

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            {/* <li className="">
              <a className="smoothscroll" href="#home">
              </a>
            </li> */}


            <li>
              <a className="smoothscroll" href="#about">
                <div className="logoimg"></div>
              </a>
            </li>

            <li className="current">
              <a className="smoothscroll" href="#home">
                Ana sayfa
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                Hakkımızda
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume">
                Hizmetlerimiz
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Projelerimiz
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>ĞG
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />

          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
