import React from 'react';

// To avoid charging all from 0, replace the a tag by this:
import { Link } from 'react-router-dom';

// Image
import logoImg from '../images/logo.svg';

import { FiArrowRight } from 'react-icons/fi';

// CSS
import '../styles/pages/landing.css';

function Landing() {

    return (

        <div id="page-landing">
    
          <div className="contentWrapper">
    
            <img src={logoImg} alt="Happy" />
    
            <main>
    
              <h1> Leve felicidade para o mundo </h1>
    
              <p> Visite orfanatos e mude o dia de muitas crianças. </p>
    
            </main>
    
            <div className="location">
    
              <strong> São José dos Campos </strong>
    
              <span> São Paulo </span>
    
            </div>
    
            <Link to="/app" className="enter-app"> 
    
              <FiArrowRight size={ 26 } color="rgba(0, 0, 0, 0.6)" /> 
    
            </Link>
    
          </div>
    
        </div>
    
      );

}

export default Landing;