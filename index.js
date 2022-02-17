const express = require("express");
const app = express();
const { PORT } = require("./port");
app.set("view engine", "ejs");
app.set('views', 'public');

app.use(express.static('public'));

app.get("/", (req, res) => {
    res.render("index", {
        title: "AMAS"
    });
});

app.listen(PORT);