class Zone {

  static all = [];
  static container = document.querySelector(".js-zone-info");

  constructor(newZone) {
    this.id = newZone["zone"];
    this.info = newZone;
    this.name = this.id;

    this.nameAsClass = this.name.replace(/'/g, "").replace(/ /g, '-').toLowerCase();
    this.mapElement = document.querySelector(`.${this.nameAsClass}`);
    this.mapElement.dataset["id"] = this.id;

    Zone.all.push(this);
  }

  attractions() {
    return Attraction.all.filter(att => parseInt(att.zoneId, 10) === this.id);
  }

  renderAttractionList(attractions) {
    const header = document.createElement("h2");
    const list = document.createElement("ul");

    header.innerText = "Attractions";

    attractions.forEach(att => {
      list.appendChild(att.renderAsLi());
    })

    Zone.container.appendChild(header);
    Zone.container.appendChild(list);
  }

  attachToDom() {
    Zone.container.parentElement.classList.add("zone-selected");
    Zone.container.innerHTML = "";

    Zone.container.style.backgroundColor = `var(--${this.nameAsClass}-primary)`;

    const name = document.createElement("h1");
    name.innerText = this.name;
    Zone.container.appendChild(name);

    const desc = document.createElement("p");
    desc.innerText = this.description;
    Zone.container.appendChild(desc);

    if (this.attractions().length !== 0) {
      this.renderAttractionList(this.attractions());
    }
  }
}