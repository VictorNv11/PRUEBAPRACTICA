
import React from 'react';
import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <div>
      <div className="container" style={{ marginTop: '6%' }}>
        <h1 style={{ paddingRight: '4%', fontFamily: '"Times New Roman", Times, serif' }}>Bienvenido a CrediFamilia CF</h1>
        <div style={{ display: 'flex' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, at voluptates nulla possimus dicta incidunt soluta vero voluptatibus, labore esse veniam ab asperiores totam culpa iusto molestiae ut porro vitae
        </div>
      </div>
      <div className="event">
        <h3 className="bg-success" style={{ textAlign: 'center', marginTop: '3%' }}>Sobre Nosotros</h3>
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-4 cardsEventos">
          <div className="col">
            <div className="card h-100">
              <img src="img/descargaCredifamilia.jpg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Crédito fácil</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam esse dolorum ex doloremque libero laboriosam quo suscipit aliquam debitis, tempora quos excepturi tempore provident minima veritatis quas praesentium consequatur pariatur.</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-200">
              <img src="img/credifamiliaPlan.jpg" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Planes</h5>
                <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatum placeat iste in atque, incidunt eaque, optio laudantium voluptate consequuntur exercitationem qui labore repudiandae quaerat? Cumque ea alias natus a..</p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src="" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Accede a un Crédito</h5>
                <p className="card-text">¿Ya eres cliente? Te ayudamos a simplificar tus deudas y a conseguir lo que deseas, de manera fácil y rápida.</p>
                <li className="nav-item">
                    <Link to="/FormClientes" className="button">
                         Ingresa aqui
                     </Link>
                 </li>   
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="event">
        <h3 className="bg-success" style={{ textAlign: 'center', marginTop: '3%' }}>Contáctanos</h3>
      </div>
      <div className="cardsEvts" style={{ marginTop: '3%' }}>
        <div className="container contCards">
          <div className="row ">
            <div className="col">
              <div className="container">
                <img className="imgCards" src="img/auriculares-de-usuario.png" alt width={60} height={60} />
                <div className="card-body">
                  <h5 className="card-title">Asesores</h5>
                  <p className="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta excepturi pariatur fugit adipisci corporis quos, ex obcaecati nulla dolorem ullam quas porro libero reiciendis voluptatem, assumenda animi eum non harum..</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="container">
                <img className="imgCards" src="img/sobre.png" alt width={60} height={60} />
                <div className="card-body">
                  <h5 className="card-title">E-mail</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa aliquam tempora asperiores laboriosam impedit laudantium voluptatem doloribus amet incidunt quaerat eius expedita earum soluta, iste deleniti fugiat a est!.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="bg-success" style={{ marginTop: '2rem' }}>
          <div style={{ color: 'white' }}>
            <p>Contactanos en CrediFamilia@mail.com</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

