import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const Header: React.FC = () => {

  return (
    
   
        <header>

       
      <nav className="navbar navbar-expand-sm bg-black navbar-light"> 

        <div className="collapse navbar-collapse " id="navbarNav"> 
        <li>
            <Image width={140} height={140} src={require("../../img/marca.png")} alt='no se carga'></Image>
            </li>
          <ul className="navbar-nav"> 
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Inicio</a> 
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Acerca de</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Crear cuenta</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">Iniciar sesión</a>
            </li>
        
          </ul>
        </div>
      </nav>
      
      </header>
  );
};

export default Header;
