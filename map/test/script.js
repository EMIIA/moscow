// inject navico access_token here
// ref: https://developer.navico.com/GettingStarted
let ACCESS_TOKEN =
  "eyJhbGciOiJSUzI1NiIsImtpZCI6IjgxRUFGNTI5QjI5NEZDQUQ0RjdERUY5Q0FBOUE5QjYzNTc3NThBRjFSUzI1NiIsInR5cCI6ImF0K2p3dCIsIng1dCI6ImdlcjFLYktVX0sxUGZlLWNxcHFiWTFkMWl2RSJ9.eyJuYmYiOjE2MTUzNTA1NDMsImV4cCI6MTYxNTM1NDE0MywiaXNzIjoiaHR0cHM6Ly9jbWFwLWlkc3J2LmF6dXJld2Vic2l0ZXMubmV0IiwiYXVkIjoiaHR0cHM6Ly9jbWFwLWlkc3J2LmF6dXJld2Vic2l0ZXMubmV0L3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjFlMzJmZGQ4NDk2MjQyNjNiNmEzOGEwMzhlYzhiNjE5IiwianRpIjoiQTZCMDJBMERBRThFQTlBN0E1ODk1RTgzRUQzOTBCNzciLCJpYXQiOjE2MTUzNTA1NDMsInNjb3BlIjpbIk1hcHMtT25saW5lLVByZW1pdW0iLCJWQURzLU9ubGluZS1QcmVtaXVtIl19.ZxkkK6Pm5K6EHyLaDlEaHmMhxUygHIYh9Tc2wtEVE1P2rdWSdjvGmqQ7hjCJi_sQ0e2PIqrokfGimEdyhOQORYM-hNCt6obbOHZyURzoNMIcTjNsXHR8uecdRHZQ980nkBV2ewjW7grpOKJEoLjjLI-IE1ACUBmO4yS-JqFf5jEzWrVbno2m4RHx66236WrAwnF-I-l8Z17hEgLx-is0TCcX-KolZac1n9oWEjJpi09e-bfqGtSYlC03eJYTFZMdJe3xVZXKZNW3VQSyTGEXfbO8bU34kjIwKlyb9osxx0_oVa99do_tFsH8HrQhwkrctDtRTfdQnL2k2rMjqoqYMg";

let mapTilesUrl =
  "https://api.navico.com/v1/maps-online/c-map-base/vector-tiles/{z}/{y}/{x}.pbf?access_token=" +
  ACCESS_TOKEN;

// the following code based on => https://docs.mapbox.com/mapbox-gl-js/example/third-party/
mapboxgl.accessToken =
  "pk.eyJ1IjoiYWlkZWEiLCJhIjoiY2poaXQycnI1MjlhbjM2bnlzdm81d2owcyJ9.xR7EsFkBZmQc2xyLXO2olw";
let map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/light-v10",
  zoom: 10,
  center: [139.86448000000001, 35.54817666666667]
});

map.on("load", function () {
  map.addSource("vector-tiles", {
    type: "vector",
    tiles: [mapTilesUrl],
    minzoom: 0,
    maxzoom: 22,
    attribution:
          'Map tiles by <a target="_top" rel="noopener" href="https://developer.navico.com">navico</a></a>'
  });
  map.addLayer(
    {
      'id': "vector-tiles",
      'type': "line",
      'source': "vector-tiles",
    }
  );
});

map.addControl(new mapboxgl.NavigationControl());