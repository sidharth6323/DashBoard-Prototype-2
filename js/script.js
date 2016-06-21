    var currentModule = "";

$(document).ready(function(){

    clickNewsFeed();

  });

function clickNewsFeed(){

		if(currentModule!="newsfeed"){

			if(currentModule==""){
				$( "#canvas" ).load( "modules/newsfeed.html" ).addClass("animated fadeInLeft")
			}else{

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
		console.log("clickNewsFeed");

		setTimeout(function(){		  
			$( "#canvas" ).load( "modules/newsfeed.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");
			currentModule = "newsfeed";
		
		}, 500);	
    	}

		}
    	
    };

function clickSoftware(){
		
			if(currentModule!="softwares"){

			$( " #canvas " ).removeClass("fadeInLeft").addClass( "fadeOutRight" );
			
			console.log("clickNewsFeed");

		setTimeout(function(){		  
			$( "#canvas" ).load( "modules/newsfeed.html" );
			$( "#canvas" ).removeClass(" fadeOutRight hide").addClass("fadeInLeft");
			currentModule = "softwares";
		
		}, 500);	
    	}

		

}
