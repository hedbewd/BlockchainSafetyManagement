const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const { urlencoded } = require('body-parser');
const PORT = process.env.port || 3001;

const util = require('util');

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

app.get('/login', (req, res) => {
	// 임시로 값을 넣어 주었다.
    res.send({data: 'data'})
});

 
app.post('/onLogin', (req, res) => {
    console.log(`= = = > req : ${util.inspect(req)}`)
   	// user_id, user_pw 변수로 선언
    const user_id = req.query.user_id
    const user_pw = req.query.user_pw
    // 입력된 id 와 동일한 id 가 mysql 에 있는 지 확인
    const sql1 = 'SELECT COUNT(*) AS result FROM user_info WHERE id = ?'
    db.query(sql1, user_id, (err, data) => {
        if(!err) {
        	// 결과값이 1보다 작다면(동일한 id 가 없다면)
            if(data[0].result < 1) {
                res.send({ 'msg': '입력하신 id 가 일치하지 않습니다.'})
            } else { // 동일한 id 가 있으면 비밀번호 일치 확인
                const sql2 = `SELECT 
                                CASE (SELECT COUNT(*) FROM user_info WHERE id = ? AND pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT id FROM user_info WHERE id = ? AND pw = ?)
                                END AS userId
                                , CASE (SELECT COUNT(*) FROM user_info WHERE id = ? AND pw = ?)
                                    WHEN '0' THEN NULL
                                    ELSE (SELECT pw FROM user_info WHERE id = ? AND pw = ?)
                                END AS userPw`;
                // sql 란에 필요한 parameter 값을 순서대로 기재
                const params = [user_id, user_pw, user_id, user_pw, user_id, user_pw, user_id, user_pw]
                db.query(sql2, params, (err, data) => {
                    if(!err) {
                        res.send(data[0])
                    } else {
                        res.send(err)
                    }
                })
            }
        } else {
            res.send(err)
        }
    })
});

app.listen(PORT, ()=>{
    console.log(`running on port ${PORT}`);
});