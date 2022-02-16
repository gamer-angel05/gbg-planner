const colors = ["#df42ae", "#9d26e1", "#262dd8", "#b8aea7", "#14bcbb", "#b4bf12", "#18ba13", "#c4282a", "#000000"] // [pink,purple,blue,gray,teal,yellow,green,red,black]
const bodyStyles = document.body.style;


class MapZone {

  static guilds = [];
  static all = [];
  static mapContainer = document.querySelector(".js-map");
  static picker = null;
  static isPickerMode = false;
  static isResetMode = false;

    constructor(mapGroup) {
        this.element = mapGroup;
        this.path = mapGroup.querySelector(".js-map-zone");
        this.zoneId = this.path.dataset["id"];

        if (this.path.classList.contains("guild")) {
            // Guild tile
            this.owner = this.path.classList[0];
            
            let usedColor = MapZone.all.filter(zone => zone.color).map(({color}) => color);
            let availableColors = colors.filter(color => !usedColor.includes(color));
            this.color = availableColors[0];

            bodyStyles.setProperty("--" + this.owner + "-color", this.color);

            MapZone.guilds.push(this.owner);
        } else { // map-zone
            this.buildings = 0;
        }

        this.element.addEventListener('click', this.handleClick);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);

        MapZone.all.push(this);
    }

    static importZone = ({zone, owner, buildings}) => {
        /*  Get zone, reset class then apply new values
        */
        let data = MapZone.all.find(e => e.zoneId === zone);

        if (data.owner) data.path.classList.replace(data.owner, "owner");
        
        data.owner = "guild" + owner;
        data.buildings = buildings;
        data.path.classList.replace("owner", data.owner);
    }

    static reset = () => {
        MapZone.all.forEach(zone => MapZone.resetZone(zone));
    }

    static resetZone = (zone) => {
        if (!zone.path.classList.contains("guild") && zone.owner) {
            zone.path.classList.replace(zone.owner, "owner");
            zone.owner = null;
            zone.buildings = 0;
        }
    }

    static lock = () => {
        MapZone.all.forEach(zone => zone.path.classList.add("lock"));
    }

    static lockGuilds = () => {
        MapZone.all.forEach(zone => zone.path.classList.contains("guild") && zone.path.classList.add("lock"));
    }

    static lockProvinces = () => {
        MapZone.all.forEach(zone => !zone.path.classList.contains("guild") && zone.path.classList.add("lock"));
    }

    static unlock = () => {
        MapZone.all.forEach(zone => zone.path.classList.remove("lock"));
    }

    static unlockGuilds = () => {
        MapZone.all.forEach(zone => zone.path.classList.contains("guild") && zone.path.classList.remove("lock"));
    }

    static unlockProvinces = () => {
        MapZone.all.forEach(zone => !zone.path.classList.contains("guild") && zone.path.classList.remove("lock"));
    }


    handleMouseEnter = () => {
        this.path.classList.add("js-hover");
    }
  
    handleMouseLeave = () => {
        this.path.classList.remove("js-hover");
    }

    handlePickerClick = () => {
        MapZone.picker = this.owner;
    }

    handleClick = () => {
        // Picker is active
        if (MapZone.isResetMode) {
            MapZone.resetZone(this);
            return
        } else if (MapZone.isPickerMode && this.path.classList.contains("guild")) {
            this.handlePickerClick();
            return
        }

        // Set active tile
        MapZone.all.forEach(zone => zone.path.classList.replace("js-active", "js-inactive"));
        this.path.classList.replace("js-inactive", "js-active");

        //$("#zone-label").text(this.zoneId);

        const zoneData = Zone.all.find(zone => this.zoneId === zone.id);

        if (this.path.classList.contains("guild")) { 
            // Guild tile
            let colorIndex = colors.indexOf(this.color);
            this.color = colors[colorIndex + 1 < colors.length ? colorIndex + 1 : 0];
            bodyStyles.setProperty("--" + this.path.classList[0] + "-color", this.color);
        } else if (MapZone.picker) {
            if (this.owner) this.path.classList.replace(this.owner, "owner");
            this.owner = MapZone.picker;
            this.path.classList.replace("owner", this.owner);
        } else if (!this.owner) {
            // Provinces owned by guilds
            this.owner = MapZone.guilds[0];
            this.path.classList.replace("owner", this.owner);
        } else {
            let guildIndex = MapZone.guilds.indexOf(this.owner);
            let newOwner = guildIndex + 1 > MapZone.guilds.length ? null : MapZone.guilds[guildIndex + 1];
            this.path.classList.replace(this.owner, newOwner || "owner");
            this.owner = newOwner;
        }


        //let neighbors = zoneData.info["neighbors"];
        //console.log(neighbors);

        //const zoneData = Zone.all.find(zone => this.zoneId === zone.id);
        //zoneInfo.attachToDom();

        //Display exhibits
        //document.querySelector(".js-exhibits").style.display = "block";
        //document.querySelector(".js-exhibit-card-container").innerHTML = "";

        //const exhibits = Exhibit.all.filter(exhibit => parseInt(this.zoneId, 10) === exhibit.zoneId);
        //exhibits.forEach(e => e.attachToDom());

        //Display button to get to top of page
        //document.querySelector(".js-to-top").style.display = "block";
    }
}