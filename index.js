const express = require("express");
const app = express();
app.use(express.json());
const data = require("./data.json");

const checkDataId = (req, res, next) => {
  const search = data.map((user) => {
    if (Number(user.id) == Number(req.body.id)) {
      console.log("amjiltai");
    }
    res.send(search);
  });
  next();
};

app.get("/", (req, res) => {
  res.send(data);
});

app.post("/login", checkDataId, (req, res) => {
  const search = data.filter((user) => {
    //   return Number(user.id) == Number(req.body.id);
    console.log("amjiltgu!!!");
  });
  // res.send(search);
});

app.post("/signin", (req, res) => {});

// app.delete("/delete", (req, res) => {
//   const deletei = data.filter((user) => {
//     return
//   });
//   res.send(deletei);
// });

app.listen(3000, console.log("runing"));
