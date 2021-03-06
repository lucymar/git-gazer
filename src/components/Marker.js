const { Marker } = require('mapbox-gl');

const buildMarker = (type, coords) => {
  const markerEl = document.createElement('div');
  markerEl.style.backgroundSize = 'contain';
  markerEl.style.width = '32px';
  markerEl.style.height = '37px';
  markerEl.style.backgroundImage = `url(https://fossbytes.com/wp-content/uploads/2016/04/the-red-dot-mystery-horse-picture.jpg)`;
  return new Marker(markerEl).setLngLat(coords);
};

module.exports = buildMarker;
