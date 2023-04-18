import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white">
      <div style={{ margin: '10px' }}>       
          <div style={{ padding: '10px' }}>
            <h4>Contacto</h4>
            <ul className="list-unstyled">
              <li>Teléfono: +(506) 1289-7890</li>
              <li>Email: Arianna@gmail.com</li>
              <li>Facebook: Arianna123</li>
              <li>Instagram: Arianna321</li>
            </ul>
          </div>  
          </div>
       
     
    </footer>
  );
};

export default Footer;
