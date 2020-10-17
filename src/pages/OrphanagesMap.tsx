import React from 'react';

// Image
import mapMarkerImg from '../images/map-marker.svg';

import { Link } from 'react-router-dom';

// Map
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

// Icons
import { FiPlus } from 'react-icons/fi';

// CSS
import '../styles/pages/orphanages-map.css';

// Default CSS for leaflet
import 'leaflet/dist/leaflet.css';

import Leaflet, { popup } from 'leaflet';

// Defining the mapIcon to display it correctly
const mapIcon = Leaflet.icon(
    {

        iconUrl: mapMarkerImg,

        iconSize: [58, 68],

        // [x, y] axis
        iconAnchor: [29, 68],

        popupAnchor: [178, 2]

    }
);

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

                {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}

                <TileLayer
                    
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
                
                />

                <Marker 

                    icon={mapIcon}

                    position={[-23.2427023,-45.8944638]}

                >

                    <Popup 

                        closeButton={false} 

                        minWidth={240} 

                        max-width={240} 

                        className="map-popup"

                    >

                        Lar das meninas
                    
                    </Popup>

                </Marker>

            </Map>

            <Link to="" className="create-orphanage"> 
            
                <FiPlus size={ 32 } color="#FFF"/>

            </Link>

        </div>

    );

}

export default OrphanagesMap;