const mapGroups = document.querySelectorAll(".map-group");

zones.setupZonesWithMap(mapGroups);

function handleCopyClick() {
	copyToClipboard(window.location.href.split("#")[0] + "#" + zones.hashZones())
	$("#permalink").attr('data-original-title', "Copied!").tooltip('show');
}

$('#permalink').on('hidden.bs.tooltip', function () {
  $("#permalink").attr('data-original-title', "Copy to clipboard")
})


function handleResetClick() {
	zones.resetMapZones();
}
