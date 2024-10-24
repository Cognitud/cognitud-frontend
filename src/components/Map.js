// src/components/Map.js
'use client';

import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Image from "next/image";

// Create a custom icon for the map marker
const customIcon = new L.Icon({
  iconUrl: "/assets/icon/location-map.svg",
  iconSize: [40, 40],
});

const Map = ({ locations }) => {
  const mapRef = useRef();

  useEffect(() => {
    // Only merge options if the map instance is already initialized
    if (mapRef.current) {
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "/assets/icon/location-map.svg",
        iconUrl: "/assets/icon/location-map.svg",
        shadowUrl: undefined,
      });
    }
  }, []);

  return (
    <MapContainer
      center={[30, 30]} // Set your default center coordinates
      zoom={2} // Set your default zoom level
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
      touchZoom={false}
      doubleClickZoom={false}
      keyboard={false}
      className="leaflet-container"
      whenCreated={(mapInstance) => {
        mapRef.current = mapInstance;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "/assets/icon/location-map.svg",
          iconUrl: "/assets/icon/location-map.svg",
          shadowUrl: undefined,
        });
      }}
    >
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/light_nolabels/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      />
      {locations.map((location) => (
        <Marker key={location.id} position={location.coordinates} icon={customIcon}>
          <Popup>
            <div className="flex flex-col gap-2">
              <Image
                src={location.imageSrc}
                alt={location.altText}
                width={32}
                height={32}
              />
              <h4 className="custom-h5 font-pops text-bluePrimary font-medium">
                {location.name}
              </h4>
              <p className="custom-h6 font-pops">
                {location.address.map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
