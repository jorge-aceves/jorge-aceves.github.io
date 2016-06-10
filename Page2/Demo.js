
var aboutMeText="My name is Jorge Aceves, I'm a developer, I've worked with Java, HTML5,CSS3,JavaScript amongst others";
var archiveText="This is the archive, any old posts will appear here";
var clickText="Lorem Ipsum";
$(document).ready(function() {
var content = document.getElementById("content");
initialState();
$('nav ul li').hover(
  function() {
    $('ul', this).stop().slideDown(200);
  },
  function() {
    $('ul', this).stop().slideUp(200);
  }
);
});

function initialState(){
  content.innerHTML="";
  addText(content,"Hello, this is the main content of the page. You can add content to it by clicking on the button");
  var element = document.createElement("button");
element.innerHTML = "ClickMe";
element.addEventListener("click",function(){
  addText(content,clickText);
}); 
content.appendChild(element);
var element = document.createElement("button");
element.innerHTML = "Clear";
element.addEventListener("click",function(){
  content.innerHTML="";
  initialState();
}); 
content.appendChild(element);
  
var br = document.createElement("br");
content.appendChild(br);
  
 var aboutMe = document.getElementById("aboutMe");
  aboutMe.addEventListener("click",function(){
    setText(content,aboutMeText);
  });
var mainSpan = document.getElementById("Main");
  mainSpan.addEventListener("click",function(){
    initialState();
  });
 var archive = document.getElementById("Archive");
  archive.addEventListener("click",function(){
    setText(content,archiveText);
  }); 

 var dropMenu = document.querySelector("#dropDown");
 dropMenu.addEventListener("click",dropClick,false);

}
function dropClick(e){
  console.log(e.target);
  if(e.target !== e.currentTarget){
    var clickedItem = e.target;
    alert("You clicked "+clickedItem.text);
  }
  e.stopPropagation();
}

function setText(placetoAdd,textToAdd){
  placetoAdd.innerHTML = textToAdd;
}
function addText(placeToAdd,textToAdd){
 var text = document.createTextNode(textToAdd);
  var br = document.createElement("br");
  placeToAdd.appendChild(text);
  placeToAdd.appendChild(br);
}


