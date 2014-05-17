// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require websocket_rails/main

var dispatcher = new WebSocketRails('localhost:3000/websocket');
var post = {
	title: 'title of the post',
	description: 'description '
};
channel = dispatcher.subscribe('posts');
channel.bind('new', function(data) {
	alert('a new post about '+data.title+' arrived!');
});

function createForSocket() {
	var success = function(message) { alert("Created: " +message.post.title); }
	var failure = function(message) {
		alert("Failed to create Post: " + JSON.stringify(message));
	}
	dispatcher.trigger('create_event', post, success, failure);
};