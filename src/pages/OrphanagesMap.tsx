import React from 'react';

// Image
import mapMarkerImg from '../images/map-marker.svg';

import { Link } from 'react-router-dom';

// Map
import { Map, TileLayer } from 'react-leaflet';

// Icons
import { FiPlus } from 'react-icons/fi';

// CSS
import '../styles/pages/orphanages-map.css';

// Default CSS for leaflet
import 'leaflet/dist/leaflet.css';

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

            <Map 
            
                center={ [-23.2427023,-45.8944638] } 
            
                zoom={ 15 }

                style={{ width: "100%", height: "100%" }}

            >

                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            </Map>

            <Link to="" className="create-orphanage"> 
            
                <FiPlus size={ 32 } color="#FFF"/>

            </Link>

        </div>

    );

}

export default OrphanagesMap;