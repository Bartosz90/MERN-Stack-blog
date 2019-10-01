const express = require("express");
const connectDB = require("./config/db");
const app = express();
const Article = require("./models/article");
const cors = require("cors");

//connect database

connectDB();

app.use(cors());

// app.get("/", (req, res) => {
//   const articleData = new Article({
//     title: "Witam",
//     textContent: "witka"
//   });
//   articleData.save(err => {
//     console.log(err);
//   });
// });
const log = "BartekAdmin";
const pass = "bartolomeo123";
app.post("/addArticle", (req, res) => {
  console.log(req.query);
  const { title, textContent, author } = req.query;
  const articleData = new Article({
    title,
    textContent,
    author
  });
  articleData.save(err => {
    if (err) console.log(err);
    else console.log("dodano artykul");
  });
});

app.post("/login", (req, res) => {
  const { login, password } = req.query;
  if (login === log && password === pass) {
    res.json(true);
  } else {
    res.json(false);
  }
});

app.get("/articles", (req, res) => {
  Article.find({}, (err, arts) => {
    if (err) console.log(err);
    else res.json(arts);
  });
});
app.get("/deleteArticle", (req, res) => {
  //   console.log(req.query);
  const { id } = req.query;
  Article.deleteOne({ _id: id }, err => {
    if (err) console.log("blad:" + err);
    else console.log("usunieto!");
  });
});

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
