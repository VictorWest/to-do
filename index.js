import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extented: true}));
app.use(express.static("public"));

var toDo = [];
toDo.push(req.body["new-task1"]);

app.get("/", (req, res) => {
    res.render("index.ejs");
})
app.post("/submit", (req, res) => {
    res.render("index.ejs", 
    {newTask1: req.body["new-task1"], newTask2: req.body["new-task2"], 
    newTask3: req.body["new-task3"], newTask4: req.body["new-task4"]});
})
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})