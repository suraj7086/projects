var colors = randomColorGenerator(6);
var squares = document.getElementsByClassName("square");
var pickedcolor = colors[colorpicker()]
var colordisplay = document.getElementById("colornamedisplay");
colordisplay.textContent = pickedcolor;
var h1 = document.querySelector("h1");
var reset = document.querySelector("#resetbutton");
var displaymessage = document.querySelector("#message");
var easybtn = document.querySelector(".easybtn");
var hardbtn = document.querySelector(".hardbtn");

easybtn.addEventListener("click",function(){
    easybtn.classList.add("selected");
    hardbtn.classList.remove("selected");

    colors = randomColorGenerator(3);
    pickedcolor = colors[colorpicker()];
    colordisplay.textContent = pickedcolor;

    for(var i=0;i<colors.length;i++){
         if(colors[i]){

    	squares[i].style.background = colors[i];
                  }
 
    }

});
hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
});

reset.addEventListener("click",function(){
	// assign new color on click button
	colors = randomColorGenerator(6);
    // squares box color change
    for(var i=0;i<colors.length;i++){
    	squares[i].style.background = colors[i];
    }
    // pick new color to choose
	pickedcolor = colors[colorpicker()]
    // display picked color
	colordisplay.textContent = pickedcolor;
	h1.style.background = "#242742";

});
for(var i=0;i<colors.length;i++){
    squares[i].style.background = colors[i];
    //addd an event listener 
    squares[i].addEventListener("click",function(){
    	var clickedcolor = this.style.background;
    	if(clickedcolor == pickedcolor){
    		displaymessage.textContent = "Correct!";
    		h1.style.background = clickedcolor;
    		changecolor(pickedcolor);
    		reset.textContent = "Play Again?";

    	}
    	else{
    		this.style.background = "#242742";
    		displaymessage.textContent = "Try Again";
    	}
    });
}
function randomColorGenerator(num){
	var arr = [];
	for(var i=0;i<num;i++){
		arr.push(randomColor())
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " +g +", "+b +")";
}
function colorpicker(){
	var pick = Math.floor(Math.random()* colors.length);
	return pick;
}
function changecolor(parameter){
  for(var i=0;i<colors.length;i++){
  	squares[i].style.background = pickedcolor;
  }
}