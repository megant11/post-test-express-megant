const express = require("express");

const app = express();
const bukuApp = require("./Routes/books");

app.use(bukuApp);

app.listen(3000, () => {
    console.log("Servernya udah nyala lho!");
});