'use strict'

!function ( window, document, math, undefined ) {

  var iScroller = function ( element ) {
  	var init,  						addEvents,   		 refresh,    	wrapper,
  			scroller,   			maxScrollY,  		 scrollPage, 	currentPosition,
  			defPageRoll,  		getNewPosition,  lineHeaders, scrollPageLine;

		getNewPosition = function ( direction ) {
			var currentPageRoll = currentPosition + (direction >= 0 ? -defPageRoll : defPageRoll);
			if ( currentPageRoll >= 0 ) { currentPageRoll = 0; };
			if ( currentPageRoll < maxScrollY ) { currentPageRoll = maxScrollY; };
			return currentPageRoll;
		};

    scrollPageLine = function () {
      var style;
  		for( var i=0; i <= lineHeaders.length-1; i++) {
  			var currentPositionLine = 0;
  			if ( ~currentPosition >= lineHeaders[i].offsetTop )  {
					currentPositionLine = ~currentPosition - lineHeaders[i].offsetTop ;
  			};
	    	style =
	   			'-webkit-transform: translate(0px,' + currentPositionLine + 'px);' +
	        '-moz-transform: translate(0px, ' 	+ currentPositionLine + 'px);' +
	        '-ms-transform: translate(0px, ' 		+ currentPositionLine + 'px);' +
	        '-o-transform: translate(0px, ' 		+ currentPositionLine + 'px);';
  			lineHeaders[i].setAttribute( 'style', style );
  		};
    };

    scrollPage = function ( event ) {
    	if (  event.deltaY ) {
    		currentPosition = getNewPosition( event.deltaY );
	    	var style =
	   					 '-webkit-transform: translate(0px,'  + currentPosition + 'px);' +
	             '-moz-transform: translate(0px, ' 		+ currentPosition + 'px);' +
	             '-ms-transform: translate(0px, ' 		+ currentPosition + 'px);' +
	             '-o-transform: translate(0px, ' 			+ currentPosition + 'px);';
	    	scroller.setAttribute( 'style', style );
	    	scrollPageLine();
    	};
    };

    addEvents = function() {
    	wrapper.addEventListener( 'wheel', scrollPage );
    	wrapper.addEventListener( 'mousewheel', scrollPage );
    };

    init = function () {
	    wrapper = typeof element === 'string' ? document.querySelector(element) : element;

	    scroller = wrapper.children[1];
	    lineHeaders = wrapper.querySelectorAll(".scroller-line-header");
	    wrapper.style.overflow = 'hidden';

	    wrapper.wrapperHeight = wrapper.clientHeight;
	    scroller.scrollerHeight = scroller.offsetHeight;
	    maxScrollY = wrapper.wrapperHeight - scroller.scrollerHeight;

	    currentPosition = 0;
			defPageRoll	= 100;
    	addEvents();
    };

    init();
  };

	window.iScroller = iScroller;
  iScroller.prototype = iScroller;

} ( window, document, Math, undefined );
