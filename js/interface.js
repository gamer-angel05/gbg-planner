class Interface {

    static picker = null;
	static modes = [['select','guild'],['picker','progress'],'reset'];
    
    currentMode = 'select';
    selected = null;
    target = null;
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
        Zones.maps.forEach(map => {
            let mapData = Zones.data[map];
            mapData.zones.forEach(zone => zone.addEventListener('click', this.handleZoneClick));
            zones.setupZonesWithMap(mapData.data, mapData.zones, map, mapData.guilds);
        })
	}

    handleMode = (event) => {
        if (event === this.currentMode) {
            this.toggleMode();
            event = this.currentMode;
        }

        this.updateMode(event);
        switch (event) {
            case 'guild': 
                this.guildMode();
                break;
            case 'select':
                this.selectMode();
                break;
            case 'picker':
                this.pickerMode();
                break;
            case 'progress':
                this.progressMode();
                break;
        }
    }
    toggleMode = () => {
        /*  Use current mode and 
            toggle to the next option.
        */
        const modes = Interface.modes;
        let currentMode = this.currentMode;

        for (let i = 0; i < modes.length; i++) {
            let mode = modes[i];
            if (Array.isArray(mode) && mode.includes(currentMode)) { // stacked button to toggle
                let currentIndex = mode.indexOf(currentMode);
                this.updateMode(mode[currentIndex + 1 < mode.length ? currentIndex + 1 : 0]);
            }
        }
    }
    updateMode = (newMode) => {
        /*  Get current mode button, disable overlay and
            enable new button overlay.
        */
        const modes = Interface.modes;
        let currentMode = this.currentMode;
        let currentButton = $('#' + currentMode + '-mode');
        let newButton = $('#' + newMode + '-mode');

        for (let i = 0; i < modes.length; i++) {
            let mode = modes[i];
            if (Array.isArray(mode) && mode.includes(currentMode) && mode.includes(newMode)) { // stacked button to toggle
                currentButton.css('display', 'none');
                newButton.css('display', 'block');
                break;
            }
        }
        currentButton[0].classList.replace('btn-info', 'btn-dark');
        newButton[0].classList.replace('btn-dark', 'btn-info');
        this.currentMode = newMode;
    }
    guildMode = () => {
        Zones.lockProvinces();
    }

    selectMode = () => {
        /*  Select to individually modify a zone
        */
        Zones.unlockProvinces();
    }

    pickerMode = () => {
        //  Copy paste owner to multiple provinces.
        Zones.lockProvinces();
    }

    progressMode = () => {
        //  Copy paste progress-owner to multiple provinces.
        Zones.lockProvinces();
    }

	handleSwitchMap = (map=null) => {
		/* Switch up the map to appear visually. Hide the old map, display the new one.
		*/
        let currentMap = Zones.currentMap;
        let maps = Zones.maps;

		$('#map-' + currentMap).css('display', 'none');
		$('#button-' + currentMap).css('display', 'none');

		let currentIndex = maps.indexOf(currentMap);
		currentMap = (map) ? map : (currentIndex === maps.length - 1) ? maps[0] : maps[currentIndex + 1];
        Zones.currentMap = currentMap;
		this.deselectZone();

		$('#map-' + currentMap).css('display', 'block');
		$('#button-' + currentMap).css('display', 'block');
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

    handleZoneClick = (event) => {
        /*  Set up the properties for the interface.
        */
        const target = event.target;
        const selected = Zones.getZone(target.classList[0].toUpperCase());
        const currentMode = this.currentMode;

        if (this.isResetMode) {
            if (this.selected) this.deselectZone();
            
            this.selected = selected;
            this.selected.reset();
            this.deselectZone();
            
            return;

        } else if (currentMode === 'picker' || currentMode === 'progress') {
            if (selected.path.classList.contains('guild')) {
                this.picker = selected.owner;
                return;

            } else if (this.picker) {
                if (event.target === this.target) {
                    if (this.isPickerMode) {
                        if (selected.owner === this.picker) {
                            selected.path.classList.replace(selected.owner, 'owner');
                            selected.owner = null;

                        } else {
                            if (selected.owner) selected.path.classList.replace(selected.owner, 'owner');
                            selected.owner = this.picker;
                            selected.path.classList.replace('owner', selected.owner);
                        }
                    } else {
                        let index = this.picker.slice(-1);
                        this.updateZoneChart(index, 1 - selected.inProgress[index], selected); // Toggle between 0 and 1
                    }

                } else {
                    if (currentMode === 'picker') {
                        if (selected.owner) selected.path.classList.replace(selected.owner, 'owner');
                        selected.owner = this.picker;
                        selected.path.classList.replace('owner', selected.owner);
                    } else {
                        this.updateZoneChart(this.picker.slice(-1), 1, selected);
                    }
                }
            }
        } else if (event.target === this.target) {
            // Selected same tile already selected, deselected then.
            this.deselectZone();
            
            return;
        }

        if (currentMode === 'select' && selected.path.classList.contains('guild')) {
            Zones.updateGuildColor(selected.zoneId);
            return;

        } else if (this.selected) {
            this.resetSwatches();
            this.resetBuilds();
            this.selected.deselect();
            Zones.removeWarn();
        }
        
        this.target = target;
        this.selected = selected;
        Zones.warnNeighbors(this.selected.zoneId);
        $('#label-zone').text(this.selected.zoneId);

        // Clear in-progress matching owner
        if (this.selected.owner) this.updateZoneChart(this.selected.owner.slice(-1), 0);

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

    updateZoneChart = (index, value, zone=null) => {
        /*  Update the chart with new values.
        */
        let selected = zone || this.selected;
        selected.updateProgress(index, value);
        selected.updateChart();
    }
}