const express = require('express')
const mongoose = require('mongoose')
// const User = require('./modals/Surveys')
const url = 'mongodb://127.0.0.1:27017/firstdb'
const router = express.Router()

const app = express();
const cors = require('cors');
const bp = require("body-parser");


app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors({
    origin: '*'
}));
mongoose.connect(url).then((res) => {
    console.log("Mongodb connected");
})
    .catch((err) => {
        console.log(err)
    })

app.use('/survays', require('./routes/SurvayRoutes'))

app.listen(8080, () => { console.log("Server running at 8080") })