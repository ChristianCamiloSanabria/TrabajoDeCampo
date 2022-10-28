//CRUD - type_products
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los type_products registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getTypeProducts(){
    console.log("Aqui estamos cambiando");
    const sript_MySql = 'select * from type_products';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_products');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_products:');
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
function addTypeProducts(tp_id, tp_name,tp_photo){
    console.log("Aqui estamos addTypeProducts");
    const sript_MySql = 'INSERT INTO type_products VALUES ('+ tp_id+",'"+ tp_name+"','"+tp_photo+"'"+')';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,{ok:'ok'},'Saved Rol','Informacion Tabla type_products');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_products:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo tp_id de la tabla type_products en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo tp_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxTp_id(){
    console.log("SELECT MAX(tp_id)+1 as max FROM type_products");
    const sript_MySql = 'SELECT MAX(tp_id)+1 as max FROM type_products';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla type_products');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_products:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Crea un TypeProduct en la base de Datos, y el tp_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function addSimpleTypeProducts(tp_name,tp_photo){
    console.log("Aqui estamos addSimpleTypeProducts");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(tp_id)+1 as max FROM type_products', (err,row,fields)=>{
            if(!err){
                const sript_MySql = 'INSERT INTO type_products VALUES ('+ row[0].max +",'"+ tp_name+"','"+tp_photo+"'"+')';
                var respuesta ={};
                mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
                    if(!err){
                        console.log("Que No se puedo"+row);
                        respuesta = getSchemaRes(200,{ok:'ok'},'Saved TypeProduct','Informacion Tabla type_products');
                    }else{
                        console.log(err);
                         respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla type_products:');
                    }
                     resolver(respuesta);///resolver() es la promesa asincrona
                });
            }else{
                console.log(err);
            }
        });  
    });
}


export const daoTypeProducts = {
    getTypeProducts,
    addTypeProducts,
    addSimpleTypeProducts,
    getMaxTp_id
};