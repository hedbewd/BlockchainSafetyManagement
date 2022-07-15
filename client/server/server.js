const express = require(`express`);
const bodyParser = require(`body-parser`);
const fs = require(`fs`);
const mysql = require(`mysql`);

const app = express();
const port = process.env.PORT || 4000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//데이터베이스 접근을 위한 아이디/비밀번호/호스트 주소 등(깃허브에 안올라가게 하도록 따로 저장해야 함)
const data = fs.readFileSync(`./database.json`); 
const conf = JSON.parse(data);
const connection = mysql.createConnection({
	host: conf.host,
	user: conf.user,
	password: conf.password,
	port: conf.port,
	database: conf.database
});
connection.connect();		//데이터베이스 연결

//read를 위한 API
app.get(`/api/customers`, (req, res) => {
	connection.query(
		"SELECT * FROM CUSTOMER WHERE isDeleted = 0",
		(err, rows, fields) => res.send(rows)
	);
});