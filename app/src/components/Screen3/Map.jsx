import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import "./map.css";

export default function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_TOKEN,
  });

  const position = {
    lat: -7.2364555,
    lng: -35.8773681,
  };

  return (
    <div className="mapinha border-solid border-orangeProject border-4">
      {isLoaded ? (
        <GoogleMap mapContainerClassName="map w-[50vw] h-[50vh]" center={position} zoom={16}>
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}
