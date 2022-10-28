//Esquema de formato de respuesta como puente de comunicacion entre la base de datos y el controllador
//Simplemente arma el objeto para ahorar en escritura de codigo

export function getSchemaRes( status,payload,message,details){
	 const respuesta = {
                    status:status,
                    payload:payload,
                    message: message,
                    details: details
                };
	return respuesta;
}