const colors = ["#df42ae", "#9d26e1", "#262dd8", "#b8aea7", "#14bcbb", "#b4bf12", "#18ba13", "#c4282a", "#000000"] // [pink,purple,blue,gray,teal,yellow,green,red,black]

class MapZone {

  static guilds = [];
  static all = [];
  static mapContainer = document.querySelector(".js-map");

  constructor(mapGroup) {
    this.element = mapGroup;
    this.path = mapGroup.querySelector(".js-map-zone");
    this.zoneId = this.path.dataset["id"];
    this.owner = null;

    if (this.path.classList.contains("guild")) {
        // owner of the guild tile...
        this.owner = this.path.classList[0];
        let usedColor = MapZone.all.filter(zone => zone.color).map(({color}) => color);
        let availableColors = colors.filter(el => !usedColor.includes(el));
        this.color = availableColors[0];    
        let classGuild = $("." + this.owner);
        classGuild.css("fill", this.color);
      
        classGuild = $("." + this.path.classList[0] + ".guild");
        classGuild.css("stroke", this.color);

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
    let data = MapZone.all.find(e => e.zoneId === zone);
    owner = "guild" + owner;

    if (!data.owner) {
        data.owner = owner;
        data.path.classList.replace("owner", owner);
    } else {
        data.path.classList.replace(data.owner, owner || "owner");
        data.owner = owner;
    }
    data.buildings = buildings;

    let classGuild = $("." + owner);
    classGuild.css("fill", $("." + owner).css("fill")); // force refresh css??
  }

  static reset = () => {
    MapZone.all.forEach(zone => MapZone.resetZone(zone));
  }

  static resetZone = (zone) => {
    if (!zone.path.classList.contains("guild") && zone.owner) {
        zone.path.classList.replace(zone.owner, "owner");
        zone.owner = null;
        zone.path.style.fill = "white"
    }
  }



  handleMouseEnter = () => {
    this.path.classList.add("js-hover");
  }
  
  handleMouseLeave = () => {
    this.path.classList.remove("js-hover");
  }

  handleClick = () => {
    
    // Set active tile
    MapZone.all.forEach(zone => zone.path.classList.replace("js-active", "js-inactive"));
    this.path.classList.replace("js-inactive", "js-active");

    let classGuild = $("." + this.path.classList[0]);
    const zoneData = Zone.all.find(zone => this.zoneId === zone.id);

    if (this.path.classList.contains("guild")) { 
        // Guild tile only
        let classGuild = $("." + this.path.classList[0]);
        let colorIndex = colors.indexOf(this.color);
        this.color = colors[colorIndex + 1 < colors.length ? colorIndex + 1 : 0];

        classGuild.css("fill", this.color);
        classGuild = $("." + this.path.classList[0] + ".guild");
        classGuild.css("stroke", this.color);

        return
    }

    // Provinces owned by guilds
    if (!this.owner) {
      
        this.owner = MapZone.guilds[0];
        this.path.classList.replace("owner", this.owner);
    } else {
      
        let guildIndex = MapZone.guilds.indexOf(this.owner);
        let newOwner = guildIndex + 1 > MapZone.guilds.length ? null : MapZone.guilds[guildIndex + 1];
        this.path.classList.replace(this.owner, newOwner || "owner");
        this.owner = newOwner;
    }
    classGuild.css("fill", this.owner ? $("." + this.owner).css("fill") : ""); // force refresh css??


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