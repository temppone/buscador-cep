import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import React from 'react';
import useGeolocation from 'react-hook-geolocation';

import { MapSectionContainer } from './styles';

const MapSection = (): JSX.Element => {
    const geolocation = useGeolocation();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY!,
    });

    return (
        <MapSectionContainer>
            {isLoaded ? (
                <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={
                        !geolocation.error
                            ? {
                                  lat: geolocation.latitude,
                                  lng: geolocation.longitude,
                              }
                            : {
                                  lat: -23.5489,
                                  lng: -46.6388,
                              }
                    }
                    zoom={15}
                    options={{
                        fullscreenControl: false,
                    }}
                />
            ) : null}
        </MapSectionContainer>
    );
};

export default MapSection;
