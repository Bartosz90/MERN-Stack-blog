import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import "../styles/app.sass";
import Header from "./Header";
import Main from "./Main";
import Nav from "./Nav";

class Blog extends Component {
  state = {
    articles: [],
    adminLoggedIn: false,
    testText: "sprawdzamy context",
    login: "",
    password: ""
  };
  title = "Sobota";
  textContent = "Zupełnie nowy kontent!";
  auth = "Bartek";
  handleClick = () => {
    fetch(
      `http://localhost:8082/addArticle?title=${this.title}&textContent=${this.textContent}&author=${this.auth}`,
      {
        method: "POST"
      }
    );
  };
  getArticles = () => {
    if (this.state.articles.length > 0) {
      return;
    }
    fetch(`http://localhost:8082/articles?title=get-articles`)
      .then(res => res.json())
      .then(res => {
        const articles = this.state.articles.concat(res);
        this.setState({ articles });
      });
  };
  deleteArt = id => {
    let articles = [...this.state.articles];
    const index = articles.findIndex(article => article._id === id);
    articles.splice(index, 1);
    this.setState({ articles });
    console.log(id);
    fetch(`http://localhost:8082/deleteArticle?id=${id}`);
  };
  handleInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleAdminLog = e => {
    e.preventDefault();
    fetch(
      `http://localhost:8082/login?login=${this.state.login}&password=${this.state.password}`,
      { method: "POST" }
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ adminLoggedIn: res });
      });
  };
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Nav />
          <Main
            click={this.handleClick}
            getArticles={this.getArticles}
            articles={this.state.articles}
            deleteArt={this.deleteArt}
            adminLoggedIn={this.state.adminLoggedIn}
            login={this.state.login}
            password={this.state.password}
            handleInputs={this.handleInputs}
            handleAdminLog={this.handleAdminLog}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default Blog;
