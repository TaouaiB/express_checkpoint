const express = require("express");
const app = express();
const PORT = 7000;

app.use((req, res, next) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentTime = currentDate.getHours();

    console.log("Current Day:", currentDay);
    console.log("Current Time:", currentTime);

  if (currentDay >= 1 && currentDay <= 5 && currentTime >= 9 && currentTime < 17) {
    next();
  } else {
    res.send("Service is currently offline. Please try again later.");
  }
});

app.set("view engine", "pug");
app.set("views", __dirname + "/views");

app.use(express.static('public'));

app.get("/OurServices", (req, res) => {
  res.render("OurServices", { pageTitle: "Our Gaming Services" });
});

app.get("/HomePage", (req, res) => {
  res.render("HomePage", { pageTitle: "Welcome to Gaming World" });
});

app.get("/ContactUs", (req, res) => {
  res.render("ContactUs", { pageTitle: "Contact Gaming World" });
});

app.listen(PORT, (error) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log("Server created successfully");
  }
});
