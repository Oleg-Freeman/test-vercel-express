const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/posts", function (req, res) {
    res.json({ message: "Hello World!" });
});

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});
