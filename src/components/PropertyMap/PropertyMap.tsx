import React, { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
  "pk.eyJ1IjoidXNtYW5jYXBnZW1pbmkiLCJhIjoiY21qY2libW50MG96ZjNkc2J5OG90YTJ1MyJ9.FLn6lDxmaZC4vqYDHkwdPg";

interface Property {
  name: string;
  price: string;
  coords: LngLatLike;
}

const PropertyMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<mapboxgl.Map | null>(null);
  const markers = useRef<mapboxgl.Marker[]>([]);

  useEffect(() => {
    if (mapContainer.current) {
      mapInstance.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-106.65, 35.1], // Albuquerque
        zoom: 12,
      });

      const loadProperties = () => {
        markers.current.forEach((m) => m.remove());
        markers.current = [];

        if (!mapInstance.current) return;

        const bounds = mapInstance.current.getBounds();
        if (!bounds) return; // <-- check null

        const properties: Property[] = [];

        for (let i = 0; i < 10; i++) {
          const lng = bounds.getWest() + Math.random() * (bounds.getEast() - bounds.getWest());
          const lat = bounds.getSouth() + Math.random() * (bounds.getNorth() - bounds.getSouth());
          const priceValue = 100 + Math.floor(Math.random() * 500);
          properties.push({
            name: `Property ${i + 1}`,
            price: `$${priceValue}k`,
            coords: [lng, lat],
          });
        }

        properties.forEach((property) => {
          const popup = new mapboxgl.Popup({ offset: 25 }).setText(`${property.name} - ${property.price}`);
          const marker = new mapboxgl.Marker().setLngLat(property.coords).setPopup(popup).addTo(mapInstance.current!);
          markers.current.push(marker);
        });
      };

      mapInstance.current.on("load", loadProperties);
      mapInstance.current.on("moveend", loadProperties);

      return () => {
        mapInstance.current?.remove();
      };
    }
  }, []);

  return <div ref={mapContainer} className="w-full h-[700px] rounded-lg shadow-lg" />;
};

export default PropertyMap;
