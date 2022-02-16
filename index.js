const zones = new Zones();
const mapGroups = document.querySelectorAll(".map-group");

zones.setupZonesWithMap(mapGroups);

function handleCopyClick() {
	copyToClipboard(window.location.href.split("#")[0] + "#" + zones.hashZones())
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


function handleResetClick() {
	zones.resetMapZones();
}

function __init__() {
	/*	Load the map if needed
	*/
	$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'});

	updateHashMap();
	window.onhashchange = updateHashMap;
}

$(document).ready(__init__);
