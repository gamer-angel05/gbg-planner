class Zones {
    constructor() {
        this.mapData = mapZones; // get from /data.js
        
        const swatchGroups = document.querySelectorAll(".swatch");
        swatchGroups.forEach(group => {
            group.addEventListener('click', this.handleSwatchClick);
            group.addEventListener('mouseenter', this.handleSwatchEnter);
            group.addEventListener('mouseleave', this.handleSwatchLeave);
        });
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

    /* Swatches */
    handleSwatchClick = (event) => {
        /*  When a swatch is selected, while a zone is selected
            change the zone to the new owner.
        */
        let selected = MapZone.selected;
        if (!selected) return;

        let swatch = event.currentTarget;
        swatch.classList.add("swatch-active");
        
        if (selected.owner) selected.path.classList.replace(selected.owner, "owner");
        
        selected.owner = swatch.classList[0];
        selected.path.classList.replace("owner", selected.owner);
    }
    handleSwatchEnter = (event) => {
        let selected = MapZone.selected;
        if (!selected) return;
        
        event.currentTarget.classList.add("js-hover");
    }
    handleSwatchLeave = (event) => {
        event.currentTarget.classList.remove("js-hover");
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
        /*  Toggle between the picker and select mode
            to copy paste owner to multiple provinces
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