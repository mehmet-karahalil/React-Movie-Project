import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesPage from "./components/pages/MoviesPage";
import React, { Component } from "react";
import {  Container} from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default class app extends Component {
  constructor() {
    super();
    this.state = {
      isDarkMode: false
    };
  }

  toggleDarkMode = () => {
    this.setState(prevState => ({
      isDarkMode: !prevState.isDarkMode
    }));
  }

  render() {
    const { isDarkMode } = this.state;
    return (
      <div className={isDarkMode ? "dark-mode" : "light-mode"}>
        <Header toggleDarkMode={this.toggleDarkMode} isDarkMode={isDarkMode} />
        <Container style={{ width: "1350px" }}>

          <br />
          <Routes>
            <Route path="/" element={<h1>home page</h1>} />
            <Route path="/popular" element={<MoviesPage />} />
          </Routes>
        </Container>
        <Footer />
      </div>
    );
  }
}
