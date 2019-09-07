import React from 'react';
import GoogleMapReact from 'google-map-react';
import marker from './google_marker.png'

import './contact.scss';


require('dotenv').config();

console.log(process.env.GOOGLE_API)


const AnyReactComponent = () => <div className="marker"style={{ height: '50px', width: '50%', float: 'left', position:'absolute'}}><img src={marker} /></div> ;


const LOCATION  = {
  lat: 32.030639,
  lng: 34.877925
}

const Contact = () =>{
 const defaultProps = {
    center: LOCATION,
    zoom: 16
  };
  return(
    <div style={{ height: '50vh', width: '50%', float: 'left'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: `${process.env.GOOGLE_API}`}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
           <AnyReactComponent
            lat={32.030639}
            lng={34.877925}
            text="My Marker"
          />
        </GoogleMapReact>
    </div>
    )
    
}




export default Contact;
  