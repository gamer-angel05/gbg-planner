class Zones {
    buildGroups = document.querySelectorAll(".build");
    swatchGroups = document.querySelectorAll(".swatch");

    constructor() {
        this.mapData = mapZones; // get from /data.js
        
        this.swatchGroups.forEach(group => {
            group.addEventListener('click', this.handleSwatchClick);
            group.addEventListener('mouseenter', this.handleSwatchEnter);
            group.addEventListener('mouseleave', this.handleSwatchLeave);
        });

        this.buildGroups.forEach(group => {
            group.addEventListener('click', this.handleBuildClick);
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
            Reset owner if same swatch clicked.
        */
        let selected = MapZone.selected;
        if (!selected) return;

        let swatch = event.currentTarget;
        if (swatch.classList.contains("swatch-active")) {
            swatch.classList.remove("swatch-active");
            selected.path.classList.replace(selected.owner, "owner");
            selected.owner = null;
            return;
        }
        MapZone.guilds.forEach(guild => $("." + guild + ".swatch")[0].classList.remove("swatch-active"));
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

    /* Attrition buildings */
    handleBuildClick = (event) => {
        /*  Toggle between attrition buildings and null.
            Add up buildings and set it on the selected zone.
        */
        let selectedZone = MapZone.selected;
        let current = event.currentTarget;

        if (!selectedZone) return;
        
        if (current.classList.contains("siege-camp")) {
            current.classList.replace("siege-camp", "watchtower");
        } else if (current.classList.contains("watchtower")) {
            current.classList.remove("watchtower");
        } else {
            current.classList.add("siege-camp")
        }
        let total = 0
        this.buildGroups.forEach(group => {
            if (group.classList.contains("siege-camp")) {
                total += 10;
            } else if (group.classList.contains("watchtower")) {
                total += 1;
            }
        });
        selectedZone.buildings = total;
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