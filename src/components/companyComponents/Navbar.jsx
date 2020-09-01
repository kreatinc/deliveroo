import React from "react";
import { Dropdown, Nav, Navbar, Icon, Button } from "rsuite";
import { Link } from "react-router-dom";
import CompanySettingsModal from "./settingsModal";

const NavBar = () => {
  return (
    <Navbar>
      <Navbar.Header>
        <a href="#" className="navbar-brand logo">
          Company
        </a>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Link to="/company">
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
          </Link>
          <Link to="/company/products">
            <Nav.Item>Products</Nav.Item>
          </Link>
          <Link to="/company/commands">
            <Nav.Item>Commands</Nav.Item>
          </Link>
          <Link to="/company/stock">
            <Nav.Item>Stock</Nav.Item>
          </Link>
        </Nav>
        <Nav pullRight>
          <CompanySettingsModal />
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default NavBar;
