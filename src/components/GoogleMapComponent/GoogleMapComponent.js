import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '976px',
  height: '976px',
  borderRadius: '50%',
  position: 'relative',
};

const center = {
  lat: 40.65404,
  lng: -73.87016,
};

export function GoogleMapComponent() {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyCwy6cZMwceKBBJsws5FaLYn_qBbvl6Fy0',
  });

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <></>
  );
}
