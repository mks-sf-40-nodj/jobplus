'use strict';
import React, { Component } from 'react';
import { GoogleMapLoader, GoogleMap, Marker, InfoWindow, SearchBox, DirectionsRenderer} from 'react-google-maps';
import { default as InfoBox } from 'react-google-maps/lib/addons/InfoBox';
import { default as MarkerClusterer } from 'react-google-maps/lib/addons/MarkerClusterer';
import Modal from 'react-modal';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BaseComponent from './BaseComponent';
import customStyles from '../constants/json/google_map_modal_styles.json';
import mapStylesObject from '../constants/json/google_map_styles.json';
import mapMarkerPaths from '../constants/json/map_marker_paths.json';
import { fetchJobs, selectJob, toggleModal } from '../actions/index';


class GMap_Modal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      // origin: new google.maps.LatLng(this.props.activeJob.latitude, this.props.activeJob.longitude),
      // destination: new google.maps.LatLng(41.8525800, -87.6514100),
      directions: null
    };
  }

  // Callback function that dynamically repositions the Google Map over the geometric center of a search query's job results:
  centerMap() {
    // For a given input, `coordsArr`, function will return the median value among the provided array of coordinates:
    const getCenterCoordinate = (coordsArr) => coordsArr
      .sort((coord1, coord2) => coord1 - coord2)[Math.floor((coordsArr.length - 1) / 2)];
    const allMarkers = this.props.jobMarkers.concat(
      this.props.restaurantMarkers,
      this.props.busMarkers,
      this.props.trainMarkers,
      this.props.gymMarkers,
      this.props.parkMarkers
    );

    let [centerLat, centerLng] = [
          getCenterCoordinate(allMarkers.map(marker => marker.coords.lat)),
          getCenterCoordinate(allMarkers.map(marker => marker.coords.lng))
        ];
    return this.props.jobMarkers.length ? new google.maps.LatLng({ lat: centerLat, lng: centerLng }) : this.state.defaultCenter;
  }

  // Toggle to 'true' to show InfoWindow and re-render component:
  handleMarkerClick(targetMarker) {
    this.closeAllMarkers();

    let typeRef;
    switch (targetMarker.markerType) {
      case 'job':
        typeRef = this.props.jobMarkers;
        break;
      case 'restaurant':
        typeRef = this.props.restaurantMarkers;
        break;
      case 'bus':
        typeRef = this.props.busMarkers;
        break
      case 'train':
        typeRef = this.props.trainMarkers;
        break;
      case 'gym':
        typeRef = this.props.gymMarkers;
        break;
      case 'park':
        typeRef = this.props.parkMarkers;
        break;
      default:
        typeRef = this.props.jobMarkers;
        break;
    }

    this.setState({
      markers: typeRef.map(marker => marker === targetMarker
        ? Object.assign(marker, {showInfo: true})
        : marker
      )
    });
    this.centerMap();
  }

  // Deactivates the display state of the clicked-upon map marker item's InfoWindow:
  handleMarkerClose(targetMarker) {
    this.setState({
      markers: this.props.jobMarkers.map(marker => marker === targetMarker
        ? { marker, showInfo: false }
        : marker
      )
    });
  }

  // Callback function to disable the display state of all active InfoWindows:
  closeAllMarkers() {
    let allMarkers = [
      this.props.jobMarkers,
      this.props.restaurantMarkers,
      this.props.busMarkers,
      this.props.trainMarkers,
      this.props.parkMarkers,
      this.props.gymMarkers
    ];

    allMarkers.forEach(markerSet => {
      this.setState({
        markers: markerSet.map(marker => Object.assign(marker, { showInfo: false }))
      });
    });
  }

  // Modal controls:
  handleClickOutside(evt) {
    this.closeIt();
  }

  // Controls the content of map marker items' InfoWindow dialogue boxes:
  renderInfoWindow(marker, ref) {
    const onCloseclick = this.handleMarkerClose.bind(this, marker),
          companyTitle = () => {
            if (marker.company) {
              return (<h5 className='infoWindow_Header'>{ this.parseAndFormatJobTitle(marker.company) }</h5>);
            }
          },
          itemImage = () => {
            // console.log('PHOTO REF.', marker.markerPhoto);
            if (marker.markerPhoto) {
              return (<img
                src={ this.parseYelpRestaurantPhoto(marker.markerPhoto).originalFileSize }
                className='modalInfoWindow_Pic'
                style={{ maxWidth: '300px', height: 'auto' }}
                alt='Reference photograph [Source: Yelp/Google Places API]' />
              );
            }
          };

    return (
      <InfoWindow
        key={ `${marker.markerKey}_info_window` }
        onCloseclick={ onCloseclick } >
          <div>
            <h4
              className='infoWindow_Header'>
              { this.parseAndFormatJobTitle(marker.markerTitle) }
            </h4>
            { companyTitle() }
            <hr />
            <div>
              {
                marker.address.map((addressComponent, index) =>
                  <p key={ `AddressComponent${index}` }>{ addressComponent }</p>
                )
              }
            </div>
            { itemImage() }
          </div>
      </InfoWindow>
    );
  }

  // Render the appropriate Google Map map marker for the given `marker` input:
  addMarker(marker, index) {
    const MAX_ZINDEX = 800,
          onClick = () => this.handleMarkerClick(marker);

    let MAP_PIN = 'M 168.13014858503527 114.76652327113317 C 189.29733269688495 66.37538239750444 169.10629117101143 -0.743769309370748 88.35629117101149 0.006230690629195124 C 7.606291171011549 0.7562306906291383 -13.333356542955187 65.32715433879548 7.575247535632002 114.10675303790794 C 24.570783547217786 153.75719661632445 32.21524550334891 164.64004753237344 47.9861005922736 196.98393269349776 Q 63.75695568119835 229.32781785462203 88.39695364891526 279.86111234908753 L 128.26355111697524 197.31381781011032 Q 152.60629117101155 150.2562306906292 168.13014858503527 114.76652327113317 Z',
        PIN_SCALE = (1 / 10),
        PIN_FILL_COLOR = '#696969',
        PIN_STROKE_WEIGHT = 0.75,
        PIN_Z_INDEX = MAX_ZINDEX;

    switch (marker.markerType) {
      case 'job':
        MAP_PIN = 'm 260.01758,94.537109 0,7.535161 24.25195,0 0,-7.535161 -24.25195,0 z m 12.125,-45.03125 c -41.42135,0 -75,33.578645 -75,75.000001 0,41.42136 34.93882,90.3563 75,173.92773 41.48975,-83.57143 75,-132.50637 75,-173.92773 0,-41.421356 -33.57865,-75.000001 -75,-75.000001 z m -15.71823,38.316402 31.54859,0 4.49157,3.62151 0,12.739189 4.13054,0 21.78509,0 0,66.68953 -21.78509,0 -48.46094,0 -22.22909,0 0,-66.68953 22.22909,0 3.68655,0 0,-12.739189 4.60368,-3.62151 z';
        PIN_SCALE = (1 / 4);
        PIN_FILL_COLOR = marker.markerKey === this.props.activeJob.jobkey ? '#14A4B5' : '#7A7A7A';
        PIN_Z_INDEX = marker.markerKey === this.props.activeJob.jobkey ? 1000 : 900;
        PIN_STROKE_WEIGHT = 1.50;
        break;
      case 'restaurant':
        MAP_PIN = 'm 407.89288,264.21951 c -5.37639,-14.73114 5.5253,-38.94878 -6.80684,-50.63187 l -97.80958,-92.6617 -5.6044,5.60439 80.7416,91.95041 -11.309,11.10857 -91.85018,-80.64139 -5.6044,5.6044 80.7897,91.99848 -10.85201,11.56557 -92.35527,-81.14647 -5.6044,5.60439 90.6414,101.85019 c 10.94643,12.30007 35.26576,-4.39892 49.2033,4.36813 20.28775,12.76148 147.29347,169.78332 170.1524,146.47922 C 574.48412,411.96774 418.9608,284.09174 407.89288,264.21951 Z m -24.98672,17.32934 c 0,0 -150.92241,134.90217 -132.83507,151.0178 C 265.1961,449.5518 381.896,333.06662 381.896,333.06662 l 32.32488,30.30459 c 0,0 165.19346,-141.28371 126.77415,-238.90108 -72.57602,68.99235 -158.08887,157.07872 -158.08887,157.07872 z';
        PIN_SCALE = (1 / 10);
        PIN_FILL_COLOR = '#AF0606';
        break;
      case 'train':
        MAP_PIN = 'm 131.45374,317.51245 156.82395,0 0,2.25915 -156.82395,0 z m 144.79335,-32.08912 56.97251,94.82924 M 84.720117,380.21765 C 142.51205,285.0536 142.51205,283.51249 142.51205,283.51249 m 3.43174,-204.183983 c -17.41143,0 -31.42968,15.61034 -31.42968,35.001933 l 0,140.4058 c 0,19.39159 14.01825,35.00411 31.42968,35.00411 l 126.06836,0 c 17.41143,0 31.42774,-15.61252 31.42774,-35.00411 l 0,-140.4058 c 0,-19.391593 -14.01631,-35.001933 -31.42774,-35.001933 l -126.06836,0 z m 13.18164,46.774383 35.72461,0 0,39.78748 -35.72461,0 0,-39.78748 z m 64.05274,0.0805 35.58008,0 0,39.62652 -35.58008,0 0,-39.62652 z m -67.40039,115.9038 a 8.9190779,9.9334227 0 0 1 8.91992,9.93436 8.9190779,9.9334227 0 0 1 -8.91992,9.93219 8.9190779,9.9334227 0 0 1 -8.91797,-9.93219 8.9190779,9.9334227 0 0 1 8.91797,-9.93436 z m 106.39844,2.09041 a 7.0415092,7.8423227 0 0 1 7.04296,7.84395 7.0415092,7.8423227 0 0 1 -7.04296,7.84178 7.0415092,7.8423227 0 0 1 -7.04102,-7.84178 7.0415092,7.8423227 0 0 1 7.04102,-7.84395 z';
        PIN_FILL_COLOR = '#00F';
        PIN_SCALE = 1 / 7;
        break;
      case 'bus':
        MAP_PIN = 'M 135.80078,39.505859 C 101.73951,39.410385 82.016546,114.45874 82.142578,126.37695 L 85,396.5625 c 0.126032,11.91822 9.594799,21.51367 21.51367,21.51367 l 16.18555,0 c -0.89421,1.91485 -1.4082,4.04647 -1.4082,6.30664 l 0,57.38672 c 0,8.24241 6.6365,14.87891 14.8789,14.87891 l 20.62305,0 c 8.24241,0 14.87695,-6.6365 14.87695,-14.87891 l 0,-57.38672 c 0,-2.26017 -0.51204,-4.39179 -1.40625,-6.30664 l 185.65235,0 c -0.74335,1.7269 -1.15821,3.63115 -1.15821,5.63672 l 0,58.72656 c 0,7.87129 6.33575,14.20899 14.20703,14.20899 l 21.96485,0 c 7.87128,0 14.20703,-6.3377 14.20703,-14.20899 l 0,-58.72656 c 0,-2.00557 -0.41486,-3.90982 -1.1582,-5.63672 l 18.79296,0 c 11.91889,0 21.51368,-9.59478 21.51368,-21.51367 l 0,-270.18555 c 0,-11.91888 -18.18584,-86.05878 -53.65625,-86.1582 L 135.80078,39.505859 Z m 8.48438,20.712891 237.85742,0 c 3.36357,0 6.07226,2.708694 6.07226,6.072266 l 0,8.570312 c 0,3.363572 -2.70869,6.072266 -6.07226,6.072266 l -237.85742,0 c -3.36358,0 -6.07032,-2.708694 -6.07032,-6.072266 l 0,-8.570312 c 0,-3.363572 2.70674,-6.072266 6.07032,-6.072266 z m -15.88868,68.57227 269.63477,0 c 9.00487,0 16.25391,7.24903 16.25391,16.2539 l 0,133.20508 c 0,9.00487 -7.24904,16.25586 -16.25391,16.25586 l -269.63477,0 c -9.00487,0 -16.2539,-7.25099 -16.2539,-16.25586 l 0,-133.20508 c 0,-9.00487 7.24903,-16.2539 16.2539,-16.2539 z M 125,353.07617 a 25,25 0 0 1 25,25 25,25 0 0 1 -25,25 25,25 0 0 1 -25,-25 25,25 0 0 1 25,-25 z m 276.42773,0 a 25,25 0 0 1 25,25 25,25 0 0 1 -25,25 25,25 0 0 1 -25,-25 25,25 0 0 1 25,-25 z';
        PIN_FILL_COLOR = '#008C31';
        PIN_SCALE = 1 / 14;
        break;
      case 'park':
        MAP_PIN = 'm 508.10674,273.53459 0.50507,-46.46702 c 0,0 -50.62595,1.6481 -53.53808,-32.32488 -2.91213,-33.97298 28.78934,-47.98225 28.78934,-47.98225 0,0 8.73672,-35.64192 44.9518,-36.36549 36.21507,-0.72357 48.48732,36.87057 48.48732,36.87057 0,0 32.61299,8.05854 21.2132,50.00254 -7.07555,26.03351 -53.03301,29.29443 -53.03301,29.29443 l 0,45.96194 z M 710.7158,297.19507 A 146.07143,64.285713 0 0 1 564.64437,361.48079 146.07143,64.285713 0 0 1 418.57294,297.19507 146.07143,64.285713 0 0 1 564.64437,232.90936 146.07143,64.285713 0 0 1 710.7158,297.19507 Z M 564.65441,237.52 c 0,0 23.00156,26.54263 18.44607,40.73509 -9.22631,28.74428 -68.31919,16.8893 -78.39584,45.34662 -4.30388,12.15455 13.83457,36.12358 13.83457,36.12358 l 91.84611,0.76858 c 0,0 -34.34374,-17.02264 -34.9707,-33.04922 -0.85083,-21.74944 43.30994,-26.66063 43.80944,-48.42096 0.43435,-18.92231 -36.12358,-43.80945 -36.12358,-43.80945 z';
        PIN_FILL_COLOR = '#00A65E';
        PIN_SCALE = 1 / 7;
        break;
      case 'gym':
        MAP_PIN = 'm 352.59637,120.65091 0.13294,0 c 9.94033,0 17.94283,8.0025 17.94283,17.94283 l 0,45.13294 c 0,9.94033 -8.0025,17.94284 -17.94283,17.94284 l -0.13294,0 c -9.94033,0 -17.94284,-8.00251 -17.94284,-17.94284 l 0,-45.13294 c 0,-9.94033 8.00251,-17.94283 17.94284,-17.94283 z m -45.2208,-31.850548 10.86714,0 c 9.37716,0 16.92628,7.549124 16.92628,16.926288 l 0,110.86714 c 0,9.37716 -7.54912,16.92628 -16.92628,16.92628 l -10.86714,0 c -9.37717,0 -16.92629,-7.54912 -16.92629,-16.92628 l 0,-110.86714 c 0,-9.377164 7.54912,-16.926288 16.92629,-16.926288 z m -166.95374,31.917268 8.44206,0 c 7.60174,0 13.72156,6.11981 13.72156,13.72156 l 0,53.44206 c 0,7.60174 -6.11982,13.72156 -13.72156,13.72156 l -8.44206,0 c -7.60175,0 -13.72156,-6.11982 -13.72156,-13.72156 l 0,-53.44206 c 0,-7.60175 6.11981,-13.72156 13.72156,-13.72156 z m 35.41765,-31.932234 17.60678,0 c 7.51857,0 13.57143,6.052857 13.57143,13.571434 l 0,117.60678 c 0,7.51857 -6.05286,13.57143 -13.57143,13.57143 l -17.60678,0 c -7.51858,0 -13.57143,-6.05286 -13.57143,-13.57143 l 0,-117.60678 c 0,-7.518577 6.05285,-13.571434 13.57143,-13.571434 z m 31.89922,55.792064 82.45121,0 0,33.16551 -82.45121,0 z';
        PIN_FILL_COLOR = '#000';
        PIN_SCALE = 1 / 7;
        break;
      case 'user':
        MAP_PIN = 'm 386.5273,337.45765 c 29.64325,5.39007 45.21283,17.60081 37.52212,29.42742 -7.6907,11.82661 -36.59822,20.12665 -69.66599,20.00276 -33.06777,-0.12389 -61.50937,-8.63877 -68.54316,-20.52055 -7.03379,-11.88178 9.20918,-23.97333 39.14493,-29.14019 m 9.88267,25.35269 c 0,0 -7.92798,9.82033 19.78708,9.82034 27.71507,10e-6 19.78709,-9.82034 19.78709,-9.82034 l -9.89355,-5.92771 c 0,0 -2.78933,-20.88625 4.96569,-42.00916 13.96165,-10.93849 12.71047,-8.76662 12.8467,-33.40271 0.1086,-19.64034 -2.0015,-23.44949 -2.0015,-23.44949 -3.08059,-6.12733 -46.45591,-5.76715 -49.83743,0 0,0 -2.70346,3.15882 -2.6451,23.44949 0.0772,26.83213 -1.38455,20.93328 11.21487,33.40271 9.11773,20.14872 5.66968,42.00916 5.66968,42.00916 z m 37.71791,-131.72516 a 17.473604,17.473604 0 0 1 -17.47361,17.47362 17.473604,17.473604 0 0 1 -17.4736,-17.47362 17.473604,17.473604 0 0 1 17.4736,-17.4736 17.473604,17.473604 0 0 1 17.47361,17.4736 z m 27.38813,90.30925 c 42.30496,9.83688 64.52492,32.12145 53.54923,53.70502 -10.97569,21.58353 -52.23069,36.73109 -99.42295,36.50498 -47.19227,-0.2261 -87.78233,-15.76573 -97.82051,-37.44997 -10.03819,-21.68422 13.14275,-43.75128 55.86517,-53.18078';
        PIN_FILL_COLOR = '#000';
        PIN_SCALE = 1 / 4;
        break;
      default:
        PIN_FILL_COLOR = '#FFF';
        break;
    }
      // JOB_MARKER:
        // "PIN_FILL_COLOR": marker.markerKey === this.props.activeJob.jobkey ? '#14A4B5' : '#7A7A7A',
        // "PIN_Z_INDEX": marker.markerKey === this.props.activeJob.jobkey ? 1000 : 900,

    return (
      <Marker
        key={ `Marker_${marker.markerKey}` }
        ref={ `${marker.markerType}_Marker_${index}` }
        position={ new google.maps.LatLng(marker.coords) }
        // title={marker.restaurantTitle}
        data-jobTitle={ marker.markerTitle }
        data-address={ marker.address }
        // data-jobTitle={marker.restaurantTitle}
        icon={{
          path: MAP_PIN,
          scale: PIN_SCALE,
          fillColor: PIN_FILL_COLOR,
          fillOpacity: 1,
          strokeColor: '#FFF',
          strokeWeight: PIN_STROKE_WEIGHT
        }}
        onClick={ onClick }
        zIndex={ PIN_Z_INDEX } >

        { marker.showInfo ? this.renderInfoWindow(marker, index) : null }

      </Marker>
    );
  }

  // Generates Google Map map markers for all returned job results:
  jobMarkerCallbackHandler() {
    return this.props.jobMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map markers for all returned Yelp restaurant results:
  restaurantMarkerCallbackHandler() {
    return this.props.restaurantMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map markers for all returned job results:
  busMarkerCallbackHandler() {
    return this.props.busMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map markers for all returned Google Places train station results:
  trainMarkerCallbackHandler() {
    return this.props.trainMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map markers for all returned Google Places park results:
  parkMarkerCallbackHandler() {
    return this.props.parkMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map markers for all returned Google Places gym results:
  gymMarkerCallbackHandler() {
    return this.props.gymMarkers.map((marker, index) => this.addMarker(marker, index));
  }

  // Generates Google Map map marker for the user's geocoded coordinates (i.e., geolocation):
  userMarkerCallbackHandler() {
    return this.addMarker(marker, index);
  }

  // Google Maps DirectionsService:
  /*
    componentDidMount() {
      const DirectionsService = new google.maps.DirectionsService();

      DirectionsService.route({
        origin: new google.maps.LatLng(this.props.activeJob.latitude, this.props.activeJob.longitude),
        // destination: this.state.destination,
        // destination: new google.maps.LatLng(this.props.restaurantMarkers[0].coords),
        destination: new google.maps.LatLng(42.332976, -83.051936),
        travelMode: google.maps.TravelMode.DRIVING
      }, (result, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.setState({
            directions: result
          });
        } else {
          console.log(`Error fetching directions: ${result}`);
          console.error(`Error fetching directions: ${result}`);
        }
      });
    }
  */

  render() {
    // const origin = new google.maps.LatLng(this.props.activeJob.latitude, this.props.activeJob.longitude),
    //       directions = this.state.directions;
    // console.log(`Origin: ${new google.maps.LatLng(this.props.activeJob.latitude, this.props.activeJob.longitude)}`);
    // const origin = new google.maps.LatLng(this.props.activeJob.coords),
    //       { directions } = this.state;

    return (
      <Modal
        isOpen={ this.props.toggleModal }
        style={ customStyles }
        contentLabel='Google Maps Modal Component' >

        <GoogleMapLoader
          containerElement={
            <div
              className='GMap_Modal'
              style={{ height: '90vh', width: '90vw' }} />
          }
          googleMapElement={
            <GoogleMap
              center={ this.props.center }
              defaultCenter={ this.props.center }
              defaultZoom={ 14 }
              maxZoom={ 14 }
              defaultOptions={{ styles: mapStylesObject }}
              scrollwheel={ false }
              ref='map'
              onClick={ () => this.closeAllMarkers() } >

              <MarkerClusterer
                averageCenter
                enableRetinaIcons
                gridSize={ 40 } >
                { this.restaurantMarkerCallbackHandler() }
                { this.busMarkerCallbackHandler() }
                { this.trainMarkerCallbackHandler() }
                { this.parkMarkerCallbackHandler() }
                { this.gymMarkerCallbackHandler() }
              </MarkerClusterer>

                { this.jobMarkerCallbackHandler() }
                {  }
            </GoogleMap>
          } />

        <i
          className='fa fa-times-circle XButton'
          onClick={ () => this.props.deactivateModal() }>
        </i>
      </Modal>
    );
  }
};


let mapStateToProps = (state) => {
  return {
    jobMarkers: state.jobs.map(job => ({
      markerType: 'job',
      coords: {
        lat: job.latitude,
        lng: job.longitude
      },
      markerKey: job.jobkey,
      markerTitle: job.jobtitle,
      company: job.company,
      address: [job.formattedLocation],
      // markerPhoto: 'No Image',
      showInfo: false
    })),
    restaurantMarkers: state.activeYelp.map(restaurant => ({
      markerType: 'restaurant',
      coords: {
        lat: restaurant.coordinate.latitude,
        lng: restaurant.coordinate.longitude
      },
      markerKey: restaurant.id,
      markerTitle: restaurant.name,
      address: [
        restaurant.display_address[1],
        restaurant.display_address[0],
        ...restaurant.display_address.slice(2)
      ],
      markerPhoto: restaurant.photo,
      showInfo: false
    })),
    busMarkers: state.activeBus.slice(0, 3).map(busMarker => ({
      markerType: 'bus',
      coords: {
        lat: busMarker.geometry.location.lat,
        lng: busMarker.geometry.location.lng
      },
      markerKey: busMarker.id,
      markerTitle: busMarker.name,
      address: [busMarker.vicinity] || ['Address Unlisted'],
      // markerPhoto: busMarker.photos[0].photo_reference,
      showInfo: false
    })),
    trainMarkers: state.activeTrains.slice(0, 3).map(trainMarker => ({
      markerType: 'train',
      coords: {
        lat: trainMarker.geometry.location.lat,
        lng: trainMarker.geometry.location.lng
      },
      markerKey: trainMarker.id,
      markerTitle: trainMarker.name,
      address: [trainMarker.vicinity] || ['Address Unlisted'],
      // markerPhoto: trainMarker.photos[0].photo_reference,
      showInfo: false
    })),
    parkMarkers: state.activeParks.slice(0, 3).map(parkMarker => ({
      markerType: 'park',
      coords: {
        lat: parkMarker.geometry.location.lat,
        lng: parkMarker.geometry.location.lng
      },
      markerKey: parkMarker.id,
      markerTitle: parkMarker.name,
      address: [parkMarker.vicinity] || ['Address Unlisted'],
      // markerPhoto: parkMarker.photos[0].photo_reference,
      showInfo: false
    })),
    gymMarkers: state.activeGyms.slice(0, 3).map(gymMarker => ({
      markerType: 'gym',
      coords: {
        lat: gymMarker.geometry.location.lat,
        lng: gymMarker.geometry.location.lng
      },
      markerKey: gymMarker.id,
      markerTitle: gymMarker.name,
      address: [gymMarker.vicinity] || ['Address Unlisted'],
      // markerPhoto: gymMarker.photos[0].photo_reference,
      showInfo: false
    })),
    toggleModal: state.toggleModal,
    activeJob: state.activeJob
  };
};

export default connect(mapStateToProps)(GMap_Modal);


// {
//   directions ?
//     <DirectionsRenderer directions={ directions } />
//     : null
// }
