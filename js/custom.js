var main = new Instafeed({
	clientId: 'dc92ae9a092e4936bbed2c0b40569c7b',
    target: 'instafeed',
    get: 'user',
    userId: '2280825179',
    accessToken: '2280825179.1677ed0.c24d0923a37e4d54a3b1bd02cd2cd24e',
    links: true,
    limit: 9,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    after: function () {
	    var images = $("#instafeed").find('a');
	    $.each(images, function(index, image) {
	      var delay = (index * 75) + 'ms';
	      $(image).css('-webkit-animation-delay', delay);
	      $(image).css('-moz-animation-delay', delay);
	      $(image).css('-ms-animation-delay', delay);
	      $(image).css('-o-animation-delay', delay);
	      $(image).css('animation-delay', delay);
	      $(image).addClass('animated flipInX');
	    });
	  },
    template: '<div class="col-sm-4 visible-xs visible-sm"><div class="thumbnail fade-in" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></div></div><div class="col-sm-4 hidden-xs hidden-sm"><div class="thumbnail fade-in hovereffect" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><div class="overlay"><div class="rotate"><p class="group1"><a href="http://www.facebook.com/nwtattooeugene" target="_blank"><i class="fa fa-facebook"></i></a><hr></p><hr><hr><p class="group2"><a href="{{link}}" target="_blank"><i class="fa fa-instagram"></i></a></p></div></div></a></div></div>'
});
main.run();

var max = new Instafeed({
	clientId: 'dc92ae9a092e4936bbed2c0b40569c7b',
    target: 'maxfeed',
    get: 'user',
    userId: '39821455',
    accessToken: '39821455.1677ed0.552997932ec243f0887d8befb0657038',
    links: true,
    limit: 9,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    after: function () {
	    var images = $("#instafeed").find('a');
	    $.each(images, function(index, image) {
	      var delay = (index * 75) + 'ms';
	      $(image).css('-webkit-animation-delay', delay);
	      $(image).css('-moz-animation-delay', delay);
	      $(image).css('-ms-animation-delay', delay);
	      $(image).css('-o-animation-delay', delay);
	      $(image).css('animation-delay', delay);
	      $(image).addClass('animated flipInX');
	    });
	  },
    template: '<div class="col-sm-4 visible-xs visible-sm"><div class="thumbnail fade-in" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></div></div><div class="col-sm-4 hidden-xs hidden-sm"><div class="thumbnail fade-in hovereffect" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><div class="overlay"><div class="rotate"><p class="group1"><a href="http://www.facebook.com/nwtattooeugene" target="_blank"><i class="fa fa-facebook"></i></a><hr></p><hr><hr><p class="group2"><a href="{{link}}" target="_blank"><i class="fa fa-instagram"></i></a></p></div></div></a></div></div>'
});
max.run();

var jordin = new Instafeed({
	clientId: 'dc92ae9a092e4936bbed2c0b40569c7b',
    target: 'jordinfeed',
    get: 'user',
    userId: '400695715',
    accessToken: '400695715.1677ed0.5b3982ca5fd24ee5a68941d23e325630',
    links: true,
    limit: 9,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    after: function () {
	    var images = $("#instafeed").find('a');
	    $.each(images, function(index, image) {
	      var delay = (index * 75) + 'ms';
	      $(image).css('-webkit-animation-delay', delay);
	      $(image).css('-moz-animation-delay', delay);
	      $(image).css('-ms-animation-delay', delay);
	      $(image).css('-o-animation-delay', delay);
	      $(image).css('animation-delay', delay);
	      $(image).addClass('animated flipInX');
	    });
	  },
    template: '<div class="col-sm-4 visible-xs visible-sm"><div class="thumbnail fade-in" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></div></div><div class="col-sm-4 hidden-xs hidden-sm"><div class="thumbnail fade-in hovereffect" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><div class="overlay"><div class="rotate"><p class="group1"><a href="http://www.facebook.com/nwtattooeugene" target="_blank"><i class="fa fa-facebook"></i></a><hr></p><hr><hr><p class="group2"><a href="{{link}}" target="_blank"><i class="fa fa-instagram"></i></a></p></div></div></a></div></div>'
});
jordin.run();

var ryan = new Instafeed({
	clientId: 'dc92ae9a092e4936bbed2c0b40569c7b',
    target: 'ryanfeed',
    get: 'user',
    userId: '348597836',
    accessToken: '348597836.1677ed0.e0e1283997e344b8b847ed9b2ea1854a',
    links: true,
    limit: 9,
    sortBy: 'most-recent',
    resolution: 'standard_resolution',
    after: function () {
	    var images = $("#instafeed").find('a');
	    $.each(images, function(index, image) {
	      var delay = (index * 75) + 'ms';
	      $(image).css('-webkit-animation-delay', delay);
	      $(image).css('-moz-animation-delay', delay);
	      $(image).css('-ms-animation-delay', delay);
	      $(image).css('-o-animation-delay', delay);
	      $(image).css('animation-delay', delay);
	      $(image).addClass('animated flipInX');
	    });
	  },
    template: '<div class="col-sm-4 visible-xs visible-sm"><div class="thumbnail fade-in" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /></a></div></div><div class="col-sm-4 hidden-xs hidden-sm"><div class="thumbnail fade-in hovereffect" id="instaImg"><a href="{{link}}" target="_blank"><img class="img-responsive" src="{{image}}" /><div class="overlay"><div class="rotate"><p class="group1"><a href="http://www.facebook.com/nwtattooeugene" target="_blank"><i class="fa fa-facebook"></i></a><hr></p><hr><hr><p class="group2"><a href="{{link}}" target="_blank"><i class="fa fa-instagram"></i></a></p></div></div></a></div></div>'
});
ryan.run();

