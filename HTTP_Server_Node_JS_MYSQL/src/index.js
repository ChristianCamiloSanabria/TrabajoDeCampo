console.clear();
console.log("Hola mundo 4");
import path from "path";
import morgan from "morgan";
import mongoose from "mongoose";
import createExpressServer from "express";
import router  from "./routes/services.js";
import bodyParser from "body-parser";


//Se instancia el servidor para poder configurar
const expressApp = createExpressServer();
expressApp.use(bodyParser.urlencoded({
    extended: true
}));


expressApp.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

//connecting to db
/**mongoose.connect('mongodb://localhost/crud-mongo')
	.then(db=> console.log('Db connected'))
	.catch(err=> console.log('err'));
**/
//routes
expressApp.use('/',router);


//settings
expressApp.set('port', process.env.PORT || 4000);
expressApp.set('views', path.join('.', 'views'));
//app.set('view engine', 'ejs'); 



//middlewares
expressApp.use(morgan('dev'));
expressApp.use(createExpressServer.urlencoded({extended: false}));

expressApp.listen(expressApp.get('port'),()=>{
	console.log(`Server on port ${expressApp.get('port')}`); 
	expressApp.use(
		createExpressServer.urlencoded({
		    extended: true
		})
    );
});

expressApp.use(createExpressServer.json());
