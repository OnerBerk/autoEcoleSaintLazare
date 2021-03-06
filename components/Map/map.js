import { Component } from 'react';
import ReactMapGL, {Marker} from 'react-map-gl';
import styles from './map.module.scss'

class Map extends Component {
  state = {
    viewport: {
      width: '95%',
      height: '40vh',
      latitude: 43.949317,
      longitude: 4.815,
      zoom: 13
    }
  };
  render() {
    return (
      <ReactMapGL
        className={styles.map}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        //mapboxApiAccessToken= {process.env.googleapikey}
        mapboxApiAccessToken="pk.eyJ1IjoiYXV0b2Vjb2xlc2FpbnRsYXphcmUiLCJhIjoiY2tocnVzZnNlMGR5ZjJxbGhzNHFtZXpzbCJ9.SS42fxd-WVLk2ycjM64qQQ"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      > 
      <Marker latitude={43.9507} longitude={4.82060} offsetLeft={-20} offsetTop={-10}>
      <div className={styles.marker} > </div>
      <div className={styles.pulse} > </div>
    </Marker>
      </ReactMapGL>
    );
  }
}

export default Map;
process.env.GOOGLE_API_KEY