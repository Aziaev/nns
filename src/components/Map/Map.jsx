import { DEFAULT_ZOOM, GOOGLE_MAP_API_KEY, NNS_COORDINATES } from 'config/index';
import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';

const Map = (props) =>
  <GoogleMap
    defaultZoom={DEFAULT_ZOOM}
    defaultCenter={NNS_COORDINATES}
    defaultTitle={"EPTE!"}
  >
    <Marker position={NNS_COORDINATES} />
  </GoogleMap>;

export default withScriptjs(withGoogleMap(Map));


export const GOOGLE_MAP_URL = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`;
