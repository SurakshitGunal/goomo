
 
 function show() {
   document.getElementById("entereddetails").style.display="entereddetails";
 }
 function fname(){
   var firstname = document.getElementById("fn").value;
   document.getElementById("outputfn").innerHTML= firstname;

    var lastname = document.getElementById("ln").value;
    document.getElementById("outputln").innerHTML=lastname;

    var fullname = firstname  + lastname ;
    document.getElementById("outputfl").innerHTML=fullname; 
     
    var male = document.getElementsByName("gender")[0].checked;
    if (!male){
      document.getElementById("outputgender").innerHTML= "female";
    }
    else{
      document.getElementById("outputgender").innerHTML= "male";
    }
    var x=document.getElementById("email1").value;  
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
      return false;  
      }    
    document.getElementById("outputmail").innerHTML= x
    var mn = document.getElementById("mb").value;
    if(mb.value == "") {
      window.alert("Error: Cell number must not be null.");
      number.focus();
      return false;
  }
    document.getElementById("outputnu").innerHTML= mn;
  }
  