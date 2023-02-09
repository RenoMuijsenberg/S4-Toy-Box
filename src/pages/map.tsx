import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar";
import {LatLng} from "leaflet";
import styles from "./styles/map.module.css"

import L from 'leaflet';

const iconTeddy = new L.Icon({
    iconUrl: require('../assets/teddy.png'),
    iconSize: new L.Point(60, 75),
});

const Map = () => {
    const position = new LatLng(51.505, -0.09)
    return (
        <div className={styles.mapPage}>
            <SearchBar/>
            <MapContainer center={position} className={styles.map} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={iconTeddy}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>,
            <Navbar/>
        </div>
    );
};

export default Map;