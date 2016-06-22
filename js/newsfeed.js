
$(document).ready(function(){

    $( "#article-body" ).hide();

    $( ".article-heading" ).html("Article");

  });

var toggle = "hidden";

var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.";

/*
$( ".article-heading" ).click(function(){
		
	if (toggle == "hidden") {
		
		$( "#article-body" ).slideDown();
		toggle = "shown";
		console.log(toggle);

	}else if (toggle === "shown"){
		
		$( "#article-body" ).slideUp();
		toggle = "hidden";
		console.log(toggle);

	}
}); */

//function onMobileTap(){

	$( ".article-heading" ).click(function(){

		var heading = $( this ).html();
		
		if (toggle == "hidden") {
			
			$( this ).hide().html("<p style = 'padding: .3em; margin: 0em; font-size: 70%;'>" + ipsum + "</p>").removeClass("article-heading").addClass("blue-back").slideDown();
			toggle = "shown";
			console.log(toggle);

		}else if (toggle == "shown"){
			
			$( this ).slideUp(200, function(){
				$( this ).removeClass("blue-back").addClass("article-heading").html("Article").slideDown();
			});

			toggle = "hidden";
			console.log(heading);
			console.log(toggle);

		}
	});
//}

$( "#nav-btns a" ).click(function(){
	$( "#nav-btns a" ).css("color", "#b0bec5");
	$( this ).css("color", "#fff");
});