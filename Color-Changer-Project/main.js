$(document).ready(function() {

	$("#color-range").on("input change", function(){

		//Change Body Background Color
		$("body").css("background-color",$(this).val());

		//Change h1 Color to white if body color is black
		if($("#color-range").val()<="#242424"){
			$("h1").css("color","white");
			$("h2").css("color","white");
			$("h3").css("color","white");
			$("h5").css("color","white");
		}
		else{
			$("h1").css("color","black");	
			$("h2").css("color","black");
			$("h3").css("color","black");
			$("h5").css("color","black");
		}

	});

});