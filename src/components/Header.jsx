import React, { Component } from "react";
import { fixedMenuStyle, fixedDarkMenuStyle } from "../helpers/styleHelpers";
import { Container, Image, Menu, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  render() {
    const { menuFixed } = this.state;
    const { isDarkMode } = this.props;
    const darkmodestyle = (isDarkMode ? fixedDarkMenuStyle : fixedMenuStyle)
    return (
      <div>
        <Button className="darkmodebtn" onClick={this.props.toggleDarkMode}>
          {this.props.isDarkMode ? "Light Mode" : "Dark Mode"}
        </Button>

        <Menu
        className="headermenu"
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={darkmodestyle}
        >
          <Container text>
            <Menu.Item>
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Item
              style={darkmodestyle}
              header
            >
              MovieApp
            </Menu.Item>
            <Menu.Item
              style={darkmodestyle}
              as={Link}
              to={"/"}
            >
              giriş
            </Menu.Item>
            <Menu.Item
              style={darkmodestyle}
              as={Link}
              to={"/home"}
            >
              Home page
            </Menu.Item>
            <Menu.Item
              style={darkmodestyle}
              as={Link}
              to={"popular"}
            >
              Popular
            </Menu.Item>
            <Menu.Item
              style={darkmodestyle}
              as={Link}
              to={"top-rated"}
            >
              Top Rated
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    );
  }
}
