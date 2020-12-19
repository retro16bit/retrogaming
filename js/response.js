//updated
//hover, click for nav

// connects side sub-nav and hamburger icon
//targets anything below the id.

function my(){
  if (document.getElementById("highlight").innerHTML === "about"){        
      document.getElementById("about").style.color="red";
    }
    else if (document.getElementById("highlight").innerHTML === "game"){
      document.getElementById("games").style.color="red";
      document.getElementById("colorize").style.fill="red";
    }else if (document.getElementById("highlight").innerHTML === "cont"){
      document.getElementById("cont").style.color="red";
    }
  document.getElementById("nav-lists").addEventListener("click", clickedSomething);
  document.getElementById("nav-lists").addEventListener("mouseover", hover);
  document.getElementById("nav-lists").addEventListener("mouseout", gone);
  document.getElementById("ham").addEventListener("click", click);
  document.getElementById("sub_nav_top").style.display="block";
  //this fixed error for some reason...
  document.getElementById("main").addEventListener("click", clicked);
  document.getElementById("main").addEventListener("mouseover", hov);
//  document.getElementById("main").addEventListener("mouseout", off);
}  


//hover for side sub-nav
function hover(event){
//  console.log(event.target.id);
  if ((event.target.id)==="aboutS") {
    document.getElementById("aboutS").style.color="red";
    document.getElementById("gameS").style.color="white";
    document.getElementById("cR").style.fill="white";
    document.getElementById("contS").style.color="white";
    document.getElementById("close").style.color="white";
    document.getElementById("go_back").style.color="white"; 
    document.getElementById("back_arrow").style.fill="white";         
  }else if ((event.target.id)==="gameS"){
    document.getElementById("gameS").style.color="red";
    document.getElementById("cR").style.fill="red";
    document.getElementById("contS").style.color="white"; 
    document.getElementById("aboutS").style.color="white"; 
    document.getElementById("close").style.color="white"; 
    document.getElementById("go_back").style.color="white"; 
    document.getElementById("back_arrow").style.fill="white";     
  }else if ((event.target.id)==="contS"){
    document.getElementById("contS").style.color="red";
    document.getElementById("gameS").style.color="white";
    document.getElementById("cR").style.fill="white";    
    document.getElementById("aboutS").style.color="white"; 
    document.getElementById("close").style.color="white"; 
    document.getElementById("go_back").style.color="white"; 
    document.getElementById("back_arrow").style.fill="white";         
  }
  else if ((event.target.id)==="close"){
    document.getElementById("close").style.color="red";
    document.getElementById("contS").style.color="white";
    document.getElementById("gameS").style.color="white";  
    document.getElementById("cR").style.fill="white";    
    document.getElementById("aboutS").style.color="white"; 
    document.getElementById("go_back").style.color="white"; 
    document.getElementById("back_arrow").style.fill="white"; 
  }else if ((event.target.id)==="go_back"){
    document.getElementById("close").style.color="white";
    document.getElementById("contS").style.color="white";
    document.getElementById("gameS").style.color="white";
    document.getElementById("cR").style.fill="white";        
    document.getElementById("aboutS").style.color="white"; 
    document.getElementById("go_back").style.color="red"; 
    document.getElementById("back_arrow").style.fill="red";     
  }
}
//hover off side sub-nav
function gone(event){
//  console.log(event.target.id);
  if ((event.target.id)==="aboutS") {
    document.getElementById("aboutS").style.color="white";
  }else if ((event.target.id)==="contS"){
    document.getElementById("contS").style.color="white";
    document.getElementById("cR").style.fill="white";
  }else if ((event.target.id)==="gameS"){
    document.getElementById("gameS").style.color="white";
  }else if ((event.target.id)==="close"){
    document.getElementById("close").style.color="white";
  }else if ((event.target.id)==="go_back"){
    document.getElementById("go_back").style.color="white"; 
    document.getElementById("back_arrow").style.fill="white"; 
  }
}
//click on anything in side sub-nav
function clickedSomething(event){
//  console.log(event.target.id);
  if ((event.target.id)==="gameS") {
//    console.log("about");
    document.getElementById("show_back").style.display="block";
    document.getElementById("aboutS").innerHTML ="Apple1";
    document.getElementById("aboutS").href = "apple1";
    document.getElementById("contS").innerHTML ="Amstrad CPC";
    document.getElementById("contS").href = "amstrad-cpc";
    //hidden section
    document.getElementById("ae").style.display="block"; 
    document.getElementById("ae").style.color="white"; 

    document.getElementById("atarS").style.display="block";
    document.getElementById("atarS").style.color="white";
    document.getElementById("virt").style.display="block";
    document.getElementById("virt").style.color="white"; 
    document.getElementById("superS").style.display="block";
    document.getElementById("superS").style.color="white"; 
    
    //show game section debug
    document.getElementById("gameS").classList.add("hidden");
    console.log("hmm...");
    document.getElementById("right_arrow").style.opacity="0";
  }else if ((event.target.id)==="go_back") {
    document.getElementById("show_back").style.display="none";
    document.getElementById("aboutS").innerHTML ="ABOUT";
    document.getElementById("aboutS").href = "about.html";
    document.getElementById("right_arrow").style.opacity="1";
    document.getElementById("contS").innerHTML ="CONTACT";
    document.getElementById("contS").href = "contact.html";
    document.getElementById("gameS").classList.remove("hidden");
    document.getElementById("atarS").style.display="none";
    document.getElementById("virt").style.display="none";
    document.getElementById("superS").style.display="none";
    document.getElementById("ae").style.display="none";
  }else if ((event.target.id)==="close") {
    document.getElementById("sub_nav").style.display="none";
    document.getElementById("back").style.display="none";
//    document.getElementById("nothing").classList.remove("hideall");
  }
}
//click on hamburger to show side sub-nav
function click(event){
  document.getElementById("sub_nav").style.display="block";
  document.getElementById("back").style.display="block";
//  document.getElementById("nothing").classList.add("hideall");
}

//sub nav
function clicked(event){
  var sub_nav = document.getElementById("sub_nav_top"),
    downC = document.getElementById("downC"),
    color = document.getElementById("colorize");
//  sub_nav.style.opacity="0";
 // var currentEventTarget = event.currentTarget;
//  console.log(event.currentEventTarget);
  console.log(event.target.id);//debug
  //console.log(event.target.className);//debug
  if (document.getElementById("highlight").innerHTML === "about" ||  document.getElementById("highlight").innerHTML === "game"||document.getElementById("highlight").innerHTML === "cont"){
    if (document.getElementById("highlight").innerHTML === "about"){        
      document.getElementById("about").style.color="red";
    }
    else if (document.getElementById("highlight").innerHTML === "game"){
      document.getElementById("game").style.color="red";
      document.getElementById("colorize").style.fill="red";
    }else if (document.getElementById("highlight").innerHTML === "cont"){
      document.getElementById("cont").style.color="red";
    }
  }
  if ((event.target.id)==="game" || (event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    console.log("clickd on <a>");//debug  
    if (sub_nav.style.display === "none"){
      console.log("object hidden");//debug
      color.style.fill = "red";
      downC.style.transform="rotate(180deg)";
      sub_nav.style.display="block";
    }else if (sub_nav.style.display ==="block"){
      console.log("object showing");//debug
      sub_nav.style.display="none";
      downC.style.transform="rotate(360deg)";
    }else{
      console.log("error");//something is broken 
    }
  }else if ((event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    console.log("clicked on triangle");
  }else {
    console.log("nothing clicked");//something is broken 
  }
}

//hover over character on main nav
function hov(event){
//  console.log(event.target.id);
   var downC = document.getElementById("downC"),
       sub_nav = document.getElementById("sub_nav_top"),
       path = document.getElementById("path"),
       pathT = document.getElementById("pathT"),
       pathO = document.getElementById("pathO"),
       color = document.getElementById("colorize");
  if ((event.target.id)==="games") {
    color.style.fill = "red";
    downC.style.transform="rotate(180deg)";
    if (sub_nav.style.display === "none") {
      sub_nav.style.display="block";
    }   
  }else if ((event.target.id)=== "pathT" || (event.target.id)=== "path" || (event.target.id)=== "pathO" ||(event.target.id)=== "downC"){
    color.style.fill = "red";
    downC.style.transform="rotate(180deg)";
    if (sub_nav.style.display === "none") {
      sub_nav.style.display="block";
    }
    if ((event.target.id)=== "sub_nav_top" || (event.target.id)=== "apple1" || (event.target.id)=== "aco" ||(event.target.id)=== "amst" ||(event.target.id)=== "super" || (event.target.id)=== "virtual" || (event.target.id)==="atari" || (event.target.id)==="games") {
      sub_nav.style.display="block";
    }
  } else if((event.target.id)==="about" || (event.target.id)==="songs" || (event.target.id)==="game"){
    sub_nav.style.display ="none";
    color.style.fill="white";
    downC.style.transform="rotate(360deg)";
  }
}

//simpler version of the bottom script
function leave(){
  var downC = document.getElementById("downC"),
      sub_nav = document.getElementById("sub_nav_top"),
      color = document.getElementById("colorize");
  sub_nav.style.display="none";
  color.style.fill="white";
  downC.style.transform="rotate(360deg)";
}
