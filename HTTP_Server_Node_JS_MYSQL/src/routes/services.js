 import express from "express";
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {daoShopsRoles} from "../dao/shopsRoles.js";
import {daoRoles} from "../dao/roles.js";
import {daoMeasures} from "../dao/measures.js";
import {daoTypeSupplies} from "../dao/typeSupplies.js";
import {daoTypeProducts} from "../dao/typeProducts.js";
import {daoTypeClient} from "../dao/typeClient.js";
import {daoUsers} from "../dao/users.js";


const router = express.Router();


// Adiciona un rol a la tabla roles de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
router.get("/add/rol/:name_rol", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoRoles.addSimpleRol(infoServicio.name_rol);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Adiciona un rol a la tabla roles de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
//Parametros por el body (name_rol)
router.post("/add/rol", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoRoles.addSimpleRol(infoServicio.name_rol);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de todos los roles de la base de datos.
router.get("/get/roles", async (req, res) => {
    try {
        const infoDao = await daoRoles.getRoles();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Actualiza un rol a la tabla roles de la BD por medio del id
//Parametros por el body (ro_id,ro_role)
router.post("/update/rol", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoRoles.update(infoServicio.ro_id,infoServicio.ro_role);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Elimina un rol a la tabla roles de la BD por medio del id
//Parametros por el body (ro_id)
router.post("/delete/rol", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoRoles.deleteRol(infoServicio.ro_id);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Adiciona una medida (measur) a la tabla measures de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
router.get("/add/measures/:me_name", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoMeasures.addSimpleMeasur(infoServicio.me_name);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de todos las medidas (measures) de la base de datos.
router.get("/get/measures", async (req, res) => {
    try {
        const infoDao = await daoMeasures.getMeasures();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Adiciona un type_supplies  a la tabla type_supplies de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
router.get("/add/typeSupplies/:ts_name/:ts_photo", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoTypeSupplies.addSimpleTypeSupplies(infoServicio.ts_name,infoServicio.ts_photo);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de todos los typeSupplies de la base de datos.
router.get("/get/typeSupplies", async (req, res) => {
    try {
        const infoDao = await daoTypeSupplies.getTypeSupplies();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Adiciona un type_supplies  a la tabla type_supplies de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
router.get("/add/typeProducts/:ts_name/:ts_photo", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoTypeProducts.addSimpleTypeProducts(infoServicio.ts_name,infoServicio.ts_photo);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de todos los typeProducts de la base de datos.
router.get("/get/typeProducts", async (req, res) => {
    try {
        const infoDao = await daoTypeProducts.getTypeProducts();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Adiciona una type Client (measur) a la tabla typeClient de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
router.get("/add/typeClient/:me_name", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoTypeClient.addSimpleTypeClient(infoServicio.me_name);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de todos las type Clients (typeClient) de la base de datos.
router.get("/get/typeClient", async (req, res) => {
    try {
        const infoDao = await daoTypeClient.getTypeClient();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los Usuarios de la base de datos.
router.get("/get/users", async (req, res) => {
    try {
        const infoDao = await daoUsers.getUsers();
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Adiciona un usuario a la tabla users de la BD sin necesidad de enviar el id
// El servicion auto incrementa el id automaticamente
//Parametros por el body (userName,password,name,lastNames,identify,gender,urlPhoto,dataTime)
router.post("/add/user", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoUsers.addSimpleUser(infoServicio.userName,infoServicio.password,infoServicio.name,infoServicio.lastNames,infoServicio.identify,infoServicio.gender,infoServicio.urlPhoto,infoServicio.dataTime);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Actualiza un usuario a la tabla users de la BD  enviar el id
// El servicion auto incrementa el id automaticamente
// Parametros por el body (us_id,userName,password,name,lastNames,identify,gender,urlPhoto,dataTime)
router.post("/update/user", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoUsers.updateUser(infoServicio.us_id,infoServicio.userName,infoServicio.password,infoServicio.name,infoServicio.lastNames,infoServicio.identify,infoServicio.gender,infoServicio.urlPhoto,infoServicio.dataTime);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

/** Elimina un usuario a la tabla users de la BD  enviando el id
** El servicion auto incrementa el id automaticamente
** Parametros por el body (us_id,userName,password,name,lastNames,identify,gender,urlPhoto,dataTime)
**/ 
router.post("/delete/user", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoUsers.deleteUser(infoServicio.us_id);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Activacion de un usuario en el sistema
// El servicio le asigna un codigo y un estado A, este metodo representa la tabla shops_roles
// Descripcion: Es la forma de estableser un rol a un usuario y darle una activacion dentro del sistema 
// Parametros: :sh_id/:us_id/:ro_id
router.post("/add/shops_user_rol", async (req, res) => {
    try {
        const infoServicio = req.body;
        const dataTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                console.log(dataTime);
        console.log("Aqui llegan los parametros" + infoServicio);
        const infoDao = await daoShopsRoles.addSimpleUserRolToShopsRoles(infoServicio.sh_id,infoServicio.us_id,infoServicio.ro_id,dataTime);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// 
router.get("/" , (req,res)=>{

   const sript_MySql = 'show tables';

	mysqlConnection.query(sript_MySql, (err,row,fields)=>{
		if(!err){
			res.json(row);
		}else{
			console.log(err);
            statusErr(res,err);
		}
	});
});


function statusErr(res,err){
    res.status(500).json({
        code: 500,
        message: 'error:' + err,
        details: 'error Servidor no disponible '
    });
}


//Crud User




// Adiciona un rol a la tabla roles de la BD
router.get("/add/rol/:id_rol/:name_rol", async (req, res) => {
    try {
        const infoServicio = req.params;
        console.log("Aqui llegan los parametros" + infoServicio);

        const infoDao = await daoRoles.addRol(infoServicio.id_rol,infoServicio.name_rol);
        console.log(JSON.stringify(infoDao));
        res.status(infoDao.status).json(infoDao.payload);
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});



// Obtiene la informacion basica de todas las tiendas de la base de datos.
// Retorna id, nombre, direccion y la url de la foto.
router.get("/get/shops/basicInfo", async (req, res) => {
    try {
        
        mysqlConnection.query('select sh_id, sh_name, sh_address, sh_photo from shops', (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla shops: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

// Obtiene la informacion de los perfiles activos en todas las tiendas de la base de datos.
// Retorna  nombre, password, status, # Tienda, Rol usuario.
router.get("/get/shops/infoRolUser", async (req, res) => {
    try {
        const sript_MySql = 'select a.us_username as "Name",a.us_password as "Password", b.sr_state as "Status", b.sh_id as "Tienda", c.ro_role as "Rol" from users a, shops_roles b, roles c where a.us_id = b.us_id and b.ro_id = c.ro_id';
        mysqlConnection.query(sript_MySql, (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla shops_roles: '
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los insumos de la base de datos en todas las Tiendas.
router.get("/get/supplies/show", async (req, res) => {
    try {
        const sript_MySql = 'select a.su_id, a.ts_id, a.su_code, a.su_name, a.su_description,b.ts_name from supplies a, type_supplies b where a.ts_id = b.ts_id';
        mysqlConnection.query(sript_MySql, (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla supplies o sus relaciones: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los productos de la base de datos en todas las Tiendas.
router.get("/get/products/show", async (req, res) => {
    try {
        const sript_MySql = 'select b.pr_id,a.tp_name, b.pr_code, b.pr_name, b.pr_net_weight, c.me_name, b.pr_iva, b.pr_photo from type_products a, products b, measures c where a.tp_id = b.tp_id and b.me_id = c.me_id';
        mysqlConnection.query(sript_MySql, (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla products o sus relaciones: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los usuarios de la base de datos en todas las Tiendas.
router.get("/get/users/shops", async (req, res) => {
    try {
        const sript_MySql = 'select a.us_username, a.us_password, a.us_name, a.us_lastname, a.us_identification, b.sr_state, c.ro_role  from users a, shops_roles b, roles c where a.us_id = b.us_id and b.ro_id = c.ro_id';
        mysqlConnection.query(sript_MySql, (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla Users: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los productos de la base de datos.
router.get("/get/products", async (req, res) => {
    try {
        
        mysqlConnection.query('select * from products', (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla products: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


// Obtiene la informacion de todos los productos de la base de datos.
router.get("/get/supplies", async (req, res) => {
    try {
        
        mysqlConnection.query('select * from supplies', (err,row,fields)=>{
            if(!err){
                console.log(row);
                 res.status(200).json(row);
            }else{
                console.log(err);
                 res.status(409).json({
                            code: 409,
                            message: '->'+err,
                            details: 'Problema con la BD Tabla supplies: ' + JSON.stringify(infoServicio)
                        });
            }
        });       
    } catch (err) {
        console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});






/**
INSERT INTO type_products VALUES (tp_id,'tp_name','tp_photo');
INSERT INTO measures VALUES (me_id, 'me_name');
INSERT INTO measures VALUES (pr_id,tp_id,'pr_code','pr_name',pr_net_weight,me_id,pr_iva,'pr_photo');
**/


/**
 ** POST "/post/users"
 ** Servicio de insertar a la DB un usuario. Los parametros los recibe por el body
 **/

router.post("/post/users", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + JSON.stringify(infoServicio));
        
        mysqlConnection.query('SELECT MAX(us_id)+1 as max FROM users', (err,row,fields)=>{
            if(!err){
                console.log(row[0].max);
                
                const dataTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                console.log(dataTime);
                //userName,password,name,lastNames,identify,dataTime
                const sript_MySql = 'INSERT INTO users VALUES ('+row[0].max+",'"+ infoServicio.userName+"','"+ infoServicio.password+ "','" + infoServicio.name +"','"+ infoServicio.lastNames+"',"+infoServicio.identify+",'A'"+",'urlImg','" + dataTime + "'" + ')';
                mysqlConnection.query(sript_MySql, (err,row,fields)=>{
                    if(!err){
                        console.log(row);
                        res.status(200).json({
                            code: 200,
                            message: 'Saved User',
                            details: 'User registrado: ' + JSON.stringify(infoServicio)
                        });
                    }else{
                        console.log(err);
                       statusErr(res,err);
                    }
                });
            }else{
                console.log(err);
                statusErr(res,err);
            }
        });       


    } catch (err) {
         console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


/**
 ** POST "/post/supplies"
 ** Servicio de insertar a la DB un supplies. Los parametros los recibe por el body
 **/
///Este servicio fue arreglado para la insercion del me_id que faltaba en la base de datos.
router.post("/post/supplies", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + JSON.stringify(infoServicio));
        
        mysqlConnection.query('SELECT MAX(su_id)+1 as max FROM supplies', (err,row,fields)=>{
            if(!err){
                console.log(row[0].max);
                
                const dataTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                console.log(dataTime);
                //sr_id, sh_id, us_id, ro_id
                //INSERT INTO supplies VALUES (su_id,ts_id,su_code,'su_name',me_id,'su_description','su_photo');

                const sript_MySql = 'INSERT INTO supplies VALUES ('+row[0].max+","+ infoServicio.ts_id+",'"+ infoServicio.su_code+ "','" + infoServicio.su_name+"',"+ infoServicio.me_id +",'"+ infoServicio.su_description+"','"+infoServicio.su_photo+" ')";
                mysqlConnection.query(sript_MySql, (err,row,fields)=>{
                    if(!err){
                        console.log(row);
                        res.status(200).json({
                            code: 200,
                            message: 'Saved Insumo',
                            details: 'Insumo registrado: ' + JSON.stringify(infoServicio)
                        });
                    }else{
                        console.log(err);
                       statusErr(res,err);
                    }
                });
            }else{
                console.log(err);
                statusErr(res,err);
            }
        });       


    } catch (err) {
         console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});

/**
 ** POST "/post/products"
 ** Servicio de insertar a la DB un products. Los parametros los recibe por el body
 **/

router.post("/post/products", async (req, res) => {
    try {
        const infoServicio = req.body;
        console.log("Aqui llegan los parametros" + JSON.stringify(infoServicio));
        
        mysqlConnection.query('SELECT MAX(pr_id)+1 as max FROM products', (err,row,fields)=>{
            if(!err){
                console.log(row[0].max);
                
                const dataTime = new Date().toISOString().slice(0, 19).replace('T', ' ');
                console.log(dataTime);
                //pr_id,tp_id,pr_code,pr_name,pr_net_weight,me_id,pr_iva,pr_photo
                //INSERT INTO products VALUES (pr_id,tp_id,pr_code,pr_name,pr_net_weight,me_id,pr_iva,pr_photo);

                const sript_MySql = 'INSERT INTO products VALUES ('+row[0].max+","+ infoServicio.tp_id+","+ infoServicio.pr_code+ ",'" + infoServicio.pr_name +"',"+ infoServicio.pr_net_weight+","+infoServicio.me_id+","+infoServicio.pr_iva+",'"+infoServicio.pr_photo+"')";
                mysqlConnection.query(sript_MySql, (err,row,fields)=>{
                    if(!err){
                        console.log(row);
                        res.status(200).json({
                            code: 200,
                            message: 'Saved Producto',
                            details: 'Producto registrado: ' + JSON.stringify(infoServicio)
                        });
                    }else{
                        console.log(err);
                       statusErr(res,err);
                    }
                });
            }else{
                console.log(err);
                statusErr(res,err);
            }
        });       


    } catch (err) {
         console.error(err); //mostramos el error por consola para poder solucionar futuros errores
        statusErr(res,err);
    }
});


export default router;