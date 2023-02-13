import { GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api';

export default function Map(){

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCtSxHJwEcb35gy-zZkAdQxhDjghet5HPo"
      })
    
    const position= {
        lat: -7.2364555,
        lng: -35.8773681
    }
    return(
        <div>
            {isLoaded ? (
            <GoogleMap
                mapContainerStyle={{width:"800px", height:"400px"}}
                center={position}
                zoom={16}
            >
            <Marker position={position}/>
            </GoogleMap>
            ) : <></>}
        </div>
    )
}