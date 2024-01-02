import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';
import { env } from '~/env.mjs';

const CafeMap = () => {
    const mapStyles = {
        height: '400px',
        width: '100%',
    };

    const defaultCenter = {
        lat: -36.83012436574056, 
        lng: 174.7968966653524,
    };

    return (
        <LoadScript  googleMapsApiKey={env.GOOGLE_MAPS_API}>
            <GoogleMap
                id='location'
                mapContainerStyle={mapStyles}
                zoom={15}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default CafeMap;