const zones = new Zones();
const interface = new Interface();
const version = '0.01b'


function handleMapClick() {
	interface.handleSwitchMap();
}

function handleCopyClick() {
	copyToClipboard(window.location.href.split('#')[0] + '#' + zones.hashZones());
	$('#permalink').attr('data-original-title', 'Copied!').tooltip('show');
}

$('#permalink').on('hidden.bs.tooltip', function () {
  $('#permalink').attr('data-original-title', 'Copy to clipboard')
})

function updateHashMap() {
	
	const mapArray = [];
	var hash = window.location.hash;

	if (hash) {
		//hash = decodeURIComponent(hash);
		const hashArray = hash.replace('#', '').split('&');
		hashArray.forEach(mapZone => {
			let zone = mapZone.split('=');
			let data = zone[1].split(',');

			if (zone[0].toLowerCase() === 'map') {
				interface.handleSwitchMap(data[0]);
			} else {
				mapArray.push({'zone': zone[0], 'owner': data[0], 'buildings': data[1], 'progress': data.slice(2)});
			}
		})
		zones.importZonesWithHash(mapArray);
		window.location.hash = '';
	}
}

function handleSelectClick() {
	interface.selectMapZone();
}

function handleResetClick() {
	interface.resetMap();
}

function handleResetModeClick() {
	interface.toggleResetMode();
}

function handlePickerClick() {
	interface.togglePickerMapZones();
}


function __init__() {
	/*	Setup and load the map if needed
	*/
	$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'});
	updateHashMap();
	window.onhashchange = updateHashMap;
	$('#version').text('version: ' + version);
}

$(document).ready(__init__);
