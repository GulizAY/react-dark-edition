import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

import AdminNavbarLinks from "./AdminNavbarLinks.jsx";

class AdminNavbar extends Component {
  constructor(props) {
    super(props);
    this.mobileSidebarToggle = this.mobileSidebarToggle.bind(this);
    this.state = {
      sidebarExists: false
    };
  }
  mobileSidebarToggle(e) {
    if (this.state.sidebarExists === false) {
      this.setState({
        sidebarExists: true
      });
    }
    e.preventDefault();
    document.documentElement.classList.toggle("nav-open");
    var node = document.createElement("div");
    node.id = "bodyClick";
    node.onclick = function() {
      this.parentElement.removeChild(this);
      document.documentElement.classList.toggle("nav-open");
    };
    document.body.appendChild(node);
  }
  render() {
    return (
      <Navbar fluid className="dark-edition navbar-expand-lg">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#tms">{this.props.brandText}</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.mobileSidebarToggle} />
        </Navbar.Header>
        <Navbar.Collapse className="justify-content-end">
          {/* <Navbar.Form>
            <div className="form-inline">
              <div className="form-group">
                <input type="text" className="form-control input-simple" id="search" placeholder="Search" name="search" />
                <button className="btn btn-input-circle" type="button">
                  <i className="fa fa-search"></i>
                </button>
              </div>
            </div>
          </Navbar.Form> */}
          <AdminNavbarLinks />
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default AdminNavbar;
