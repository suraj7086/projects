/*$("li").click(function(){
	$(this).css("color","gray");
	$(this).css("text-decoration","line-through");
});
*/
/*
$("li").click(function(){
	console.log($(this).css("color"));
	if($(this).css("color") === "rgb(128, 128, 128)")
	{   
        $(this).css({
        	color: "black",
        	textDecoration: "none"
        });


	}
	else{
	$(this).css({
		color:"gray",
		textDecoration:"line-through"
	});
  }
});*/
$("ul").on("click","li",function(){
  $(this).toggleClass("completed");
});
$("ul").on("click","span",function(event){
  $(this).parent().fadeOut(200,function(){
    $(this).remove();
  });
  event.stopPropagation();
});
$("input[type='text'").keypress(function(event){
	if(event.which === 13)
	{
		var value = $(this).val();
		$(this).val("");
		$("ul").append("<li> <span> <i class='fa fa-trash'> </i> </span> " + value + "</li>");
	}
});
$(".fa-pencil").click(function(){
	$("input[type='text'").fadeToggle(10);
});