import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const CallToAction: React.FC = () => {

  return (    
    <div style={{ margin: '10px' }} className="container navbar-expand-sm">
      <h3>¿Quieres llevar tu negocio al siguiente nivel y llegar a un público más amplio en línea?</h3>
      <p>¡Desarrolla una página web y haz que tu marca sea visible en Internet!</p>
      <div >
        <form style={{ paddingTop: '20px' }}>
          <div className="form-group" >
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" className="form-control" id="nombre" placeholder="Ingresa tu nombre" />
          </div>
          <div className="form-group" style={{ paddingTop: '20px' }}>
            <label htmlFor="correo">Correo electrónico:</label>
            <input type="email" className="form-control" id="correo" placeholder="Ingresa tu correo electrónico" />
          </div>
          <button style={{ marginTop: '20px' }}type="submit" className="btn btn-primary" >Te contactamos</button>
        </form>
      </div>
    </div>
  );
};

export default CallToAction;