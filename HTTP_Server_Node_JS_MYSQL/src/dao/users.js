//CRUD - Users
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los usuarios registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getUsers(){
    console.log("Aqui estamos getUsers");
    const sript_MySql = 'select * from users';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla Users');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla Users:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo us_id de la tabla users en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo us_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxUs_id(){
    console.log("SELECT MAX(us_id)+1 as max FROM users");
    const sript_MySql = 'SELECT MAX(us_id)+1 as max FROM users';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla users');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla users:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un Usuario en la base de Datos, y el us_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addSimpleUser(userName,password,name,lastNames,identify,gender,urlPhoto,dataTime){
    console.log("Aqui estamos addSimpleUser");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(us_id)+1 as max FROM users', (err,row,fields)=>{
            if(!err){
                const sript_MySql = 'INSERT INTO users VALUES ('+row[0].max+",'"+ userName+"','"+ password+ "','" + name +"','"+ lastNames+"',"+identify+",'"+gender+"'"+",'"+urlPhoto+"','" + dataTime + "'" + ')';
                var respuesta ={};
                mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
                    if(!err){
                        console.log("Que No se puedo"+row);
                        respuesta = getSchemaRes(200,{ok:'ok'},'Saved User','Informacion Tabla Users');
                    }else{
                        console.log(err);
                         respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla Users:');
                    }
                     resolver(respuesta);///resolver() es la promesa asincrona
                });
            }else{
                console.log(err);
            }
        });  
    });
}


/**
** Descripcion:     Actualiza los users registrados en la base de Datos por medio del us_id
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
//us_id, us_username, us_password, us_name, us_lastname , us_identification , us_gender , us_photo , us_created
function updateUser(us_id,userName,password,name,lastNames,identify,gender,urlPhoto,dataTime){
    console.log("Aqui estamos updateUser");
    const sript_MySql = "UPDATE users SET us_username = '"+userName+"', us_password = '"+password+"', us_name = '"+name+"', us_lastname = '"+lastNames+"', us_identification = '"+identify+"', us_identification = '"+identify+"', us_gender = '"+gender+"', us_photo = '"+urlPhoto+"', us_created = '"+dataTime+"' WHERE  us_id ="+us_id;
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla users');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla users:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Elimina los Users registrados en la base de Datos por medio del us_id
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function deleteUser(us_id){
    console.log("Aqui estamos deleteUser");
    const sript_MySql = "DELETE FROM users WHERE  us_id ="+us_id;
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla Users');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla Users:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

export const daoUsers = {
    getUsers,
    addSimpleUser,
    getMaxUs_id,
    updateUser,
    deleteUser
};