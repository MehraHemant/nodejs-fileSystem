import express from "express";
import fs from "fs";
import date from "date-and-time";

const port = 4000;

const app = express();

app.get("/", async (req, res) => {
  const timestamp = new Date();
  const myTargetFolder = "Data";
  let data = date.format(timestamp, "DD/MM/YYYY HH:mm:ss");
  if (!fs.existsSync(myTargetFolder)) {
    fs.mkdir(`./${myTargetFolder}`, (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
  fs.writeFile(`./${myTargetFolder}/date-time.txt`, data, (err) => {
    if (err) {
      throw err;
    }
    res.send("file created successfully !!!!");
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
