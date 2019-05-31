import React, { Component } from "react";
import { Grid } from "react-bootstrap";
// import { Container } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          <nav className="pull-left">
            <ul>
              <li>
                <a href="#/tms">Home</a>
              </li>
              <li>
                <a href="#/company">Company</a>
              </li>
              <li>
                <a href="#/contact">Contact</a>
              </li>
              <li>
                <a href="#/blog">Blog</a>
              </li>
            </ul>
          </nav>
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <a href="http://www.themoon-studio.com/">
              The Moon Studio
            </a>
            , made with rigor to make your work easier
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
