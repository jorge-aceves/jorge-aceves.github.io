var memberCount=0;
var mainContainer,addButton,submitButton,clearButton;
$(document).ready(function() {
mainContainer = document.getElementById("mainContainer");
addButton = document.getElementById("addButton");
submitButton = document.getElementById("submitButton");
clearButton = document.getElementById("clearButton");
addButton.addEventListener("click",checkFunction,false);
submitButton.addEventListener("click",validateFunction,false);
clearButton.addEventListener("click",clearScreen,false);
});

function checkFunction(e){
     if(document.getElementById("nameForm").value !== ""){
            addFunction(nameForm.value);
            document.getElementById("nameForm").value="";
          }
     else{
            alert("You must add a name");
          }
}
function validateFunction(){
  var elements = document.querySelectorAll("p input");
  var resultDiv = document.getElementById("results");
  if(checkText(elements)){
      showValues(elements,resultDiv);
     $("#results").addClass('divClass');
      $("#clearButton").show();
  }else{
      resultDiv.innerHTML="There's a blank input in your form"
      $("#results").addClass('divClass');
  }
}
function showValues(elementsToShow,placeToAdd){
      placeToAdd.innerHTML = "";
      addText(placeToAdd, "The Submitted Values Were");
      var value;  
    for(var i=0;i<elementsToShow.length;i++){
          value = elementsToShow[i].name + " - " + elementsToShow[i].value;
          addText(placeToAdd, value);
            }
}
function addText(placeToAdd,textToAdd){
 var text = document.createTextNode(textToAdd);
  var br = document.createElement("br");
  placeToAdd.appendChild(text);
  placeToAdd.appendChild(br);
}
function checkText(elements){     
          var isCorrect=true;
          for(var i=0;i<elements.length;i++){
            if(elements[i].value===""){
              //alert("#"+elements[i].id);
              $("#"+elements[i].id).addClass('error');
    $("#"+elements[i].id).effect("shake",{ times:2 });
              isCorrect=false;
            }
            else{
              $("#"+elements[i].id).removeClass('error');
            }
          }
  return isCorrect;
}
function addFunction(text){
  var para = document.createElement("p");
  var textN = document.createElement("span");
  textN.innerHTML=text;
  para.appendChild(textN);
  var input = document.createElement("input");
  input.type="text";
  input.id="member"+memberCount;
  input.name=text;
  memberCount++;
  para.appendChild(input);
  mainContainer.appendChild(para);
  $("#submitButton").show();
  $("#mainContainer").addClass('divClass');
}
function clearScreen(){
  mainContainer.innerHTML = "";
  $("#clearButton").hide();
  $("#submitButton").hide();
 document.getElementById("results").innerHTML="";
 $("#mainContainer").removeClass('divClass');
 $("#results").removeClass('divClass');
}