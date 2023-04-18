import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Proyectos: React.FC = () => {

  return (    
    <div className='container' style={{margin: '10px'}}>
        <h3>Proyectos en GitHub</h3>
        <ul className="list-unstyled">
            <li><a target="_blank" className="nav-link" href="https://github.com/DayanaGamboa/Catan">Proyecto 1</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/AriannaAguilarLeiva/Actividad2-Progra4">Proyecto 2</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/AriannaAguilarLeiva/miPrimeraPagina">Proyecto 3</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/DayanaGamboa/actividad1">Proyecto 4</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/AriannaAguilarLeiva/asignacion2">Proyecto 5</a> </li>
            <li><a target="_blank" className="nav-link" href="https://github.com/AriannaAguilarLeiva/temperatureCalculator2.0">Proyecto 6</a> </li>
            
        </ul>
    </div>
  );
};

export default Proyectos;