//CRUD - type_supplies
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los type_supplies registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getTypeSupplies(){
    console.log("Aqui estamos cambiando");
    const sript_MySql = 'select * from type_supplies';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_supplies');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_supplies:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un rol en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addTypeSupplies(ts_id, ts_name,ts_photo){
    console.log("Aqui estamos addTypeSupplies");
    const sript_MySql = 'INSERT INTO type_supplies VALUES ('+ ts_id+",'"+ ts_name+"','"+ts_photo+"'"+')';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,{ok:'ok'},'Saved Rol','Informacion Tabla type_supplies');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_supplies:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo ts_id de la tabla type_supplies en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo ts_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxTs_id(){
    console.log("SELECT MAX(ts_id)+1 as max FROM type_supplies");
    const sript_MySql = 'SELECT MAX(ts_id)+1 as max FROM type_supplies';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_supplies');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_supplies:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un rol en la base de Datos, y el ts_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addSimpleTypeSupplies(ts_name,ts_photo){
    console.log("Aqui estamos addSimpleTypeSupplies");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(ts_id)+1 as max FROM type_supplies', (err,row,fields)=>{
            if(!err){
                const sript_MySql = 'INSERT INTO type_supplies VALUES ('+ row[0].max +",'"+ ts_name+"','"+ts_photo+"'"+')';
                var respuesta ={};
                mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
                    if(!err){
                        console.log("Que No se puedo"+row);
                        respuesta = getSchemaRes(200,{ok:'ok'},'Saved Rol','Informacion Tabla type_supplies');
                    }else{
                        console.log(err);
                         respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_supplies:');
                    }
                     resolver(respuesta);///resolver() es la promesa asincrona
                });
            }else{
                console.log(err);
            }
        });  
    });
}


export const daoTypeSupplies = {
    getTypeSupplies,
    addTypeSupplies,
    addSimpleTypeSupplies,
    getMaxTs_id
};