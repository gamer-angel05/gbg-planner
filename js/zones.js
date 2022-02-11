class Zones {
  constructor() {
    this.mapData = mapZones; // get from /data.js
  }

  setupZonesWithMap(mapGroups) {
    this.mapData.forEach(zoneData => {
      new Zone(zoneData);
    })
    mapGroups.forEach(group => {
      new MapZone(group)
    })
  }
}