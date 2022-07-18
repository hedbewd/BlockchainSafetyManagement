const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 3001;

const db = mysql.createPool({
    host: "safetymanagement.cqnomdvxrv4y.ap-northeast-2.rds.amazonaws.com",
    user: "yhoon",
    password: "Mcnl2021",
    database: "test"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api/insert", (req, res)=>{
    const category = req.body.category;
    const name = req.body.name;
    const time = req.body.time;
    const ipfsHash = req.body.ipfsHash;
    const registrant = req.body.registrant;
    const responsible = req.body.responsible;
    const filetype = req.body.filetype;
    const filedes = req.body.filedes;

    const sqlQuery = "INSERT INTO block (category, name, time, ipfsHash, registrant, responsible, filetype, filedes) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    db.query(sqlQuery, [category, name, time, ipfsHash, registrant, responsible, filetype, filedes], (err, result)=>{
        res.send('success!');
    });
})

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});