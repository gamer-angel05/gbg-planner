const colors = ["#df42ae", "#9d26e1", "#262dd8", "#b8aea7", "#14bcbb", "#b4bf12", "#18ba13", "#c4282a", "#000000"] // [pink,purple,blue,gray,teal,yellow,green,red,black]
const bodyStyles = document.body.style;


class MapZone {

  static guilds = [];
  static all = [];
  static mapContainer = document.querySelector(".js-map");
  static picker = null;
  static selected = null;
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

    /* Class functions */
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
        if (!zone.path.classList.contains("guild")) {
            zone.path.classList.replace(zone.owner, "owner");
            zone.owner = null;
            zone.buildings = 0;
            MapZone.removeActive();
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

    static highlightProvinces = () => {
        MapZone.all.forEach(zone => !zone.path.classList.contains("guild") && zone.path.classList.add("highlight"));
    }

    static dimProvinces = () => {
        MapZone.all.forEach(zone => !zone.path.classList.contains("guild") && zone.path.classList.remove("highlight"));
    }

    /* Map zones functions */
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

        if (MapZone.isResetMode) {
            MapZone.resetZone(this);
            return

        } else if (MapZone.selected === this) {
            // Selected same tile already selected, deselected then.
            MapZone.removeActive()
            return

        } else if (MapZone.isPickerMode) {
            if (this.path.classList.contains("guild")) {
                this.handlePickerClick();
                return

            } else if (MapZone.picker) {
                if (this.owner) this.path.classList.replace(this.owner, "owner");
                this.owner = MapZone.picker;
                this.path.classList.replace("owner", this.owner);

            }
        } else if (this.path.classList.contains("guild")) { 
            // Guild tile
            let colorIndex = colors.indexOf(this.color);
            this.color = colors[colorIndex + 1 < colors.length ? colorIndex + 1 : 0];
            bodyStyles.setProperty("--" + this.path.classList[0] + "-color", this.color);
            return

        }

        /*} else if (!this.owner) {
            // Provinces owned by guilds
            this.owner = MapZone.guilds[0];
            this.path.classList.replace("owner", this.owner);

        } else {
            let guildIndex = MapZone.guilds.indexOf(this.owner);
            let newOwner = guildIndex + 1 > MapZone.guilds.length ? null : MapZone.guilds[guildIndex + 1];
            this.path.classList.replace(this.owner, newOwner || "owner");
            this.owner = newOwner;*/

        this.setupActive()

        //let neighbors = zoneData.info["neighbors"];
        //console.log(neighbors);

        //zoneInfo.attachToDom();

        //Display exhibits
        //document.querySelector(".js-exhibits").style.display = "block";
        //document.querySelector(".js-exhibit-card-container").innerHTML = "";

        //const exhibits = Exhibit.all.filter(exhibit => parseInt(this.zoneId, 10) === exhibit.zoneId);
        //exhibits.forEach(e => e.attachToDom());

        //Display button to get to top of page
        //document.querySelector(".js-to-top").style.display = "block";
    }

    setupActive = () => {
        /* Set active zone
        */
        if (MapZone.selected) MapZone.removeActive();

        const zoneData = Zone.all.find(zone => this.zoneId === zone.id);
        $("#label-zone").text(zoneData.id);
        $("#label-points").text(zoneData.info.points + " pts");

        MapZone.guilds.forEach(guild => $("." + guild + ".swatch")[0].classList.remove("swatch-active"));

        if (this.owner) {
            $("." + this.owner + ".swatch")[0].classList.add("swatch-active");
        }
        for (let i = 3 - zoneData.info.builds || 0; i; i--) {
            $("#build" + (3 - i)).css("display", "none");
        }
        let builds = this.buildings;
        let siegeCamps = Math.floor(builds / 10);
        let watchtowers = builds - (siegeCamps * 10);
        for (let i = 0; i < (builds); i++) {
            if (siegeCamps) {
                $("#build" + i)[0].classList.add("siege-camp");
                siegeCamps -= 1;
            } else if (watchtowers) {
                $("#build" + i)[0].classList.add("watchtower");
                watchtowers -= 1;
            }
        }

        MapZone.selected = this;
        MapZone.all.forEach(zone => zone.path.classList.remove("js-active"));
        this.path.classList.add("js-active");
        $("#nav").css("opacity", "1.0");
    }

    static removeActive = () => {
        /*  Reset to no active zone
        */
        MapZone.guilds.forEach(guild => $("." + guild + ".swatch")[0].classList.remove("swatch-active"));
        MapZone.all.forEach(zone => zone.path.classList.remove("js-active"));
        for (let i = 0; i < 3; i++) {
            let build = $("#build" + i)
            build.css("display", "");
            build[0].classList.remove("siege-camp");
            build[0].classList.remove("watchtower");
        }
        $("#label-zone").text("Zone");
        $("#label-points").text("Points");
        $("#nav").css("opacity", "0.5");
        MapZone.selected = null;
    }
}