import React from "react";
import { SiTwitter } from "react-icons/si";
import { GrFacebook } from "react-icons/gr";
import { GrLinkedin } from "react-icons/gr";
import { SiInstagram } from "react-icons/si";
import logo from "../../../images/logo.svg";

export function NavBar() {

  const path = window.location.pathname;

  console.log(path)

  return (
    <nav className="navbar navbar-light navbar-expand-md" id="top-nav-bar">
      <div className="container-fluid">
        <div className="container">
          <a className="navbar-brand" href="/">
            <img width="80" src={logo} alt="logo" />
          </a>
          <button
            data-toggle="collapse"
            className="navbar-toggler"
            data-target="#navcol-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navcol-1">

            <ul className="nav navbar-nav mr-auto" id="social">
              
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="/rdc"><SiTwitter /></a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="/rdc"><GrFacebook /></a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="/rdc"><GrLinkedin /></a>
              </li>
              <li className="nav-item d-none d-md-block">
                <a className="nav-link" href="/rdc"><SiInstagram /></a>
              </li>

            </ul>

            <ul className="nav navbar-nav navbar-right">

            <li className="nav-item">
                    {path === '/' ?
                        <a className="nav-link active" href="/">Home</a>
                        :
                        <a className="nav-link" href="/">Home</a>
                    }
              </li>

              <li className="nav-item">
                    {path === '/get-bult' ?
                        <a className="nav-link active" href="/get-bult">Get Bult</a>
                        :
                        <a className="nav-link" href="/get-bult">Get Bult</a>
                    }
              </li>
              <li className="nav-item">
                    {path === '/events' ?
                        <a className="nav-link active" href="/events">Events</a>
                        :
                        <a className="nav-link" href="/events">Events</a>
                    }
              </li>
              <li className="nav-item">
                    {path === '/learn' ?
                        <a className="nav-link active" href="/learn">learn</a>
                        :
                        <a className="nav-link" href="/learn">learn</a>
                    }
              </li>

              <li className="nav-item">
                    {path === '/join' ?
                        <a className="nav-link active" href="/join">Join</a>
                        :
                        <a className="nav-link" href="/join">Join</a>
                    }
              </li>
            </ul>

          </div>
        </div>
      </div>
    </nav>
  );
}