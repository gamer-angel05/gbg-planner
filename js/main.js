const zones = new Zones();

function __init__() {
	/*	Load the map if needed
	*/
	$('[data-toggle="tooltip"]').tooltip({trigger : 'hover'});

	updateHashMap();
	window.onhashchange = updateHashMap;
}

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

function add_data(documentation) {
	/*	Add the data to drop menu and scroll
	*/
	let topics = [...new Set(documentation.map(({Topic}) => Topic))];

	topics.forEach((topic, topic_index) => {
		if (!topic) return

		let article_href = topic.replace(/ /g, "-").toLowerCase()
		add_dropdownmenu(topic, article_href);
		$("#scroll_content").append("<h2 id=" + article_href + ">" + topic + "</h2>");

		let articles = documentation.filter((e) => e.Topic === topic);
		articles.forEach((article, index) => {
			let tags = article.Tags ? article.Tags.replace(/\n/g, "").split(",") : [];

			if (article.Text) {
				let href = article_href;

				if (article.Article) {
					href += "-" + article.Article.replace(/ /g, "-").toLowerCase();
					add_dropdownmenu("--" + article.Article, href);
				};
				article.Text = substitute_tags(article.Text, tags);
				add_content(article.Article, article.Text, href);
			}
		});
		$("#scroll_content").append('<hr class="divider">');
	});
}

function get_image(url) {
	if (!url) return ""

	return '<a href="' + url + '" data-toggle="lightbox"><img src="' + url + '" class="img-max" /></a>';
}

function get_link(url, title) {
	if (!url) return title

	if (url.startsWith('#')) {
		return '<a href="' + url + '">' + (title || url || "link") + '</a>';
	}
	return '<a target="_blank" href="' + url + '">' + (title || url || "link") + '</a>';
}

function add_dropdownmenu(title, index) {
	let link = '<a class="dropdown-item" href="#' + index + '">' + title + '</a>';
	$("#scroll_dropmenu").append(link);
}

function add_content(title, content, index) {
	var s = '<h4 id="' + index + '">' + title + '</h4>';
	s += '<p style="white-space: pre-wrap;">' + content + '</p>';
	$("#scroll_content").append(s);
}

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
                event.preventDefault();
                $(this).ekkoLightbox();
            });


$(document).ready(__init__);
