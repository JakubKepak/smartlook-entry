import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import * as CONSTANTS from '../../constants';

const containerStyle = {
  width: '100%',
  height: '300px',
};

interface Props {
  lat: number;
  lng: number;
}

export default function GoogleMaps({ lat, lng }: Props): React.ReactElement {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script',
    googleMapsApiKey: CONSTANTS.REACT_APP_MAPS_API!,
  });

  console.log(`lat ${lat} lng ${lng}`);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={{
        lat: lat,
        lng: lng,
      }}
      zoom={5}
    ></GoogleMap>
  ) : (
    <></>
  );
}
