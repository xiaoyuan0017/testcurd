const express = require("express");
const path = require("path")
const app = express();

app.use(express.static('./dist/angDemo'));

// app.get("/", (req, res) => {
//     res.sendFile(path.join(__dirname + '/dist/angDemo/index.html'))
// })
app.get("/*", (req, res) => {
    res.sendFile('index.html',{root:'dist/angDemo'})
})
app.listen(process.env.PORT || 8080) 