const zones = new Zones();
const mapGroups = document.querySelectorAll(".map-group");


function handleCopyClick() {
	copyToClipboard(window.location.href.split("#")[0] + "#" + zones.hashZones());
	$("#permalink").attr('data-original-title', "Copied!").tooltip('show');
}

$('#permalink').on('hidden.bs.tooltip', function () {
  $("#permalink").attr('data-original-title', "Copy to clipboard")
})

function updateHashMap() {
	
	const mapArray = [];
	var hash = window.location.hash;

	if (hash) {
		const hashArray = hash.replace("#", "").split("&");
		hashArray.forEach(mapZone => {
			let zone = mapZone.split("=");
			let data = zone[1].split(",");
			mapArray.push({"zone": zone[0], "owner": data[0], "buildings": data[1]});
		})
		zones.importZonesWithHash(mapArray);
		window.location.hash = "";
	}
}

function handleSelectClick() {
	zones.selectMapZone();
}

function handleResetClick() {
	zones.resetMapZones();
}

function handleResetModeClick() {
	zones.toggleResetMode();
}

function handlePickerClick() {
	zones.togglePickerMapZones();
}


function __init__() {
	/*	Setup and load the map if needed
	*/
	$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'});
	zones.setupZonesWithMap(mapGroups);
	updateHashMap();
	window.onhashchange = updateHashMap;
}

$(document).ready(__init__);
