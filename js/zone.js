class MapZone {

    constructor(mapGroup, zone, data, map) {
        this.element = mapGroup;
        this.path = zone;
        this.path.dataset['id'] = data.zone;
        this.data = data;
        this.map = map;
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
    import = ({owner, buildings, progress}) => {
        /*  Get zone, reset class then apply new values
        */
        this.buildings = buildings;
        if (owner > -1) {
            this.owner = 'guild' + owner;
            this.path.classList.replace('owner', this.owner);
        }
        progress.forEach(index => this.updateProgress(index, 1));
        this.updateChart();
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

    select() {
        this.path.classList.add('js-active');
    }
    deselect() {
        this.path.classList.remove('js-active');
    }
    getProgress() {
        let indices = [];
        let idx = this.inProgress.indexOf(1);
        while (idx != -1) {
            indices.push(idx);
            idx = this.inProgress.indexOf(1, idx + 1);
        }
        return indices;
    }
    updateProgress = (index, value) => {
        this.inProgress[index] = value;
    }
    addChart = () => {
        let chart = this.element.querySelector('.ct-chart');
        if (!chart) return;

        let options = {
            showLabel: false,
            ignoreEmptyValues: true,
            fullWidth: true
        }
        this.chart = new Chartist.Pie(chart, [], options);
    }
    updateChart = () => {
        if (!this.chart) return;

        let elements = [];
        this.inProgress.forEach((element, index) => {
            elements.push({value: element, className: 'guild' + index});
        })
        this.chart.update({series: elements});
    }
}