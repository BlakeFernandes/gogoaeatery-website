import React from "react";
import GoogleMapReact from 'google-map-react';

export default function Map() {
    const defaultProps = {
        center: {
            lat: -36.82952792637945, 
            lng: 174.79699242988755
        },
        zoom: 18
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '70vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "" }}
                defaultCenter={defaultProps.center}
                yesIWantToUseGoogleMapApiInternals
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
        </div>
    );
}