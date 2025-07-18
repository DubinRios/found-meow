import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';  //  importar CSS Leaflet, de lo contrario el mapa estará vacío
import L from "leaflet"; //para un icono
import "./Map.css";
import { useTranslation } from 'react-i18next';

const position = [43.5287968, -5.6643708]

const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

const Map = () => {

  const { t } = useTranslation();

  return (
    <div className='map-wrapper'>
      <h2>{t("Dónde puede encontrarnos?")}</h2>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className='map-container'
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
          C. María Josefa, 27, Centro, 33209 Gijón, Asturias  <br />🐱 {t("Ven a visitarnos y conoce a los gatitos")}
        </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
