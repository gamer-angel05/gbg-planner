class MapZone {

  static picker = null;
  static isPickerMode = false;

    constructor(mapGroup, zone, data) {
        this.element = mapGroup;
        this.path = zone;
        this.path.dataset['id'] = data.zone;
        this.data = data;
        this.zoneId = data.zone;
        this.inProgress = [0, 0, 0, 0, 0, 0, 0, 0];
        this.buildings = 0;

        if (this.path.classList.contains('guild')) {
            this.owner = this.path.classList[1];
        }

        this.addChart();

        //this.element.addEventListener('click', this.handleClick);
        this.element.addEventListener('mouseenter', this.handleMouseEnter);
        this.element.addEventListener('mouseleave', this.handleMouseLeave);
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
        //data.inProgress = progress;
    }
    reset() {
        if (!this.path.classList.contains('guild')) {
            this.path.classList.replace(this.owner, 'owner');
            this.owner = null;
            this.buildings = 0;
            this.inProgress = [0, 0, 0, 0, 0, 0, 0, 0];
            this.updateChart();
        }
    }


    /* Map zones functions */
    handleMouseEnter = () => {
        this.path.classList.add('js-hover');
    }
    handleMouseLeave = () => {
        this.path.classList.remove('js-hover');
    }

    handlePickerClick = () => {
        MapZone.picker = this.owner;
    }

    select() {
        this.path.classList.add('js-active');
    }
    deselect() {
        this.path.classList.remove('js-active');
    }

    updateProgress = (index, value) => {
        this.inProgress[index] = value;
    }
    addChart = () => {
        const chart = this.element.querySelector('.chart');
        if (!chart) return;

        this.chart = new Chart(chart, {
            type: 'pie',
            data: {
                datasets: [{
                    data: this.inProgress,
                    backgroundColor: Zones.getColors(),
                    borderColor: '#d6d6d6',
                    borderWidth: 1.5
                }]
            },
            options: {
                animation: false,
                events: [],
                normalized: true,
                parsing: false
            }
        });
    }
    updateChart = () => {
        if (!this.chart) return;

        this.chart.data.datasets[0].data = this.inProgress;
        this.chart.data.datasets[0].backgroundColor = Zones.getColors();
        this.chart.update();
    }
}