class Zones {
    constructor() {
        this.mapData = mapZones; // get from /data.js
    }

    setupZonesWithMap(mapGroups) {
        this.mapData.forEach(zoneData => new Zone(zoneData));
        mapGroups.forEach(group => new MapZone(group));
    }

    importZonesWithHash(zones) {
        /* Import from hash string, reset map
        */
        MapZone.reset();
        zones.forEach(zone => MapZone.importZone(zone));
    }
    
    hashZones() {
        /*  Hash that returns all map zones as a single string, 
            ZONE=<owner>&<buildings>-ZONE=<owner>&<buildings>
        */
        let hash = ""
        MapZone.all.forEach(zone => {
            if (!zone.path.classList.contains("guild") && zone.owner) {
                hash += zone.zoneId + "=" + MapZone.guilds.indexOf(zone.owner) + "," + zone.buildings + "&";
            }
        })

        if (hash.endsWith("&")) hash = hash.slice(0, -1);

        return hash;
    }
}