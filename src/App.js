import "./config/reactotron.js";

import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import GlobalStyle from "./styles/global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Header from "./components/Header";
import ErrorBox from "./components/ErrorBox";

import Routes from "./routes";
import store from "./store";

import { Container, Content, Wrapper } from "./styles/components";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <ErrorBox />
            <Header />
            <Routes />
          </Content>
        </Container>

        <Player />
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>
  </Provider>
);

export default App;
