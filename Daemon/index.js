const express = require("express");
const bodyParser = require("body-parser");
const models = require("./models/index.js");
const {extractBlocksInfoFromMinHeightToMaxHeight,getCurrentHeight,pushBlock} = require("./modules/demonModules");

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));


models.sequelize
    .sync()
    .then(async () => {
        console.log(" DB 연결 성공");
        console.log(await pushBlock())
    })
    .catch((err) => {
        console.log("연결 실패");
        console.log(err);
    });


app.listen(PORT, async () => {
    console.log(`      🚀 HTTP Server is starting on ${PORT}`);
});