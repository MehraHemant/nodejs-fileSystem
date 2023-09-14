import express from "express";
import fs from "fs";
import date from "date-and-time";

const port = 4000;

const app = express();

app.get("/", async (req, res) => {
  // getting current date and time
  const timestamp = new Date();

  const myTargetFolder = "Data";

  let data = date.format(timestamp, "DD/MM/YYYY HH:mm:ss");
  // Checking whether folder is already exists if not creating it
  if (!fs.existsSync(myTargetFolder)) {
    fs.mkdir(`./${myTargetFolder}`, (err) => {
      if (err) {
        return console.error(err);
      }
    });
  }
  // Updating the current file and creating if not exists at current path
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
