--Creacion de insert empleado:
--Creado por:
--Fecha de creacion:
--Modificado por:
--Fecha de modificacion:
--Observación:

--Para elimnar una base de datos:
DROP DATABASE coucoudb;

--Para crear una base de datos:
CREATE DATABASE coucoudb;

--Para saber las columnas de una tabla
SHOW COLUMNS FROM YOUR_TABLE;

ALTER TABLE supplies ADD CONSTRAINT me_id FOREIGN KEY (id_trabajo) REFERENCES trabajo(id_trabajo);

ALTER TABLE DEPARTAMENTO ADD(
CONSTRAINT dep_pk_id_departamento PRIMARY KEY (id_departamento),
CONSTRAINT dep_fk_id_supervisor FOREIGN KEY (id_supervisor) REFERENCES empleado(id_empleado),
CONSTRAINT dep_fk_id_ubicacion FOREIGN KEY (id_ubicacion) REFERENCES ubicacion(id_ubicacion)
);


ALTER TABLE supplies ADD(
CONSTRAINT dep_fk_id_measures FOREIGN KEY (me_id) REFERENCES measures(me_id)
);


--Los insert:
--Tabla Roles:
INSERT INTO roles VALUES (2000,'Administrador');
INSERT INTO roles VALUES (2001,'Cajero');
INSERT INTO roles VALUES (2002,'Cocinero');
INSERT INTO roles VALUES (2003,'Mesero');
--Tabla Locations:
INSERT INTO locations VALUES (5000,'CouCou sede principal','T',NULL);
--Tabla Shops:
INSERT INTO shops VALUES (1,5000,'1099207158.6','CouCou Tienda Organica','km 13 LAS FLORES CIMITARRA LANDAZURI','coucou.tiendaorganica@gmail.com','3158484923',12,12,'URL','2022-5-29 07:45:00');
--Tabla Users:
INSERT INTO users VALUES (100,'Edith Cristiana Diaz Cepeda','12345','Edith Cristiana','Diaz Cepeda',1099207158,'A','URL','2022-5-29 07:45:00');
INSERT INTO users VALUES (101,'Felipe88','12345','Juan Felipe','Contreras Corzo',1095407158,'A','URL','2022-5-29 07:45:00');
INSERT INTO users VALUES (102,'Camila77','12345','Maria Camila','Yanquen Torres',1095234158,'A','URL','2022-5-29 07:45:00');
INSERT INTO users VALUES (103,'Julian90','12345','Julian Felipe','Santos Quintero',1095434458,'A','URL','2022-5-29 07:45:00');
--Tabla Shops_roles:
--sr_id, sh_id, us_id, ro_id, sr_code=(--sr_id + sh_id + us_id + ro_id):
INSERT INTO shops_roles VALUES (200,1,100,2000,'202011002000','A','2022-5-29 07:45:00');
INSERT INTO shops_roles VALUES (201,1,101,2003,'202011012003','A','2022-5-29 07:45:00');
--Tabla Type_products:
--tp_id,'tp_name','tp_photo':
INSERT INTO type_products VALUES (1,'Limonadas','url');
INSERT INTO type_products VALUES (2,'Postres','url');
INSERT INTO type_products VALUES (3,'Bebidas','url');
INSERT INTO type_products VALUES (4,'Pasteles','url');
INSERT INTO type_products VALUES (5,'Gaseosas','url');
--Tabla type_supplies:
--ts_id,'ts_name','ts_photo':
INSERT INTO type_supplies VALUES (1,'Jabones','url');
INSERT INTO type_supplies VALUES (2,'Dulceria','url');
INSERT INTO type_supplies VALUES (3,'Coco','url');
INSERT INTO type_supplies VALUES (4,'Loza','url');
INSERT INTO type_supplies VALUES (5,'Decoraciones','url');
--Tabla measures:
--me_id,'me_name':
INSERT INTO measures VALUES (1,'50 gr');
INSERT INTO measures VALUES (2,'100 gr');
INSERT INTO measures VALUES (3,'200 gr');
INSERT INTO measures VALUES (4,'300 gr');
INSERT INTO measures VALUES (5,'400 gr');
INSERT INTO measures VALUES (6,'500 gr');
INSERT INTO measures VALUES (7,'1 lb');
INSERT INTO measures VALUES (8,'2 lb');
INSERT INTO measures VALUES (9,'3 lb');
INSERT INTO measures VALUES (10,'4 lb');
INSERT INTO measures VALUES (11,'5 lb');
INSERT INTO measures VALUES (12,'6 lb');
INSERT INTO measures VALUES (13,'1 litros');
INSERT INTO measures VALUES (14,'2 litros');
INSERT INTO measures VALUES (15,'4 litros');
INSERT INTO measures VALUES (16,'250 ml');
INSERT INTO measures VALUES (17,'350 ml');
INSERT INTO measures VALUES (18,'400 ml');
INSERT INTO measures VALUES (19,'1000 ml');
INSERT INTO measures VALUES (20,'6000 ml');
--Tabla Supplies:
--su_id,ts_id,'su_code','su_name',me_id,'su_description','su_photo':
INSERT INTO supplies VALUES (1,1,'23541','Ariel',10,'Para las prendas de la dotacion','su_photo');
INSERT INTO supplies VALUES (2,1,'23541','Fab',10,'Para las prendas de la dotacion','su_photo');
INSERT INTO supplies VALUES (3,1,'23541','Limpido',14,'Para los pisos de la tienda','su_photo');
--Tabla shops_supplies:
--ss_id,sh_id,su_id,ss_value,ss_stock,ss_created:
INSERT INTO shops_supplies VALUES (1000,1,1,4500,7,'A','2022-5-29 07:45:00');
INSERT INTO shops_supplies VALUES (1001,1,2,3550,12,'A','2022-5-29 07:45:00');
INSERT INTO shops_supplies VALUES (1002,1,3,2950,23,'A','2022-5-29 07:45:00');
--Tabla products:
--pr_id,tp_id,'pr_code','pr_name',pr_net_weight,me_id,pr_iva,'pr_photo':
INSERT INTO products VALUES (1,5,'897621','Colombiana',100,17,16.0,'pr_photo');
INSERT INTO products VALUES (2,5,'897621','SevenUp',100,17,16.0,'pr_photo');
INSERT INTO products VALUES (3,5,'897621','Manzana',100,17,16.0,'pr_photo');
--Tabla shops_products:
--sp_id,sh_id,pr_id,sp_value_client,sp_value_distributor,sp_stock,sp_created:
INSERT INTO shops_products VALUES (2000,1,1,2950,2500,15,'A','2022-5-29 07:45:00');
INSERT INTO shops_products VALUES (2001,1,2,2950,2500,10,'A','2022-5-29 07:45:00');
INSERT INTO shops_products VALUES (2002,1,3,2950,2500,23,'A','2022-5-29 07:45:00');
--Tabla shops_roles:
--sr_id,sh_id,us_id,ro_id,sr_code,sr_state,sr_created:
INSERT INTO shops_roles VALUES (6000,1,101,2001,'20221101','A','2022-5-29 07:45:00');
INSERT INTO shops_roles VALUES (6001,1,102,2002,'20221102','A','2022-5-29 07:45:00');
INSERT INTO shops_roles VALUES (6002,1,103,2003,'20221103','A','2022-5-29 07:45:00');
--Tabla orden_cards:
--oc_id,us_id,table,oc_state,oc_created:
INSERT INTO orden_cards VALUES (7000,101,2,'A','2022-5-29 07:45:00');
INSERT INTO orden_cards VALUES (7001,101,6,'A','2022-5-29 07:45:00');
INSERT INTO orden_cards VALUES (7002,101,11,'A','2022-5-29 07:45:00');
--Tabla ordens:
--or_id,oc_id,sp_id,or_stock:
INSERT INTO ordens VALUES (1,7000,2000,3);
INSERT INTO ordens VALUES (2,7000,2001,2);
INSERT INTO ordens VALUES (3,7000,2002,4);




INSERT INTO empleado VALUES (7000, null, 3001, 'Camilo', 'Perez', 7000,'tianchris@gmail.com', 123, '2000-10-10', 4000000,1000);
INSERT INTO empleado VALUES (7001, null, 3001, 'Andrea', 'Camargo', 7000, 'tianchris@gmail.com',456, '2014-09-05', 2500000, 1000);
INSERT INTO empleado VALUES (7002, null, 3002, 'Sandra', 'Gil', 7001, 'tianchris@gmail.com',789, '1999-01-25', 5000000, 1000);
INSERT INTO empleado VALUES (7003, 4003, 3003, 'Sebastian', 'Rodriguez', 7001, 'tianchris@gmail.com',101, '2007-03-10', 2800000, 1000);
INSERT INTO empleado VALUES (7004, 4002, 3004, 'Pedro', 'Pachon', 7002, 'tianchris@gmail.com',112, '2010-06-24', 2100000, 1000);
INSERT INTO empleado VALUES (7005, null, 3001, 'Juan', 'Torres', 7004, 'tianchris@gmail.com',131, '2015-09-27', 5200000, 1000);
INSERT INTO empleado VALUES (7006, 4001, 3005, 'David', 'Florez', 7002, 'tianchris@gmail.com',415, '2011-08-05', 3500000, 1000);
INSERT INTO empleado VALUES (7007, 4004, 3006, 'Monica', 'Cifuentes', 7000, 'tianchris@gmail.com',612, '2009-03-06', 3150000, 1000);
INSERT INTO empleado VALUES (7008, 4005, 3001, 'sofia', 'Figueroa', 7005, 'tianchris@gmail.com',542, '2018-05-01', 1950000, 1000);
INSERT INTO empleado VALUES (7009, 4006, 3007, 'Maria', 'Sanchez', 7000, 'tianchris@gmail.com',684, '2017-01-23', 3200000, 1000);

INSERT INTO roles VALUES (1000,'Administrador');
INSERT INTO roles VALUES (1000,'Administrador');


INSERT INTO locations VALUES (1,'CouCou sede principal','T',NULL);

INSERT INTO shops VALUES (1,1,'1099207158.6','CouCou Tienda Organica','km 13 LAS FLORES CIMITARRA LANDAZURI','coucou.tiendaorganica@gmail.com','3158484923',12,12,'URL','2022-5-29 07:45:00');

INSERT INTO users VALUES (100,'Edith Cristiana Diaz Cepeda','12345','Edith Cristiana','Diaz Cepeda',1099207158,'A','URL','2022-5-29 07:45:00');
--sr_id, sh_id, us_id, ro_id
INSERT INTO shops_roles VALUES (200,1,100,2,'202011002','A','2022-5-29 07:45:00');

SELECT MAX(ro_id)+1 as resultado FROM roles;

select sh_id, sh_name, sh_address, sh_photo from shops;

//Para insertar un producto
INSERT INTO type_products VALUES (tp_id,'tp_name','tp_photo');
INSERT INTO measures VALUES (me_id, 'me_name');
INSERT INTO measures VALUES (pr_id,tp_id,'pr_code','pr_name',pr_net_weight,me_id,pr_iva,'pr_photo');

select a.us_username as "Name",a.us_password as "Password", b.sr_state as "Status", b.sh_id as "Tienda", c.ro_role as "Rol"
from users a, shops_roles b, roles c
where a.us_id = b.us_id and b.ro_id = c.ro_id;


UPDATE users 
SET us_name = 'Edith Cristina' 
WHERE  us_id = 100;

UPDATE users 
SET us_username = 'cristina42' 
WHERE  us_id = 100;

UPDATE supplies 
SET su_description = 'Es el Jabon para la cocina' 
WHERE  su_id = 1;

select a.su_id, a.ts_id, a.su_code, a.su_name, a.su_description,b.ts_name
from supplies a, type_supplies b
where a.ts_id = b.ts_id;

pr_id,tp_id,pr_code,pr_name,pr_net_weight,me_id,pr_iva,pr_photo

select b.pr_id,a.tp_name, b.pr_code, b.pr_name, b.pr_net_weight, c.me_name, b.pr_iva, b.pr_photo
from type_products a, products b, measures c 
where a.tp_id = b.tp_id and b.me_id = c.me_id;
