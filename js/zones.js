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

    selectMapZone() {
        /*  Toggle the Select to individually modify a zone
            and disable "picker mode"
        */
        if (MapZone.isPickerMode) this.togglePickerMapZones();
    }

    toggleResetMode() {
        /*  Toggle the Erase to reset individual map zones
        */
        if (!MapZone.isResetMode) {
            $("#reset-mode")[0].classList.replace("btn-dark", "btn-info");
            MapZone.lockGuilds();
            MapZone.highlightProvinces();
        } else {
            $("#reset-mode")[0].classList.replace("btn-info", "btn-dark");
            MapZone.unlockGuilds();
            MapZone.dimProvinces();
        }
        MapZone.isResetMode = !MapZone.isResetMode;
    }

    togglePickerMapZones() {
        /*  Toggle the Picker to copy paste owner to multiple provinces
            and disable "select mode"
        */
        if (!MapZone.isPickerMode) {
            $("#picker-mode")[0].classList.replace("btn-dark", "btn-info");
            $("#select-mode")[0].classList.replace("btn-info", "btn-dark");
            MapZone.lockProvinces()
        } else {
            $("#picker-mode")[0].classList.replace("btn-info", "btn-dark");
            $("#select-mode")[0].classList.replace("btn-dark", "btn-info");
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