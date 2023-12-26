import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

export default function Admin() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  const loadClientes = async () => {
    try {
      const res = await fetch('http://localhost:4600/clientes');
      const data = await res.json();
      setClientes(data);
    } catch (error) {
      console.error('Error al cargar clientes:', error.message);
    }
  };

  useEffect(() => {
    loadClientes();
  }, []);


  
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:4600/clientes/${id}`);
      console.log(response);
      alert('Cliente eliminado con exito');

    } catch (error) {
      console.error('Error en la solicitud DELETE:', error.message);
      // Puedes manejar errores de red u otros errores aquí
    }
    // Actualiza los clientes y solo nos muestra los que no se han eliminado
    setClientes(clientes.filter((cliente) => cliente.id !== id));

  };

  return (
    <>
      <h1 style={{textAlign:'center', padding:'40px', fontFamily:'Times new Roman'}}>Admin</h1>
      <div> 
      <button className="btn btn-danger" style={{ marginLeft: '110rem' }} type="button" >
        <Link to="/FormClientes" className="nav-link" style={{color:'white'}}>
          Nuevo Cliente
        </Link> 
      </button>
      </div>
      {clientes.map((cliente) => (
        <div key={cliente.id} className="card container" style={{ marginBottom: '0.8rem', backgroundColor: 'aliceblue' }}>
          <div className="card-body" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <br />
            {cliente.nombre}
            <br />
            {cliente.apellido}
            <br />
            {cliente.fecha_nacimiento}
            <br />
            {cliente.identificacion}
            <br />
            {cliente.ciudad}
            <br />
            {cliente.email}
            <br />
            {cliente.telefono}
            <br />
            {cliente.ocupacion}
            <br />
            <div className="d-grid gap-3 d-md-block">             
              <button className="btn btn-primary" type="button" onClick={() => navigate(`/clientes/${cliente.id}/edit`)}>
                Editar
              </button>
              <button className="btn btn-success" style={{marginLeft:'1rem'}} type="button" onClick={()=> console.log("activo o inactivo ")} >
                activo
              </button>
              <button className="btn btn-danger" style={{ marginLeft: '1rem' }} type="button" onClick={() => handleDelete(cliente.id)}>
                Eliminar
              </button>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
