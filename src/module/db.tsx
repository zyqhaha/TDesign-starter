
var mysql = require("mysql")
import Express from "express";

import cors from "cors";



var Poor = mysql.createPool({
	host: "127.0.0.1",
	user: "root",
	password: "gushiyujiu",
	database: "biyao",
	port: "3000"
})
export default Poor






