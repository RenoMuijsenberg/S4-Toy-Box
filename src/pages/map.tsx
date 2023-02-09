import {MapContainer, Marker, Popup, TileLayer, useMap} from 'react-leaflet'
import Navbar from "../components/navbar";
import SearchBar from "../components/SearchBar";
import {LatLng} from "leaflet";
import styles from "./styles/map.module.css"

import L from 'leaflet';

const iconTeddySmall = new L.Icon({
    iconUrl: require('../assets/teddy.png'),
    iconSize: new L.Point(20, 25),
});
const iconTeddyMedium = new L.Icon({
    iconUrl: require('../assets/teddy.png'),
    iconSize: new L.Point(30, 37.5),
});
const iconTeddyBig = new L.Icon({
    iconUrl: require('../assets/teddy.png'),
    iconSize: new L.Point(60, 75),
});

const Map = () => {
    const position = new LatLng(51.505, -0.09)
    return (
        <div className={styles.mapPage}>
            <SearchBar/>
            <MapContainer center={new LatLng(51.444004, 5.456020)} className={styles.map} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={new LatLng(51.444004, 5.456020)} icon={iconTeddySmall}>
                </Marker>
                <Marker position={new LatLng(51.448859, 5.474573)} icon={iconTeddyMedium}>
                </Marker>
                <Marker position={new LatLng(51.435032, 5.508620)} icon={iconTeddyBig}>
                </Marker>
            </MapContainer>,
            <Navbar/>
        </div>
    );
};

export default Map;