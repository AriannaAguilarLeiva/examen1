import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const InfoPersonal: React.FC = () => {

  return (    
    <div >
        <div style={{margin: '10px'}} className="container">
     
      <h1>Arianna Aguilar Leiva</h1>
      <h2>Desarrollador de aplicaciones web</h2>
      <p>Experiencia en el desarrollo de aplicaciones web utilizando React y conocimientos en Bootstrap.</p>      
      <a href="https://www.linkedin.com/in/arianna-aguilar-a658aa253/" target="_blank" className="btn btn-primary">Contactarme en LinkedIn</a>
    </div>
    </div>
  );
};

export default InfoPersonal;