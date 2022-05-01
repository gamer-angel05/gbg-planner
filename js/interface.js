class Interface {

    static picker = null;
    static isPickerMode = false;
    static isProgressMode = false;
    static isResetMode = false;
	
    currentMap = 'waterfalls';
	maps = ['waterfalls', 'volcano'];
    selected = null;
    target = null;
    data = {
        'volcano': {
            'zones': document.querySelectorAll('#map-volcano .map-group'),
            'data': mapZonesVolcano
        },
        'waterfalls': {
            'zones': document.querySelectorAll('#map-waterfalls .map-group'),
            'data': mapZonesWaterfalls
        }
    };
	buildGroups = document.querySelectorAll('.build');
    ownerSwatches = document.querySelectorAll('#owner-section .swatch');
    progressSwatches = document.querySelectorAll('#progress-section .swatch');

	constructor() {
        /*  Setup map and properties related clicks.
        */
		this.ownerSwatches.forEach(group => {
            group.addEventListener('click', this.handleSwatchClick);
            group.addEventListener('mouseenter', this.handleSwatchEnter);
            group.addEventListener('mouseleave', this.handleSwatchLeave);
        })
        this.progressSwatches.forEach(group => {
            group.addEventListener('click', this.handleProgressSwatchClick);
            group.addEventListener('mouseenter', this.handleSwatchEnter);
            group.addEventListener('mouseleave', this.handleSwatchLeave);
        })
        this.buildGroups.forEach(group => {
            group.addEventListener('click', this.handleBuildClick);
        })
        this.maps.forEach(map => {
            let mapData = this.data[map];
            mapData.zones.forEach(zone => zone.addEventListener('click', this.handleZoneClick));
            zones.setupZonesWithMap(mapData.data, mapData.zones);
        });
	}

	handleSwitchMap() {
		/* Switch up the map to appear visually. Hide the old map, display the new one.
		*/
		$('#map-' + this.currentMap).css('display', 'none');
		$('#button-' + this.currentMap).css('display', 'none');

		let currentIndex = this.maps.indexOf(this.currentMap);
		this.currentMap = (currentIndex === this.maps.length - 1) ? this.maps[0] : this.maps[currentIndex + 1];
		this.deselectZone();

		$('#map-' + this.currentMap).css('display', 'block');
		$('#button-' + this.currentMap).css('display', 'block');
	}

	/* Attrition buildings */
    handleBuildClick = (event) => {
        /*  Toggle between attrition buildings and null.
            Add up buildings and set it on the selected zone.
        */
        let current = event.currentTarget;
        
        if (current.classList.contains('siege-camp')) {
            current.classList.replace('siege-camp', 'watchtower');
        } else if (current.classList.contains('watchtower')) {
            current.classList.remove('watchtower');
        } else {
            current.classList.add('siege-camp');
        }

        let total = 0
        this.buildGroups.forEach(group => {
            if (group.classList.contains('siege-camp')) {
                total += 10;
            } else if (group.classList.contains('watchtower')) {
                total += 1;
            }
        })
        this.selected.buildings = total;
    }
    resetBuilds() {
        this.buildGroups.forEach(build => {
            build.classList.remove('siege-camp');
            build.classList.remove('watchtower');
        })
    }

	/* Swatches */
    handleSwatchClick = (event) => {
        /*  When a swatch is selected,
            change the zone to the new owner.
            Reset owner if same swatch clicked.
        */
        let swatch = event.currentTarget;
        if (swatch.classList.contains('swatch-active')) {
            swatch.classList.remove('swatch-active');
            this.selected.path.classList.replace(this.selected.owner, 'owner');
            this.selected.owner = null;
            return;
        }
        this.resetOwnerSwatches()
        swatch.classList.add('swatch-active');
        
        if (this.selected.owner) this.selected.path.classList.replace(this.selected.owner, 'owner');
        
        this.selected.owner = swatch.classList[0];
        this.selected.path.classList.replace('owner', this.selected.owner);
    }
    handleProgressSwatchClick = (event) => {
        /*  When a swatch is selected,
            change the in-progress flag to reflect that.
            Reset in-progress guild if same swatch clicked.
        */
        let swatch = event.currentTarget;

        if (swatch.classList.contains('swatch-active')) {
            swatch.classList.remove('swatch-active');
            this.selected.updateProgress(swatch.classList[0].slice(-1), 0);

        } else {
            swatch.classList.add('swatch-active');
            this.selected.updateProgress(swatch.classList[0].slice(-1), 1);
        }

        this.selected.updateChart();
    }
    handleSwatchEnter = (event) => {
        event.currentTarget.classList.add('js-hover');
    }
    handleSwatchLeave = (event) => {
        event.currentTarget.classList.remove('js-hover');
    }
    resetOwnerSwatches() {
        this.ownerSwatches.forEach(swatch => swatch.classList.remove('swatch-active'));
    }
    resetProgressSwatches() {
        this.progressSwatches.forEach(swatch => swatch.classList.remove('swatch-active'));
    }
    resetSwatches() {
        this.resetOwnerSwatches();
        this.resetProgressSwatches()
    }

    toggleResetMode() {
        /*  Toggle the Erase to reset individual map zones
        */
        if (!this.isResetMode) {
            $('#reset-mode')[0].classList.replace('btn-dark', 'btn-info');
            Zones.lockGuilds();
            Zones.highlightProvinces();
        } else {
            $('#reset-mode')[0].classList.replace('btn-info', 'btn-dark');
            Zones.unlockGuilds();
            Zones.dimProvinces();
        }
        this.isResetMode = !this.isResetMode;
    }
    resetMap() {
        Zones.reset();
        this.deselectZone();
    }

    selectMapZone() {
        /*  Toggle the Select to individually modify a zone
            and disable "picker/progress mode"
        */
        $(this.isPickerMode ? '#picker-mode' : '#progress-mode')[0].classList.replace('btn-info', 'btn-dark');
        this.isPickerMode = false;
        this.isProgressMode = false;
        this.picker = null;
        Zones.unlockProvinces()
        $('#select-mode')[0].classList.replace('btn-dark', 'btn-info');
    }

    togglePickerMapZones() {
        /*  Toggle between the picker, the progress
            to copy paste owner to multiple provinces
        */
        $('#select-mode')[0].classList.replace('btn-info', 'btn-dark');

        let displayed = $('#picker-mode').css('display') === 'block' ? '#picker-mode' : '#progress-mode';

        if ($(displayed)[0].classList.contains('btn-dark')) {
            $(displayed)[0].classList.replace('btn-dark', 'btn-info');

            this.isPickerMode = displayed.includes('picker') ? false : true;
        } else {
            let mode = $(!this.isPickerMode ? '#picker-mode' : '#progress-mode')
            let otherMode = $(this.isPickerMode ? '#picker-mode' : '#progress-mode')

            otherMode.css('display', 'none');
            mode[0].classList.replace('btn-dark', 'btn-info');
            mode.css('display', 'block');
        }
        Zones.lockProvinces();

        this.isPickerMode = !this.isPickerMode;
        this.isProgressMode = !this.isPickerMode;
    }

    handleZoneClick = (event) => {
        /*  Set up the properties for the interface.
        */
        const target = event.target;
        const selected = Zones.all.find(zone => target.classList.contains(zone.zoneId.toLowerCase()));

        if (this.isResetMode) {
            if (this.selected) this.deselectZone();
            
            this.selected = selected;
            this.selected.reset();
            this.deselectZone();
            
            return;

        } else if (this.isPickerMode || this.isProgressMode) {
            if (selected.path.classList.contains('guild')) {
                this.picker = selected.owner;
                return

            } else if (this.picker) {
                if (this.isPickerMode) {
                    if (selected.owner) selected.path.classList.replace(selected.owner, 'owner');
                    selected.owner = this.picker;
                    selected.path.classList.replace('owner', selected.owner);
                } else {
                    console.log(this.picker);
                    selected.updateProgress(this.picker.slice(-1), 1);
                    selected.updateChart();
                }
            }
        } else if (event.target === this.target) {
            // Selected same tile already selected, deselected then.
            this.deselectZone();
            
            return;
        }

        if (selected.path.classList.contains('guild')) {
            Zones.updateGuildColor(selected.zoneId);
            return;

        } else if (this.selected) {
            this.resetSwatches();
            this.resetBuilds();
            this.selected.deselect()
            Zones.removeWarn();
        }
        
        this.target = target;
        this.selected = selected;
        Zones.warnNeighbors(this.selected.zoneId);
        $('#label-zone').text(this.selected.zoneId);

        // Owner swatch
        if (this.selected.owner) {
            $('.' + this.selected.owner + '.swatch')[0].classList.add('swatch-active');
        }
        // Progress swatch
        this.progressSwatches.forEach((swatch, index) => {
            if (this.selected.inProgress[index]) swatch.classList.add('swatch-active');
        })
        // Attrition builds
        let builds = this.selected.buildings;
        let siegeCamps = Math.floor(builds / 10);
        let watchtowers = builds - (siegeCamps * 10);

        for (let i = 0; i < (builds); i++) {
            if (siegeCamps) {
                $('#build' + i)[0].classList.add('siege-camp');
                siegeCamps -= 1;
            } else if (watchtowers) {
                $('#build' + i)[0].classList.add('watchtower');
                watchtowers -= 1;
            }
        };

        this.selected.select();
        $('#nav').css('opacity', '1.0');
    }

    deselectZone = () => {
        /*  Disable active zone.
        */
        this.resetSwatches();
        this.resetBuilds();

        $('#label-zone').text('Zone');
        $('#nav').css('opacity', '0.5');

        this.target = null;
        if (this.selected) {
            Zones.removeWarn();
            this.selected.deselect();
            this.selected = null;
        }
    }
}