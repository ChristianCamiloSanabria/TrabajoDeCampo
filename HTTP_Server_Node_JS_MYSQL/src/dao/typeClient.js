//CRUD - type_client
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los type_client registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getTypeClient(){
    console.log("Aqui estamos cambiando");
    const sript_MySql = 'select * from type_client';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_client');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_client:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un type_client en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addTypeClient(tc_id, tc_name){
    console.log("Aqui estamos addTypeClient");
    const sript_MySql = 'INSERT INTO type_client VALUES ('+ tc_id+",'"+ tc_name+"'"+')';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,{ok:'ok'},'Saved type_client','Informacion Tabla type_client');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_client:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo tc_id de la tabla type_client en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo tc_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxTc_id(){
    console.log("SELECT MAX(tc_id)+1 as max FROM type_client");
    const sript_MySql = 'SELECT MAX(tc_id)+1 as max FROM type_client';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_client');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_client:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un type_client en la base de Datos, y el tc_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addSimpleTypeClient(tc_name){
    console.log("Aqui estamos addSimpleTypeClient");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(tc_id)+1 as max FROM type_client', (err,row,fields)=>{
            if(!err){
                const sript_MySql = 'INSERT INTO type_client VALUES ('+ row[0].max +",'"+ tc_name+"'"+')';
                var respuesta ={};
                mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
                    if(!err){
                        console.log("Que No se puedo"+row);
                        respuesta = getSchemaRes(200,{ok:'ok'},'Saved type_client','Informacion Tabla type_client');
                    }else{
                        console.log(err);
                         respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_client:');
                    }
                     resolver(respuesta);///resolver() es la promesa asincrona
                });
            }else{
                console.log(err);
            }
        });  
    });
}


export const daoTypeClient = {
    getTypeClient,
    addTypeClient,
    addSimpleTypeClient,
    getMaxTc_id
};