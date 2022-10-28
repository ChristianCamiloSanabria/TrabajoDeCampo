//CRUD - measures
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los measures registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMeasures(){
    console.log("Aqui estamos cambiando");
    const sript_MySql = 'select * from measures';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla measures');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla measures:');
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
function addMeasur(me_id, me_name){
    console.log("Aqui estamos addMeasur");
    const sript_MySql = 'INSERT INTO measures VALUES ('+ me_id+",'"+ me_name+"'"+')';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,{ok:'ok'},'Saved Rol','Informacion Tabla measures');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla measures:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo me_id de la tabla measures en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo me_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxMe_id(){
    console.log("SELECT MAX(me_id)+1 as max FROM measures");
    const sript_MySql = 'SELECT MAX(me_id)+1 as max FROM measures';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla measures');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla measures:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un rol en la base de Datos, y el me_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addSimpleMeasur(me_name){
    console.log("Aqui estamos addSimpleMeasur");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(me_id)+1 as max FROM measures', (err,row,fields)=>{
            if(!err){
                const sript_MySql = 'INSERT INTO measures VALUES ('+ row[0].max +",'"+ me_name+"'"+')';
                var respuesta ={};
                mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
                    if(!err){
                        console.log("Que No se puedo"+row);
                        respuesta = getSchemaRes(200,{ok:'ok'},'Saved Rol','Informacion Tabla measures');
                    }else{
                        console.log(err);
                         respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla measures:');
                    }
                     resolver(respuesta);///resolver() es la promesa asincrona
                });
            }else{
                console.log(err);
            }
        });  
    });
}


export const daoMeasures = {
    getMeasures,
    addMeasur,
    addSimpleMeasur,
    getMaxMe_id
};