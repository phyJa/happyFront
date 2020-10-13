import React from 'react';

// Image
import logoImg from './images/logo.svg';

// CSS
import './styles/pages/landing.css';

function App() {

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

        <a href="#" className="enter-app"> Arrow </a>

      </div>

    </div>

  );

}

export default App;
