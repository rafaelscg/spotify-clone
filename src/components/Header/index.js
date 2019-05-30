import React from "react";

import { User, Search, Container } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        src="https://avatars1.githubusercontent.com/u/7605036?v=4"
        alt="Avatar"
      />
      Rafael Simões
    </User>
  </Container>
);

export default Header;
