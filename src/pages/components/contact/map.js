import React from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './assets/google_marker.png'

require('dotenv').config();



const Marker = () => <div className="marker"style={{ height: '50px', width: '50%', float: 'left', position:'absolute'}}><img className='marker_img' src={marker} /></div> ;


const LOCATION  = {
  lat: 32.030639,
  lng: 34.877925
}

const Map = () =>{
 const defaultProps = {
    center: LOCATION,
    zoom: 16
  };
  return(
    <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_API}`,language:'he'}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
           <Marker
            lat={32.030639}
            lng={34.877925}
          />
        </GoogleMapReact>
    </div>
    )
    
}




export default Map;
  