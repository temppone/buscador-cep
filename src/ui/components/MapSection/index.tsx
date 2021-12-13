import React from 'react';
import useGeolocation from 'react-hook-geolocation';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

import { MapSectionContainer } from './styles';

const MapSection = function (): JSX.Element {
    const geolocation = useGeolocation();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',

        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    return (
        <MapSectionContainer data-cy='maps-home'>
            {isLoaded ? (
                <GoogleMap
                    center={
                        !geolocation.error ? { lat: geolocation.latitude, lng: geolocation.longitude } : { lat: -23.5489, lng: -46.6388 }
                    }
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    options={{
                        fullscreenControl: false,
                    }}
                    zoom={15}
                />
            ) : null}
        </MapSectionContainer>
    );
};

export default MapSection;
