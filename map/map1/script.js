class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null };

  }
  componentDidMount() {
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2hvcnRkaXYiLCJhIjoiY2l3OGc5YmE5MDJzZjJ5bWhkdDZieGdzcSJ9.1z-swTWtcCHYI_RawDJCEw';
    var map = new mapboxgl.Map({
      container: this.map,
      style: 'mapbox://styles/mapbox/light-v8',
      center: [-87.62979819999998, 41.8781136],
      zoom: 8 });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { id: "map", ref: x => this.map = x }));


  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(Map, null),

document.getElementById('app'));