const express = require("express");
const app = express();

const bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var number1 = Number(req.body.num1);
    var number2 = Number(req.body.num2);
    var ans = number1 + number2;

    res.send("The addition is" + ans);

});

app.listen(3000, function () {
    console.log("server has started on port 3000");
})