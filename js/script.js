    var currentModule = "";

$(document).ready(function(){

    clickNewsFeed();

  });

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
