var page = 0;

(function(){
	get_page();
})();

function get_page() {
	this.page++;
	$.getJSON('http://spincoaster.com/page/' + this.page +'?json', function(response) {
		var posts = response.posts;
		for (var i = 0; i < posts.length; i++) {
			require([
				'$api/models',
				'$views/image#Image'
			], function(models, Image){
				'use strict;'

			});
			var article = $('<li></li>');
			var json = posts[i];
			var id = json.guid.split('?')[1];
			// var detailLink = $('<a></a>').attr('class', 'iframe artist').attr('href', json.guid);
			var detailLink = $('<a></a>').attr('class', 'artist').attr('href', 'spotify:artist:6002lb7vby2t0KYnGJYKg0');
			// detailLink.colorbox({iframe:true, width:"100%", height:"100%"});
			// article.append($('<p></p>').text(json.title));
			article.append(detailLink.append($('<img />').attr('class', 'thumbnail').attr('src', json.image[0].thumbnail)));			
			var andmore = $('<p></p>').html(json.post_content);
			andmore.children('a').attr('href', json.guid).attr('class', 'iframe');
			andmore.children('a').colorbox({iframe:true, width:"100%", height:"100%"});
			article.append(andmore);
			$('#articles').append(article);
		}
	});
}

function next_page(params) {
	$.getJSON('http://spincoaster.com?p=' + params + '&json', function(response) {
		var posts = response.posts;
		for (var i = 0; i < posts.length; i++) {
			require([
				'$api/models',
				'$views/image#Image'
			], function(models, Image){
				'use strict;'

			});
			var article = $('<li></li>');
			var json = posts[i];
			var id = json.guid.split('?')[1];
			var detailLink = $('<a></a>').attr('href', 'spotify:app:spincoaster:pages:article:id:'+id);
			article.append($('<p></p>').text(json.title));
			article.append(detailLink.append($('<img />').attr('class', 'thumbnail').attr('src', json.image[0].thumbnail)));			
			var text = json.post_content.re
			article.append($('<div></div>').text());
			$('#articles').html(article);
		}
	});
}