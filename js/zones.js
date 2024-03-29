const bodyStyles = document.body.style;

class Zones {

    static guilds = [];
    static all = [];
    static guildColors = {
        'guild0': '#df42ae',
        'guild1': '#9d26e1',
        'guild2': '#262dd8',
        'guild3': '#f37231',
        'guild4': '#14bcbb',
        'guild5': '#b4bf12',
        'guild6': '#18ba13',
        'guild7': '#c4282a'
    };
    static zoneColors = ['#df42ae', '#9d26e1', '#262dd8', '#f37231', '#14bcbb', '#b4bf12', '#18ba13', '#c4282a', '#b8aea7'];
    // [pink,purple,blue,orange,teal,yellow,green,red,gray]
    
    static currentMap = 'waterfalls';
    static maps = ['waterfalls', 'volcano'];
    static data = {
        'volcano': {
            'zones': document.querySelectorAll('#map-volcano .map-group'),
            'data': mapZonesVolcano,
            'guilds': guildZonesVolcano
        },
        'waterfalls': {
            'zones': document.querySelectorAll('#map-waterfalls .map-group'),
            'data': mapZonesWaterfalls,
            'guilds': guildZonesWaterfalls
        }
    };

    constructor() {
        /*  Setup guild colors to css variable and assign
        */
        for (const [key, value] of Object.entries(Zones.guildColors)) {
            bodyStyles.setProperty('--' + key + '-color', value);
        }
    }

    setupZonesWithMap(mapData, mapGroups, map, guilds) {
        mapGroups.forEach(group => {
            let mapZone = group.querySelector('.js-map-zone');
            let data = mapData.find(map => mapZone.classList[0].toUpperCase() === map.zone);
            
            let isGuild = guilds.findIndex((element) => element === data.zone);
            if (isGuild > -1) this.assignGuildZones(mapZone, 'guild' + isGuild);
            
            let zone = new MapZone(group, mapZone, data, map);

            Zones.all.push(zone);
            if (zone.path.classList.contains('guild')) {
                zone.color = Zones.guildColors[zone.owner];
                Zones.guilds.push(zone);
            }
        })
    }

    assignGuildZones(zone, guild) {
        zone.classList.replace('province', 'guild');
        zone.classList.replace('owner', guild);
    }

    importZonesWithHash(zones) {
        /* Reset map, then import data from hash string
        */
        Zones.reset();
        zones.forEach(zone => {
            let mapZone = Zones.getZone(zone.zone);

            if (mapZone) {
                mapZone.import(zone);
            }
        });
    }
    
    hashZones() {
        /*  Hash that returns all map zones as a single string, 
            ZONE=<owner>&<buildings>-ZONE=<owner>&<buildings>
        */
        let currentMap = Zones.currentMap;
        let hash = 'map=' + currentMap + '&';
        Zones.getZones().forEach(zone => {
            let inProgress = zone.getProgress();
            if ((zone.path.classList.contains('province')) && (zone.owner || zone.buildings > 0 || inProgress.length)) {
                hash += zone.zoneId + '=' + (zone.owner ? zone.owner.slice(-1) : -1) + ',';
                hash += zone.buildings;
                if (inProgress.length) hash += ',' + inProgress.join();

                hash += '&';
            }
        })
        if (hash.endsWith('&')) hash = hash.slice(0, -1);
        //hash = encodeURIComponent(hash);
        
        return hash;
    }

    static getZone = (zoneId) => {
        return this.getZones().find(zone => zone.zoneId === zoneId);
    }

    static getZones() {
        return this.all.filter(({map}) => map === this.currentMap);
    }

    static reset = () => {
        this.getZones().forEach(zone => zone.reset());
    }

    static removeWarn = () => {
        this.getZones().forEach(zone => zone.path.classList.remove('warn'));
    }

    static lock = () => {
        this.getZones().forEach(zone => zone.path.classList.add('lock'));
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
    }

}