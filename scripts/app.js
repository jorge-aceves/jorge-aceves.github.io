function calcula(){
  var res=document.getElementById("res");
  var v1 = document.getElementById("v1").value;
  var v2 = document.getElementById("v2").value;
  var operacion=document.getElementById("operacion").value;
 
  if(v1=="" || v2==""){
   res.innerHTML="Error, both inputs should be filled";  
   res.style.color="orange";
   return;
  }
  if(isNaN(v1) || isNaN(v2)){
    res.innerHTML="Error, inputs should be numbers"; 
    res.style.color="orange";
   return;
  }
  
  var op = v1+operacion+v2;
  var resultado = eval(op);
  
  res.innerHTML = "The result is " + resultado;
  if(resultado >= 0)
  res.style.color="green";
  else
  res.style.color="red";
}
function clearAll(){
  document.getElementById("res").innerHTML="";
  document.getElementById("v1").value="";
  document.getElementById("v2").value="";
  document.getElementById("operacion").value="+";
}