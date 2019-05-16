var fname ;
var myName;
var outputName;
function fname(){
    if(nameid!=null){  
    var myName = document.getElementById("nameid").value;
    document.getElementById("outputName").innerHTML =myName; 
    window.captureEvents(Event.CLICK);
    window.onclick = page_click;
    function page_click() {
        alert('page click event detected!');
  
}
     
}}
