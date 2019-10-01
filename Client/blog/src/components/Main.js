import React from "react";
import "../styles/main.sass";
import { Route } from "react-router-dom";
import Articles from "./Articles";
import Admin from "./Admin";

const Main = props => {
  const articles = props.articles.map(article => {
    return (
      <div key={article._id}>
        <h1>{article.title}</h1>
        <p>{article.textContent}</p>
        <p>
          Dodano: {article.date.slice(0, 10)} przez {article.author}
        </p>
        <button onClick={() => props.deleteArt(article._id)}>DELETE</button>
      </div>
    );
  });
  return (
    <main className="main">
      <Route exact path="/" render={() => <Articles />} />
      <Route
        exact
        path="/admin"
        render={() => (
          <Admin
            adminLoggedIn={props.adminLoggedIn}
            handleInputs={props.handleInputs}
            handleAdminLog={props.handleAdminLog}
          />
        )}
      />
    </main>
  );
};

export default Main;
