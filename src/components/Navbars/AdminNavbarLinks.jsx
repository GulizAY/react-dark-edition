import React, { Component } from "react";
import { NavItem, Nav, Navbar, NavDropdown, MenuItem, Dropdown } from "react-bootstrap";
//import { NavItem, Nav, NavDropdown, Dropdown } from "react-bootstrap";

class AdminNavbarLinks extends Component {
  render() {
    const notification = (
      <div>
        <i className="fa fa-globe" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );
    return (
      <Nav  className="navbar-right">
        {/* <NavItem eventKey={1} href="#">
          <i className="fa fa-search" />
          <p className="hidden-lg hidden-md">Search</p>
        </NavItem> */}
        <NavItem eventKey={1} href="#/profile">
          <p className="text-info"><i className="fa fa-user" />UserName</p>
        </NavItem>
        <NavItem eventKey={2} href="#">
          Log out
        </NavItem>
      </Nav>
    );
  }
}

export default AdminNavbarLinks;
