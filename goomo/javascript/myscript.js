function flight(data) {
   var h1 = document.getElementById("htl");
   var f1 = document.getElementById("flt");
   var p1 = document.getElementById("pac");
   var v1 = document.getElementById("vis");
   var g1 = document.getElementById("gtc");
   var f = document.getElementById("flight");
   var h = document.getElementById("hotels");
   var p = document.getElementById("packages");
   var v = document.getElementById("visa");
   var g = document.getElementById("giftcard");


   if (data == "flight") {
      f.style.display = "block";
      h.style.display = "none";
      p.style.display = "none";
      v.style.display = "none";
      g.style.display = "none";
      f1.classList.add("selectdiv");
      h1.classList.remove("selectdiv");
      p1.classList.remove("selectdiv");
      v1.classList.remove("selectdiv");
      g1.classList.remove("selectdiv");
   }
   if (data == "hotel") {
      f.style.display = "none";
      h.style.display = "block";
      p.style.display = "none";
      v.style.display = "none";
      g.style.display = "none";
      f1.classList.remove("selectdiv");
      h1.classList.add("selectdiv");
      p1.classList.remove("selectdiv");
      v1.classList.remove("selectdiv");
      g1.classList.remove("selectdiv");
   } if (data == "packages") {
      f.style.display = "none";
      h.style.display = "none";
      p.style.display = "block";
      v.style.display = "none";
      g.style.display = "none";
      f1.classList.remove("selectdiv");
      h1.classList.remove("selectdiv");
      p1.classList.add("selectdiv");
      v1.classList.remove("selectdiv");
      g1.classList.remove("selectdiv");
   } if (data == "visa") {
      f.style.display = "none";
      h.style.display = "none";
      p.style.display = "none";
      v.style.display = "block";
      g.style.display = "none";
      f1.classList.remove("selectdiv");
      h1.classList.remove("selectdiv");
      p1.classList.remove("selectdiv");
      v1.classList.add("selectdiv");
      g1.classList.remove("selectdiv");
   } if (data == "giftcard") {
      f.style.display = "none";
      h.style.display = "none";
      p.style.display = "none";
      v.style.display = "none";
      g.style.display = "block";
      f1.classList.remove("selectdiv");
      h1.classList.remove("selectdiv");
      p1.classList.remove("selectdiv");
      v1.classList.remove("selectdiv");
      g1.classList.add("selectdiv");
   }
}
function ok() {
   var z = document.getElementById("abc2");
   z.style.display = "block";
}
var airportname = [];
var k=[]; 
var d =[];
var h =[];
var josn = fetch('https://api.goomo.team/int/master/v2.0/flights/airports')
   .then(function (response) {
      return response.json();
   })
   .then(function (myjson) {
      console.log(myjson);
      z= Object.values(myjson.airports); 
      console.log(z.length);
       for(i=0;i<30/*z.length*/;i++) {
         k.push(myjson.airports[i].an);
         addElement(k[i])
      }
       console.log(k); 
      //  for(i=0;i<1;i++){
      //     h.push(k);
      //     console.log(h);
      //  }
      
   });

   function addElement (h) {
      // for(i=0;i<k.length;i++ ) {
      var newDiv = document.createElement("div"); 
      var newContent = document.createTextNode(h); 
      newDiv.appendChild(newContent);  
      var currentDiv = document.getElementById("fltg10"); 
      currentDiv.appendChild(newDiv)
      // document.body.insertBefore(newDiv, currentDiv); 
   //  }
   };
   function airportnameshow(data){
      var k= document.getElementById("fltg10");
      k.style.display="block";
   }

