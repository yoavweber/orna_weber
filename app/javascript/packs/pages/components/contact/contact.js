import React from 'react';
import GoogleMapReact from 'google-map-react';


const Contact = () =>{
    <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAG62PgnugI9g8NJ2LmSAz9-2zfzN3cRgU'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        />
    </div>
    
}


// 2VJH+37 Yehud, Israel



export default Contact;
  