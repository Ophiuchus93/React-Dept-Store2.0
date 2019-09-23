import React from "react";
import { Link, } from 'react-router-dom';
import { Menu, } from "semantic-ui-react";

const Navbar = () => (
  <Menu>
    <Link to="/">
      <Menu.Item>
        Home
    </Menu.Item>
    </Link>
  </Menu>
);


export default Navbar;