'use strict'

!function ( window, moduleIScroller ) {

	moduleIScroller.service( 'dataService', [], function () {
		var tempData = [
			"A Camp",                    "A Certain Ratio",         "A Change of Pace",           "A Dark Halo",
			"Calla (группа)", 					 "Calle 13", 								"Calle París", 								"Callejon",
			"Bad Meets Evil", 					 "Bad Religion",	 					"Bad Sector", 								"Badfinge",
			"A Day to Remember",         "A Filetta",           		"A Flock of Seagulls",   		  "A Friend In London",
			"Camo and Krooked", 				 "Camouflage", 							"Campo Di Marte", 						"Can (группа)",
			"Capitan Tifus", 						 "Caprice",									"Capsule",										"Captain Beyond",
			"A Wilhelm Scream",          "A Witness",            		"A-ha",                    		"A.C.T",
			"A*Teens",               		 "Aarzemnieki",          		"Abandon All Ships",      		"Abattoir",
			"ABBA",                 		 "Abigor",            			"Abingdon Boys School",    		"Abney Park",
			"Abraxas (группа)",          "Abruptum",          			"Absenth",                		"Absolute Body Control",
			"Absurd",             	 		 "B’z",   									"B12 (группа)",   						"Baal Zebuth",
			"Baba Yaga",  						   "Babylon (группа)",    		"Babylon A.D. (группа)",      "Babylon Whores",
			"Babylon Zoo",  						 "BABYMETAL",  							"Babyshambles", 							"Baccara",
			"Bachman-Turner Overdrive",  "Back-On",    							"Backstreet Boys", 						"Backyard Babies",
			"Bad Astronaut", 						 "Bad B. Альянс", 					"Bad Balance",  							"Bad Boys Blue",
			"Bag Raiders", 							 "Baha Men",								"Bahroma", 										"Bajofondo",
			"A Hawk and a Hacksaw",  		 "A La Carte",           		"A Place to Bury Strangers",  "A Tribe Called Quest",
			"Bakerton Group", 					 "Bal-Sagoth",        			"C-Block",									  "C+C Music Factory",
			"Cabaret Voltaire",    			 "Cabernet Deneuve", 				"Cacophony", 									"Cactus (группа)",
			"Cage the Elephant", 				 "Cake (группа)", 					"Caliban", 										"California Guitar Trio",
			"Calling", 							     "Camel (группа)",          "Camera Obscura (группа)",    "Camerata Mediolanense",
			"Aborted",              		 "Above All",         			"Above the Law",          		"Abrasive Wheels",
			"Can-linn", 								 "Canadian Brass",					"Candiria",										"Candlebox",
			"Candlemass", 							 "Candy (группа)",	 				"Caninus", 										"Canned Heat",
			"Bad Brains", 							 "Bad Company", 						"Bad Lieutenant",	 						"Bad Manners",
			"Cannibal Corpse", 					 "Cansei de Ser Sexy", 			"Capharnaum", 								"Capital Cities"
		];

		var getTempData = function () {
			return tempData.sort();
		};

	  return {
	  	getTempData: 		getTempData
	  };
	});

} ( window, window.moduleIScroller, undefined );
