    var currentModule = "";

$( "document").ready(function(){
	$("#canvas").load("modules/landing-page.html")
});

$( window ).scroll(function(){
	var wScroll = $(this).scrollTop();

	if(wScroll >( $( "#two" ).offset().top) - 400) {
		$("#two img").addClass("visible").delay(100).addClass("animated fadeInLeft");
		$("#two h2").addClass("visible").delay(100).addClass("animated fadeInDown");
		$("#two p").addClass("visible").delay(400).addClass("animated fadeInDown");
		$("#two a").delay(500).addClass("visible").delay(100).addClass("animated fadeIn");
	}

	if(wScroll >( $( "#three" ).offset().top) - 400) {
		$("#three img").addClass("visible").delay(100).addClass("animated fadeInLeft");
		$("#three h2").addClass("visible").delay(100).addClass("animated fadeInDown");
		$("#three p").addClass("visible").delay(400).addClass("animated fadeInDown");
		$("#three a").delay(500).addClass("visible").delay(100).addClass("animated fadeIn");
	}

	if(wScroll >( $( "#four" ).offset().top) - 400) {
		$("#four img").addClass("visible").delay(100).addClass("animated fadeInLeft");
		$("#four h2").addClass("visible").delay(100).addClass("animated fadeInDown");
		$("#four p").addClass("visible").delay(400).addClass("animated fadeInDown");
		$("#four a").delay(500).addClass("visible").delay(100).addClass("animated fadeIn");
	}

	if(wScroll >( $( "#form" ).offset().top) - 100) {
		$("#form h2").addClass("visible").delay(100).addClass("animated fadeInLeft");
		$("#form label").addClass("visible").delay(200).addClass("animated fadeIn");
		$("#form input").addClass("visible").delay(600).addClass("animated fadeIn");
		$("#form select").addClass("visible").delay(600).addClass("animated fadeIn");
		}

	var formOffset =($( "#form" ).offset().top);
	$(".button").click(function(){
		$("html,body").animate({'scrollTop': formOffset }, 40);
	});
})

function clickLandingPage(){

		//if(currentModule!="newsfeeds"){

			if(currentModule==""){
				$( "#canvas" ).load( "modules/landing-page.html" )
				$( "#canvas" ).addClass("animated fadeIn");

			}else{

			$( "#canvas" ).removeClass("fadeIn").addClass( "fadeOutDown" );


		setTimeout(function(){		  
			$( "#canvas" ).load( "modules/landing-page.html" );

			$( "#canvas" ).removeClass(" fadeOutDown hide").addClass("fadeIn");

			currentModule = "landing-page";
			console.log("Module - " + currentModule);
			
		}, 500);	
    	}
    	};


function clickNewsFeed(){

		//if(currentModule!="newsfeeds"){

			if(currentModule==""){
				$( "#canvas" ).load( "modules/newsfeed.html" )
				$( "#article-container" ).addClass("animated fadeInLeft");
				$( "#article-material" ).addClass("animated fadeInLeft");

			}else{

			$( "#article-container" ).removeClass("animated fadeInLeft").addClass( "fadeOutDown" );
			$( "#article-material" ).removeClass("animated fadeInLeft").addClass( "fadeOutDown" );


		setTimeout(function(){		  
			$( "#canvas" ).load( "modules/newsfeed.html" );

			$( "#article-container" ).removeClass(" fadeOutDown hide").addClass("fadeInLeft");
			$( "#article-material" ).removeClass(" fadeOutDown hide").addClass("fadeInLeft");

			currentModule = "newsfeed";
			console.log("clickNewsFeed  " + currentModule);
			
		}, 500);	
    	}

	//	}
    	
    };

function clickSoftware(){
		
			if(currentModule!="softwares"){

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
			

		setTimeout(function(){		  
			$( "#canvas" ).load( "modules/newsfeed.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");

			currentModule = "softwares";
			console.log("clickSoftware  " + currentModule);
		
		}, 500);	
    	}

		

}
