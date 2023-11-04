import express from "express";
import fs from "fs";
import date from "date-and-time";

const port = 4000;

const app = express();

//middlewares
app.use(express.json());

app.get("/timestamp", (req, res) => {
  let time = new Date();
  let dateString = time;
  const content = `Last created timestamp ${dateString}`;

  fs.writeFileSync("date-time.txt", content, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file created sucessfully");
    }
  });

  res.json(content);
});


app.get("/", function (req, res) {
  res.send("Hello! Day-39-Task.Please check <a href='http://localhost:4000/timestamp'>http://localhost:3000/timestamp</a> to view the current timestamp details")
});

app.listen(port, () => console.log("server started in http://localhost:4000"));