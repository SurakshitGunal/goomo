
 
 function fname(){
   var firstname = document.getElementById("fn").value;
   document.getElementById("outputfn").innerHTML= firstname;

    var lastname = document.getElementById("ln").value;
    document.getElementById("outputln").innerHTML=lastname;

    var fullname = firstname  + lastname ;
    document.getElementById("outputfl").innerHTML=fullname; 
     
   
  }
  function mfgender(){
    var male = document.getElementsByName("gender")[0].checked;
    if (!male){
      document.getElementById("outputgender").innerHTML= "female";
    }
    else{
      document.getElementById("outputgender").innerHTML= "male";
    }
  }
  function mail(){
    var mail = document.getElementById("email").value;
    document.getElementById("outputmail").innerHTML= mail;
  }
  function mbn(){
    var mn = document.getElementById("mb").value;
    document.getElementById("outputnu").innerHTML= mn;
  }
  