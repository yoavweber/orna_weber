import React from 'react';
import GoogleMapReact from 'google-map-react';


const Contact = () =>{
 const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };
  return(
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: ''}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        />
    </div>
    )
    
}


// 2VJH+37 Yehud, Israel



export default Contact;
  