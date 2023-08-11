import React ,{ Component } from "react";
import { fixedMenuStyle, menuStyle } from "../helpers/styleHelpers";
import { Container, Image, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";


export default class Header extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
  };

  render() {
    const { menuFixed } = this.state;

    return (
      <div>
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
        >
          <Container text>
            <Menu.Item>
              <Image size="mini" src="https://react.semantic-ui.com/logo.png" />
            </Menu.Item>
            <Menu.Item header>MovieApp</Menu.Item>
            <Menu.Item as={Link} to={"/"}>
              Home page
            </Menu.Item>
            <Menu.Item as={Link} to={"popular"}>
              Popular
            </Menu.Item>

          </Container>
        </Menu>
      </div>
    );
  }
}

