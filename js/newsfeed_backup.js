
$(document).ready(function(){

  });

var toggle = [false, false, false];

var ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.";


	$( ".article-heading" ).click(function(){
		//variables
		var index = $( ".article-heading" ).index( this ); 	//index of the article
		var heading = $( this ).text();						//heading of current clicked article

			console.log(index);
			console.log(heading);

		$( this ).toggle(toggle[index]);
			console.log("index - " + index +" : " +toggle[index]);

		if (toggle[index] === false) {
			
			$( this ).hide().html("<p style = 'padding: .3em; margin: 0em; font-size: 70%;'>" + ipsum + "</p>")
				.removeClass("article-heading").addClass("blue-back").slideDown();
			console.log(toggle);

		}else if (toggle[index] === true){
			Bah
			$( this ).slideUp(200, function(){
				$( this ).removeClass("blue-back").addClass("article-heading").html(heading).slideDown();
			});

			console.log(toggle);

		}
	});


$( "#nav-btns a" ).click(function(){
	$( "#nav-btns a" ).css("color", "#b0bec5");
	$( this ).css("color", "#fff");
});