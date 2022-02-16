class Zones {
    constructor() {
        this.mapData = mapZones; // get from /data.js
    }

    setupZonesWithMap(mapGroups) {
        this.mapData.forEach(zoneData => new Zone(zoneData));
        mapGroups.forEach(group => new MapZone(group));
    }

    importZonesWithHash(zones) {
        /* Reset map, then import data from hash string
        */
        this.resetMapZones();
        zones.forEach(zone => MapZone.importZone(zone));
    }

    resetMapZones() {
        MapZone.reset();
    }

    resetMapZone() {
        MapZone.isResetMode = true

    }

    togglePickerResetMode() {
        /*  Toggle the Erase to reset individual map zones
        */
        if (!MapZone.isResetMode) {
            $("#picker-reset")[0].classList.replace("btn-dark", "btn-info");
            MapZone.lockGuilds();
        } else {
            $("#picker-reset")[0].classList.replace("btn-info", "btn-dark");
            MapZone.unlockGuilds();
        }
        MapZone.isResetMode = !MapZone.isResetMode;
    }

    togglePickerMapZones() {
        /*  Toggle the Picker to copy paste owner to multiple provinces
        */
        if (!MapZone.isPickerMode) {
            $("#picker")[0].classList.replace("btn-dark", "btn-info");
            MapZone.lockProvinces()
        } else {
            $("#picker")[0].classList.replace("btn-info", "btn-dark");
            MapZone.unlockProvinces()
        }
        MapZone.picker = null;
        MapZone.isPickerMode = !MapZone.isPickerMode;
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