/*
* https://deck.gl/docs/api-reference/layers/column-layer
*/
const {DeckGL, ColumnLayer} = deck;

const layer = new ColumnLayer({
  id: 'ColumnLayer',
  data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/hexagons.json',
  
  /* props from ColumnLayer class */
  
  // angle: 0,
  // coverage: 1,
  diskResolution: 12,
  elevationScale: 100,
  extruded: true,
  // filled: true,
  getElevation: d => d.value * 50,
  getFillColor: d => [48, 128, d.value * 255, 255],
  getLineColor: [0, 0, 0],
  getLineWidth: 20,
  getPosition: d => d.centroid,
  // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
  // lineWidthMinPixels: 0,
  // lineWidthScale: 1,
  // lineWidthUnits: 'meters',
  // material: true,
  // offset: [0, 0],
  radius: 250,
  // stroked: false,
  // vertices: null,
  // wireframe: false,
  
  /* props inherited from Layer class */
  
  // autoHighlight: false,
  // coordinateOrigin: [0, 0, 0],
  // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
  // highlightColor: [0, 0, 128, 128],
  // modelMatrix: null,
  // opacity: 1,
  pickable: true,
  // visible: true,
  // wrapLongitude: false,
});

new DeckGL({
  mapStyle: 'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json',
  initialViewState: {
    longitude: -122.4,
    latitude: 37.74,
    zoom: 11,
    maxZoom: 20,
    pitch: 30,
    bearing: 0
  },
  controller: true,
  getTooltip: ({object}) => object && `height: ${object.value * 5000}m`,
  layers: [layer]
});
