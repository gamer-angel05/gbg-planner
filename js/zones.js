const bodyStyles = document.body.style;

class Zones {

    static guilds = [];
    static all = [];
    static guildColors = {
        'guild0': '#df42ae',
        'guild1': '#9d26e1',
        'guild2': '#262dd8',
        'guild3': '#b8aea7',
        'guild4': '#14bcbb',
        'guild5': '#b4bf12',
        'guild6': '#18ba13',
        'guild7': '#c4282a'
    };
    static zoneColors = ['#df42ae', '#9d26e1', '#262dd8', '#b8aea7', '#14bcbb', '#b4bf12', '#18ba13', '#c4282a', '#f37231'];
    // [pink,purple,blue,gray,teal,yellow,green,red,orange]
    
    static currentMap = 'waterfalls';
    static maps = ['waterfalls', 'volcano'];
    static data = {
        'volcano': {
            'zones': document.querySelectorAll('#map-volcano .map-group'),
            'data': mapZonesVolcano
        },
        'waterfalls': {
            'zones': document.querySelectorAll('#map-waterfalls .map-group'),
            'data': mapZonesWaterfalls
        }
    };

    constructor() {
        /*  Setup guild colors to css variable
        */
        for (const [key, value] of Object.entries(Zones.guildColors)) {
            bodyStyles.setProperty('--' + key + '-color', value);
        }
    }

    setupZonesWithMap(mapData, mapGroups, map) {
        mapGroups.forEach(group => {
            let mapZone = group.querySelector('.js-map-zone');
            let data = mapData.find(map => mapZone.classList[0].toUpperCase() === map.zone);
            let zone = new MapZone(group, mapZone, data, map);

            Zones.all.push(zone);
            if (zone.path.classList.contains('guild')) {
                zone.color = Zones.guildColors[zone.owner];
                Zones.guilds.push(zone);
            }
        })
    }

    importZonesWithHash(zones) {
        /* Reset map, then import data from hash string
        */
        Zones.reset();
        zones.forEach(zone => {
            let mapZone = Zones.getZone(zone.zone);

            if (mapZone) {
                mapZone.import(mapZone, zone);
            }
        });
    }
    
    hashZones() {
        /*  Hash that returns all map zones as a single string, 
            ZONE=<owner>&<buildings>-ZONE=<owner>&<buildings>
        */
        let hash = 'map=' + Zones.currentMap + '&';
        Zones.all.forEach(zone => {
            if (!zone.path.classList.contains('guild') && zone.owner) {
                hash += zone.zoneId + '=' + zone.owner.slice(-1) + ',' + zone.buildings + '&';
            }
        })
        if (hash.endsWith('&')) hash = hash.slice(0, -1);
        //hash = encodeURIComponent(hash);
        
        return hash;
    }

    static getZone = (zoneId) => {
        return this.all.find(zone => zone.zoneId === zoneId && zone.map === this.currentMap);
    }

    static reset = () => {
        this.all.forEach(zone => zone.reset());
    }

    static removeWarn = () => {
        this.all.forEach(zone => zone.path.classList.remove('warn'));
    }

    static lock = () => {
        this.all.forEach(zone => zone.path.classList.add('lock'));
    }

    static lockGuilds = () => {
        this.guilds.forEach(zone => zone.path.classList.add('lock'));
    }

    static lockProvinces = () => {
        this.all.forEach(zone => !zone.path.classList.contains('guild') && zone.path.classList.add('lock'));
    }

    static unlock = () => {
        this.all.forEach(zone => zone.path.classList.remove('lock'));
    }

    static unlockGuilds = () => {
        this.guilds.forEach(zone => zone.path.classList.remove('lock'));
    }

    static unlockProvinces = () => {
        this.all.forEach(zone => !zone.path.classList.contains('guild') && zone.path.classList.remove('lock'));
    }

    static highlightProvinces = () => {
        this.all.forEach(zone => !zone.path.classList.contains('guild') && zone.path.classList.add('highlight'));
    }

    static dimProvinces = () => {
        this.all.forEach(zone => !zone.path.classList.contains('guild') && zone.path.classList.remove('highlight'));
    }

    static getColors = () => {
        /*  Get assigned guild colors.
        */
        let colors = [];
        Object.keys(this.guildColors).forEach(guild => colors.push(bodyStyles.getPropertyValue('--' + guild + '-color')));

        return colors;
    }

    static updateZonesChart = () => {
        /*  When we update swatch color, we need to update in-progress charts.
        */
        this.all.forEach(zone => zone.updateChart());
    }

    static warnNeighbors = (zoneId) => {
        /*  Verify the neighbors, if there's any progress
            that depends on this zoneId.
        */
        let mapZone = this.getZone(zoneId);
        let neighbors = mapZone.data.neighbors;

        if (!mapZone.owner) return;

        neighbors.forEach(neighbor => {
            let neighborZone = this.getZone(neighbor);

            if (neighborZone.inProgress[mapZone.owner.slice(-1)]) {
                let neineighbors = neighborZone.data.neighbors;
                let isProgressSafe = false;

                neineighbors.forEach(neineighbor => {
                    let neineighborZone = this.getZone(neineighbor);
                    if (neineighborZone.owner && neineighborZone.owner === mapZone.owner && neineighborZone.zoneId !== mapZone.zoneId) {
                        isProgressSafe = true;
                    };
                })

                if (!isProgressSafe) neighborZone.path.classList.add('warn');
            }
        })
    }

    static updateGuildColor = (zoneId) => {
        /* If a guild tile is clicked while not in any mode, change guild color assigned.
        */
        let mapZone = this.getZone(zoneId);
        if (!mapZone.path.classList.contains('guild')) return;

        let colorIndex = this.zoneColors.indexOf(mapZone.color);
        mapZone.color = this.zoneColors[colorIndex + 1 < this.zoneColors.length ? colorIndex + 1 : 0];
        bodyStyles.setProperty('--' + mapZone.owner + '-color', mapZone.color);
            
        Zones.updateZonesChart();
    }

}