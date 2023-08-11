import { Route, Routes } from "react-router-dom";
import "./App.css";
import MoviesPage from "./components/pages/MoviesPage";
import React, { Component } from "react";
import {  Container} from "semantic-ui-react";
import Footer from "./components/Footer";
import Header from "./components/Header";


export default class app extends Component {

  render() {

    return (
      <div>
        <Header/>
        <Container style={{width:"1350px"}}>
          hello world!
          <hr />
          <br />
          <Routes>
            <Route path="/" element={<h1>home page</h1>} />
            <Route path="/movies" element={<MoviesPage />} />
          </Routes>
        </Container>

       <Footer />
      </div>
    );
  }
}
