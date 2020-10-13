import React from 'react';

// Image
import mapMarkerImg from '../images/map-marker.svg';

import { Link } from 'react-router-dom';

// Icons
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {

    return (

        <div id="page-map">

            <aside>

                <header>

                    <img src={mapMarkerImg} alt="Happy"/>

                    <h2> Escolha um orfanato no mapa </h2>

                    <p> Muitas crianças estão esperando a sua visita! </p>

                </header>

                <footer>

                    <strong> São José dos Campos </strong>

                    <span> São Paulo </span>

                </footer>

            </aside>

            <div></div>

            <Link to="" className="create-orphanage"> 
            
                <FiPlus size={ 32 } color="#FFF"/>

            </Link>

        </div>

    );

}

export default OrphanagesMap;