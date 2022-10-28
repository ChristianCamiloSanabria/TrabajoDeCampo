//CRUD - Users
import mysqlConnection from "../connectionMySql/databaseMySql.js";
import {getSchemaRes} from "../schema/schemaRes.js";

/**
** Descripcion:     Obtiene los usuarios registrados en la base de Datos
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getShopsRoles(){
    console.log("Aqui estamos getShopsRoles");
    const sript_MySql = 'select a.us_username, a.us_password, a.us_name, a.us_lastname, a.sr_identification, b.sr_state, c.ro_role  from users a, shops_roles b, roles c where a.sr_id = b.sr_id and b.ro_id = c.ro_id';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion de la relacion entre users a, shops_roles b, roles c');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD de la relacion entre users a, shops_roles b, roles c:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}


/**
** Descripcion:     Obtiene el maximo sr_id de la tabla shops_roles en la base de Datos.
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** Retona:          Un numero, el maximo sr_id y le suma (una Unidad) 1.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function getMaxSr_id(){
    console.log("SELECT MAX(sr_id)+1 as max FROM shops_roles");
    const sript_MySql = 'SELECT MAX(sr_id)+1 as max FROM shops_roles';
    return new Promise((resolver,reject) =>{
        var respuesta ={};
        mysqlConnection.query(sript_MySql , async (err,row,fields)=>{
            if(!err){
                console.log(row);
                respuesta = getSchemaRes(200,row,'200','Informacion Tabla shops_roles');
            }else{
                console.log(err);
                 respuesta = getSchemaRes(409,err,'->'+err,'Problema con la BD Tabla shops_roles:');
            }
             resolver(respuesta);///resolver() es la promesa asincrona
        });
    });
}

/**
** Descripcion:     Asigna un Rol en la tienda a un Usuario en la base de Datos, y el sr_id esta automatizado
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
** Parametros:      sh_id, us_id, ro_id, dataTime
**/
function addSimpleUserRolToShopsRoles(sh_id,us_id,ro_id,dataTime){
    console.log("Aqui estamos addSimpleUserRolToShopsRoles");
    return new Promise((resolver,reject) =>{
        mysqlConnection.query('SELECT MAX(sr_id)+1 as max FROM shops_roles', (err,row,fields)=>{
            if(!err){
                //sr_id, sh_id, us_id, ro_id
                //INSERT INTO shops_roles VALUES (200,1,100,2,'202011002','A','2022-5-29 07:45:00');
                const sript_MySql = 'INSERT INTO shops_roles VALUES ('+row[0].max+","+ sh_id+","+ us_id+ "," + ro_id +",'"+ sh_id + us_id + ro_id +"'"+",'A'"+",'" + dataTime + "'" + ')';
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
** Descripcion:     Actualiza los users registrados en la base de Datos por medio del sr_id
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
//sr_id, us_username, us_password, us_name, us_lastname , sr_identification , us_gender , us_photo , us_created
function updateUser(sr_id,userName,password,name,lastNames,identify,gender,urlPhoto,dataTime){
    console.log("Aqui estamos updateUser");
    const sript_MySql = "UPDATE users SET us_username = '"+userName+"', us_password = '"+password+"', us_name = '"+name+"', us_lastname = '"+lastNames+"', sr_identification = '"+identify+"', sr_identification = '"+identify+"', us_gender = '"+gender+"', us_photo = '"+urlPhoto+"', us_created = '"+dataTime+"' WHERE  sr_id ="+sr_id;
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
** Descripcion:     Elimina los Users registrados en la base de Datos por medio del sr_id
** Retona:          Un arreglo con formato getSchemaRes(), esta funcion recibe parametros para 
                    armar el objeto Json de respuesta.
** La validacion:   Los errores simplemente se hace con las promesas de la conexion mysqlConnection.
**/
function deleteUser(sr_id){
    console.log("Aqui estamos deleteUser");
    const sript_MySql = "DELETE FROM users WHERE  sr_id ="+sr_id;
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

export const daoShopsRoles = {
    getShopsRoles,
    addSimpleUserRolToShopsRoles,
    getMaxSr_id,
    updateUser,
    deleteUser
};