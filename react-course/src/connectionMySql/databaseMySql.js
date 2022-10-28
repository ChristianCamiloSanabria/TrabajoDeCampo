import mysql from "mysql";

const mysqlConnection = mysql.createConnection({
	host:'localhost',
	user: 'root',
	password: 'Chris_mysql88',
	database: 'coucoudb'
});

mysqlConnection.connect(function (err){
	if(err){
		console.log(err);
		return;
	}else{
		console.log('Db is connected');
	}
});

export default mysqlConnection;