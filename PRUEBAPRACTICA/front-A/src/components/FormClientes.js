import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function FormClientes() {
  
  const [cliente, setCliente] = useState({
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    identificacion: '',
    ciudad: '',
    email: '',
    telefono: '',
    ocupacion: '',
  });
  const params = useParams();
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const url = "http://localhost:4600/cliente";
      const body = JSON.stringify(cliente);
      const config = { headers: { 'Content-Type': 'application/json' } };
  
      const response = await axios.post(url, body, config);
  
      if (response.status === 200) {
        console.log("Respuesta del servidor:", response.data);
        alert('La información se ha enviado correctamente');
          // Deja los campos vacíos después de enviar correctamente
      setCliente({
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        identificacion: '',
        ciudad: '',
        email: '',
        telefono: '',
        ocupacion: '',
      })
      } else {
        console.error("Error en la respuesta del servidor:", response.status, response.statusText);
        alert('Error al enviar la información al servidor');
      }
    } catch (error) {
      console.error("Error al enviar la información:", error.message);
      alert('No se recibió respuesta del servidor. Intentelo  mas tarde');
  
      alert('No se ha enviado la información');
  };
}
 
  const handleChange = e => {
    setCliente(prevCliente => {
      const updatedCliente = { ...prevCliente, [e.target.name]: e.target.value };
      console.log("@@@->f", updatedCliente);
      return updatedCliente;
    });
  };
  
  const loadCliente = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4600/cliente/${id}`);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error('Error al cargar el cliente:', error.message);
    }
  }
  
  useEffect(() => {
    if (params.id) {
      loadCliente(params.id);
    }
  }, [params.id]);
    
return (
<div>
    <h1 className="title-1" style={{textAlign:'center',  marginTop: '1%', fontFamily: '"Times New Roman"'}}>CREDIFAMILIA CF</h1>

    <div className="container" style={{marginTop:'5%', backgroundColor:'aliceblue', borderRadius:'10px', paddingTop:'20px', paddingBottom:'20px'}}>
      <form className="row g-3"  onSubmit={handleSubmit} method="post">
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="nombre" onChange={handleChange} name='nombre' required/>
        </div>
    <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="apellido" onChange={handleChange} name='apellido' required />
    </div>
    <div className="col-md-2">
          <label htmlFor="inputZip" className="form-label">Identificación</label>
          <input type="number" className="form-control" id="identificacion" onChange={handleChange} name='identificacion' required/>
    </div>
    <div className="col-md-4">
          <label htmlFor="inputState" className="form-label" >Fecha Nacimiento</label>
          <input type="date" className="form-control" id="fecha_nacimiento" onChange={handleChange} name='fecha_nacimiento' required />
    </div>
    <div className="col-md-6">
          <label htmlFor="ciudad" className="form-label">Ciudad</label>
          <input type="text" className="form-control" id="ciudad" onChange={handleChange} name='ciudad' required />
    </div>
    <div className="col-12">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} name='email' required/>
    </div>         
    <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Telefono</label>
          <input type="tel" className="form-control" id="telefono"  pattern="[0-9]{10}" title="Ingrese un número de teléfono válido de 10 dígitos" onChange={handleChange} name='telefono' required />
    </div>
    <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Ocupacion</label>
          {/* <input type="text" className="form-control" id="ocupacion" onChange={handleChange} name='ocupacion  ' required /> */}
              <input type="text" className="form-control" id="ocupacion" onChange={handleChange} name='ocupacion' required />

    </div>
    <div className="col-12">
      <button type="submit" className="btn btn-primary"onSubmit={handleSubmit}  >
        Enviar
      </button>
    </div>
      </form>
    </div>
</div>
)
}
