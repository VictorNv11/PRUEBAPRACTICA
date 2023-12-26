CREATE DATABASE clientesBD;

CREATE TABLE cliente_tbl(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(80),
    apellido VARCHAR(30),
    fecha_nacimiento DATE,
    Identificacion BIGINT,
    ciudad VARCHAR(200),
    email VARCHAR(70),
    telefono BIGINT,
    ocupacion VARCHAR(100)
);
