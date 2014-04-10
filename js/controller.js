'use strict'

!function ( window, moduleIScroller, iScroller ) {

	moduleIScroller.controller( 'newCtrl', ['dataService'], function ( dataService ) {

		var templateString, templateCompileFunction, instScroller, element;

		element = document.querySelector('#wrapper')

		templateString =
		'<div class="scroller-header"></div>'+
		'<article id="scroller">' +
				'<% var currentLetter; %>'+
				'<ul>' +
					'<% for (var index in this.data) { %>' +
						'<% if ( currentLetter !== this.data[index].slice(0,1) ) { %>' +
							'<li class="scroller-line-header"><% currentLetter = this.data[index].slice(0,1) %></li>' +
						'<% }; %>' +
						'<li><% this.data[index] %></li>' +						
					'<% }; %>' +
				'</ul>' +
		'</article>';

		element.innerHTML = moduleIScroller.templater( templateString )({ data: dataService.getTempData() });

		instScroller = new iScroller( element );
	});

} ( window, window.moduleIScroller, window.iScroller, undefined );
