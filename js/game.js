//updated
function shoot(){
  console.log("shoot");
//  if (document.getElementById("what_ga").innerHTML == "atari"){
//    var eighty_two = document.getElementsByClassName("eighty_two");
//    var i;
//    for (i=0; i<eighty_two.length; i++){
//      eighty_two[i].style.display="block";
//    }
//  }
}

//Year section
function eighty_two(){
  var a =document.getElementById("year"),
        c =document.getElementById("year1"),
        e =document.getElementById("year2"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        j =document.getElementById("year5"),
        k =document.getElementById("year6"),
        l =document.getElementById("year7"),
        m =document.getElementById("year8"),
        n =document.getElementById("year9"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
//        eighty_seven = document.getElementsByClassName("eighty_seven"),
//        eighty_eight = document.getElementsByClassName("eighty_eight"),
//        eighty_nine = document.getElementsByClassName("eighty_nine"),
//        nighty = document.getElementsByClassName("nighty"),
//        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven");
  
  if (document.getElementById("what_ga").innerHTML == "atari"){   
    console.log(a.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
      for (i=0; i<eighty_two.length; i++){
        eighty_two[i].style.display="block";
      }
      for (i=0; i<eighty_three.length; i++){
        eighty_three[i].style.display="block";
      }
      for (i=0; i<eighty_four.length; i++){
        eighty_four[i].style.display="block";
      }
      for (i=0; i<eighty_six.length; i++){
        eighty_six[i].style.display="block";
      }
      for (i=0; i<two_two.length; i++){
        two_two[i].style.display="block";
      }
      for (i=0; i<two_four.length; i++){
        two_four[i].style.display="block";
      }
      for (i=0; i<two_five.length; i++){
        two_five[i].style.display="block";
      }
      for (i=0; i<two_seven.length; i++){
        two_seven[i].style.display="block";
      }
    }
    //if unclicked
    else if (a.innerHTML === "true"){
      a.innerHTML= "false";
      //any other year active
      if (c.innerHTML=== "true"||f.innerHTML==="true"||h.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"||e.innerHTML==="true"){
        for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
    }
    // check if box clicked
    else if(a.innerHTML === "false"){
      //cycle through all class
      a.innerHTML="true";
      for (i=0; i<eighty_two.length; i++){
        eighty_two[i].style.display="block";
      }
      //check if any other showing
      if (c.innerHTML=== "false"){
          for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="none";
          }
      }
      if (e.innerHTML==="false"){
        for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="none";
          }
      }
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      }if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
          }
      }
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
       if (j.innerHTML==="false"){
        for (i=0; i<two_two.length; i++){
          two_two[i].style.display="none";
        }
      }
       if (k.innerHTML==="false"){
        for (i=0; i<two_four.length; i++){
          two_four[i].style.display="none";
        }
      }
      if (l.innerHTML==="false"){
        for (i=0; i<two_five.length; i++){
          two_five[i].style.display="none";
        }
      }  if (m.innerHTML==="false"){
        for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="none";
        }
      }
    else{
      console.log("error no value");
    }
  }  
}
}

function eighty_three(){
  var a =document.getElementById("year"),
        c =document.getElementById("year1"),
        e =document.getElementById("year2"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        j =document.getElementById("year5"),
        k =document.getElementById("year6"),
        l =document.getElementById("year7"),
        m =document.getElementById("year8"),
        n =document.getElementById("year9"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
//        eighty_seven = document.getElementsByClassName("eighty_seven"),
//        eighty_eight = document.getElementsByClassName("eighty_eight"),
//        eighty_nine = document.getElementsByClassName("eighty_nine"),
//        nighty = document.getElementsByClassName("nighty"),
//        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven");
  
  if (document.getElementById("what_ga").innerHTML == "atari"){   
    console.log(a.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
      for (i=0; i<eighty_two.length; i++){
        eighty_two[i].style.display="block";
      }
      for (i=0; i<eighty_three.length; i++){
        eighty_three[i].style.display="block";
      }
      for (i=0; i<eighty_four.length; i++){
        eighty_four[i].style.display="block";
      }
      for (i=0; i<eighty_six.length; i++){
        eighty_six[i].style.display="block";
      }
      for (i=0; i<two_two.length; i++){
        two_two[i].style.display="block";
      }
      for (i=0; i<two_four.length; i++){
        two_four[i].style.display="block";
      }
      for (i=0; i<two_five.length; i++){
        two_five[i].style.display="block";
      }
      for (i=0; i<two_seven.length; i++){
        two_seven[i].style.display="block";
      }
    }
    //if unclicked
    else if (c.innerHTML === "true"){
      c.innerHTML= "false";
      //any other year active
      if (a.innerHTML=== "true"||f.innerHTML==="true"||h.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"||e.innerHTML==="true"){
        for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
    }
    // check if box clicked
    else if(c.innerHTML === "false"){
      //cycle through all class
      c.innerHTML="true";
      for (i=0; i<eighty_three.length; i++){
        eighty_three[i].style.display="block";
      }
      //check if any other showing
      if (a.innerHTML=== "false"){
          for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="none";
          }
      }
      if (e.innerHTML==="false"){
        for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="none";
          }
      }
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      }if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
          }
      }
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
       if (j.innerHTML==="false"){
        for (i=0; i<two_two.length; i++){
          two_two[i].style.display="none";
        }
      }
       if (k.innerHTML==="false"){
        for (i=0; i<two_four.length; i++){
          two_four[i].style.display="none";
        }
      }
      if (l.innerHTML==="false"){
        for (i=0; i<two_five.length; i++){
          two_five[i].style.display="none";
        }
      }  if (m.innerHTML==="false"){
        for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="none";
        }
      }
    else{
      console.log("error no value");
    }
  }  
}
}

function eighty_four(){
  var a =document.getElementById("year"),
        c =document.getElementById("year1"),
        e =document.getElementById("year2"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        j =document.getElementById("year5"),
        k =document.getElementById("year6"),
        l =document.getElementById("year7"),
        m =document.getElementById("year8"),
        n =document.getElementById("year9"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
//        eighty_seven = document.getElementsByClassName("eighty_seven"),
//        eighty_eight = document.getElementsByClassName("eighty_eight"),
//        eighty_nine = document.getElementsByClassName("eighty_nine"),
//        nighty = document.getElementsByClassName("nighty"),
//        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven");
  
  if (document.getElementById("what_ga").innerHTML == "atari"){   
    console.log(e.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (e.innerHTML === "true"){
      e.innerHTML= "false";
      //any other year active
      if (a.innerHTML=== "true"||f.innerHTML==="true"||h.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"||c.innerHTML==="true"){
        for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
    }
    // check if box clicked
    else if(e.innerHTML === "false"){
      //cycle through all class
      e.innerHTML="true";
      for (i=0; i<eighty_four.length; i++){
        eighty_four[i].style.display="block";
      }
      //check if any other showing
      if (a.innerHTML=== "false"){
          for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="none";
          }
      }
      if (c.innerHTML==="false"){
        for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="none";
          }
      }
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      }if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
          }
      }
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
       if (j.innerHTML==="false"){
        for (i=0; i<two_two.length; i++){
          two_two[i].style.display="none";
        }
      }
       if (k.innerHTML==="false"){
        for (i=0; i<two_four.length; i++){
          two_four[i].style.display="none";
        }
      }
      if (l.innerHTML==="false"){
        for (i=0; i<two_five.length; i++){
          two_five[i].style.display="none";
        }
      }  if (m.innerHTML==="false"){
        for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="none";
        }
      }
    else{
      console.log("error no value");
    }
  }  
  }
}

function eighty_five(){
  var a =document.getElementById("year"),
        c =document.getElementById("year1"),
        e =document.getElementById("year2"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        j =document.getElementById("year5"),
        k =document.getElementById("year6"),
        l =document.getElementById("year7"),
        m =document.getElementById("year8"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven");
  
  if (document.getElementById("what_ga").innerHTML == "atari"){   
    console.log(f.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (f.innerHTML === "true"){
      f.innerHTML= "false";
      //any other year active
      if (a.innerHTML=== "true"||e.innerHTML==="true"||h.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"||c.innerHTML==="true"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
    }
    // check if box clicked
    else if(f.innerHTML === "false"){
      //cycle through all class
      f.innerHTML="true";
      for (i=0; i<eighty_five.length; i++){
        eighty_five[i].style.display="block";
      }
      //check if any other showing
      if (a.innerHTML=== "false"){
          for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="none";
          }
      }
      if (c.innerHTML==="false"){
        for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="none";
          }
      }
      if (e.innerHTML==="false"){
        for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="none";
          }
      }if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
          }
      }
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
       if (j.innerHTML==="false"){
        for (i=0; i<two_two.length; i++){
          two_two[i].style.display="none";
        }
      }
       if (k.innerHTML==="false"){
        for (i=0; i<two_four.length; i++){
          two_four[i].style.display="none";
        }
      }
      if (l.innerHTML==="false"){
        for (i=0; i<two_five.length; i++){
          two_five[i].style.display="none";
        }
      }  if (m.innerHTML==="false"){
        for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="none";
        }
      }
    else{
      console.log("error no value");
    }
  }  
  }
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log(f.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (f.innerHTML === "true"){
      f.innerHTML= "false";
      //any other year active
      if ( h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
    }
    // check if box clicked
    else if(f.innerHTML === "false"){
      //cycle through all class
      f.innerHTML="true";
      for (i=0; i<eighty_five.length; i++){
        eighty_five[i].style.display="block";
      }
      //check if any other showing
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
          }
      } 
       if (o.innerHTML==="false"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
       if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }  
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }
}

function eighty_six(){
  var a =document.getElementById("year"),
        c =document.getElementById("year1"),
        e =document.getElementById("year2"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        j =document.getElementById("year5"),
        k =document.getElementById("year6"),
        l =document.getElementById("year7"),
        m =document.getElementById("year8"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven");
  
  if (document.getElementById("what_ga").innerHTML == "atari"){   
    console.log(h.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
      show();
    }
    
    //if unclicked
    else if (h.innerHTML === "true"){
     
      //any other year active
      if (a.innerHTML=== "true"||e.innerHTML==="true"||f.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"||c.innerHTML==="true"||h.innerHTML==="true"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
      else{
       show(); 
      }
      h.innerHTML= "false";
    }
    // check if box clicked
    else if(h.innerHTML === "false"){
      //cycle through all class
      h.innerHTML="true";
      for (i=0; i<eighty_six.length; i++){
        eighty_six[i].style.display="block";
      }
      //check if any other showing
      if (a.innerHTML=== "false"){
          for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="none";
          }
      }
      if (c.innerHTML==="false"){
        for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="none";
          }
      }
      if (e.innerHTML==="false"){
        for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="none";
          }
      }
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
        }
      }  
       if (j.innerHTML==="false"){
        for (i=0; i<two_two.length; i++){
          two_two[i].style.display="none";
        }
      }
       if (k.innerHTML==="false"){
        for (i=0; i<two_four.length; i++){
          two_four[i].style.display="none";
        }
      }
      if (l.innerHTML==="false"){
        for (i=0; i<two_five.length; i++){
          two_five[i].style.display="none";
        }
      }  if (m.innerHTML==="false"){
        for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="none";
        }
      }
    else{
      console.log("error no value");
    }
  }  
  }
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log(f.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (h.innerHTML === "true"){
      
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      h.innerHTML= "false";
    }
    // check if box clicked
    else if(h.innerHTML === "false"){
      //cycle through all class
      h.innerHTML="true";
      for (i=0; i<eighty_six.length; i++){
        eighty_six[i].style.display="block";
      }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      } 
       if (o.innerHTML==="false"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
       if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }  
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }
}
  
function eighty_seven(){
  var   f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one");
  
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log(o.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (o.innerHTML === "true"){
      
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      o.innerHTML= "false";
    }
    // check if box clicked
    else if(o.innerHTML === "false"){
      //cycle through all class
      o.innerHTML="true";
      for (i=0; i<eighty_eight.length; i++){
        eighty_eight[i].style.display="block";
      }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      } 
       if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }
       if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }  
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }
}

function eighty_eight(){
  var   f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one");
  
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log("1988: "+n.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (o.innerHTML === "true"){
      
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      o.innerHTML= "false";
    }
    // check if box clicked
    else if(o.innerHTML === "false"){
      //cycle through all class
      o.innerHTML="true";
      for (i=0; i<eighty_eight.length; i++){
        eighty_eight[i].style.display="block";
      }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      } 
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      } 
       if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }
       if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
       
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }
}

function eighty_nine(){
  var
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one");
  
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log(n.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (p.innerHTML === "true"){
      p.innerHTML= "false";
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" ||  q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      
    }
    // check if box clicked
    else if(p.innerHTML === "false"){
      console.log("hello");
      //cycle through all class
      p.innerHTML="true";
      for (i=0; i<eighty_nine.length; i++){
        eighty_nine[i].style.display="block";
      }
    }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
        
      } 
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }
      
       if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }
       if (o.innerHTML==="false"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
        
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }    
  }
}

function nighty(){
  var 
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one");
  
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log("1990: "+q.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (q.innerHTML === "true"){
      
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      q.innerHTML= "false";
    }
    // check if box clicked
    else if(q.innerHTML === "false"){
      //cycle through all class
      q.innerHTML="true";
      for (i=0; i<nighty.length; i++){
        nighty[i].style.display="block";
      }
    }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      } 
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }
      
       if (n.innerHTML==="false"){
        for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="none";
        }
      }
       if (o.innerHTML==="false"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
        
      if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      if (r.innerHTML==="false"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }


function nighty_one(){
  var a =document.getElementById("year"),
        f =document.getElementById("year3"),
        h =document.getElementById("year4"),
        n =document.getElementById("year9"),
        o =document.getElementById("year10"),
        p =document.getElementById("year11"),
        q =document.getElementById("year12"),
        r =document.getElementById("year13"),
        i,
//        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one");
  
  if (document.getElementById("what_ga").innerHTML == "amstrad"){   
    console.log(n.innerHTML);
    //debuging purposes
    // IGNORE SECTION don't have to fix this, LEAVE THIS ALONG 
    //checks if all are selected
    if (f.innerHTML==="true" && h.innerHTML==="true"&&n.innerHTML==="true"&&o.innerHTML==="true"&&p.innerHTML==="true"&&q.innerHTML==="true"&&r.innerHTML==="true"){
      show();
    }
    //if unclicked
    else if (r.innerHTML === "true"){
      
      //any other year active
      if (f.innerHTML==="true" || h.innerHTML==="true" || n.innerHTML==="true" || o.innerHTML==="true" || p.innerHTML==="true" || q.innerHTML==="true" || r.innerHTML==="true"){
        for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="none";
        }
      }
      
      else{
       show(); 
      }
      r.innerHTML= "false";
    }
    // check if box clicked
    else if(r.innerHTML === "false"){
      //cycle through all class
      r.innerHTML="true";
      for (i=0; i<nighty_one.length; i++){
        nighty_one[i].style.display="block";
      }
      //check if any other showing
      if (f.innerHTML==="false"){
        for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="none";
          }
      } 
      if (h.innerHTML==="false"){
        for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="none";
        }
      }
      
       if (n.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
       if (o.innerHTML==="false"){
        for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="none";
        }
      }
        
      if (p.innerHTML==="false"){
        for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="none";
        }
      }
      if (q.innerHTML==="false"){
        for (i=0; i<nighty.length; i++){
          nighty[i].style.display="none";
        }
      }
      else{
        console.log("error no value");
      }
    }  
  }
}

function seventy_six(){
  var w =document.getElementById("year14"),
        i,
        seventy_six = document.getElementsByClassName("seventy_six");

  
  if (document.getElementById("what_ga").innerHTML == "apple"){   
    console.log(w.innerHTML);
    //debuging purposes

    //if unclicked
    if (w.innerHTML === "true"){
      
//      for (i=0; i<seventy_six.length; i++){
//        seventy_six[i].style.display="none";
//      }
      w.innerHTML= "false";
    }
    // check if box clicked
    else if(w.innerHTML === "false"){
      //cycle through all class
      w.innerHTML="true";
      for (i=0; i<seventy_six.length; i++){
        seventy_six[i].style.display="block";
      }
    }  
  }
}

//reset the search
function show(){
  var   i,
        seventy_six = document.getElementsByClassName("seventy_six"),
        eighty_two = document.getElementsByClassName("eighty_two"),
        eighty_three = document.getElementsByClassName("eighty_three"),
        eighty_four = document.getElementsByClassName("eighty_four"),
        eighty_five = document.getElementsByClassName("eighty_five"),
        eighty_six = document.getElementsByClassName("eighty_six"),
        eighty_seven = document.getElementsByClassName("eighty_seven"),
        eighty_eight = document.getElementsByClassName("eighty_eight"),
        eighty_nine = document.getElementsByClassName("eighty_nine"),
        nighty = document.getElementsByClassName("nighty"),
        nighty_one = document.getElementsByClassName("nighty_one"),
        two_two = document.getElementsByClassName("two_two"),
        two_four = document.getElementsByClassName("two_four"),
        two_five = document.getElementsByClassName("two_five"),
        two_seven = document.getElementsByClassName("two_seven"),
        game = document.getElementById("what_ga");
  console.log("called show");
  
  if (game.innerHTML ==="atari"){
      for (i=0; i<eighty_two.length; i++){
          eighty_two[i].style.display="block";        
      }
    for (i=0; i<eighty_three.length; i++){
          eighty_three[i].style.display="block";        
      }
    for (i=0; i<eighty_four.length; i++){
          eighty_four[i].style.display="block";        
      }
    for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="block";        
      }
    for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="block";        
      }
    for (i=0; i<two_two.length; i++){
          two_two[i].style.display="block";        
      }
    for (i=0; i<two_four.length; i++){
          two_four[i].style.display="block";        
      }
    for (i=0; i<two_five.length; i++){
          two_five[i].style.display="block";        
      }
    for (i=0; i<two_seven.length; i++){
          two_seven[i].style.display="block";        
      }
  }
  if (game.innerHTML ==="amstrad"){
    for (i=0; i<eighty_five.length; i++){
          eighty_five[i].style.display="block";        
      }
    for (i=0; i<eighty_six.length; i++){
          eighty_six[i].style.display="block";        
      }
    for (i=0; i<eighty_seven.length; i++){
          eighty_seven[i].style.display="block";        
      }
    for (i=0; i<eighty_eight.length; i++){
          eighty_eight[i].style.display="block";        
      }
    for (i=0; i<eighty_nine.length; i++){
          eighty_nine[i].style.display="block";        
      }
    for (i=0; i<nighty.length; i++){
          nighty[i].style.display="block";        
      }
    for (i=0; i<nighty_one.length; i++){
          nighty_one[i].style.display="block";        
      }
  }
  if (game.innerHTML ==="apple"){
    for (i=0; i<seventy_six.length; i++){
          seventy_six[i].style.display="block";        
      }
  }
}


//function two_two(){
//  var a =document.getElementById("year"),
//        c =document.getElementById("year1"),
//        e =document.getElementById("year2"),
//        f =document.getElementById("year3"),
//        h =document.getElementById("year4"),
//        j =document.getElementById("year5"),
//        k =document.getElementById("year6"),
//        l =document.getElementById("year7"),
//        m =document.getElementById("year8"),
//        n =document.getElementById("year9"),
//        i,
////        seventy_six = document.getElementsByClassName("seventy_six"),
//        eighty_two = document.getElementsByClassName("eighty_two"),
//        eighty_three = document.getElementsByClassName("eighty_three"),
//        eighty_four = document.getElementsByClassName("eighty_four"),
////        eighty_five = document.getElementsByClassName("eighty_five"),
//        eighty_six = document.getElementsByClassName("eighty_six"),
////        eighty_seven = document.getElementsByClassName("eighty_seven"),
////        eighty_eight = document.getElementsByClassName("eighty_eight"),
////        eighty_nine = document.getElementsByClassName("eighty_nine"),
////        nighty = document.getElementsByClassName("nighty"),
////        nighty_one = document.getElementsByClassName("nighty_one"),
//        two_two = document.getElementsByClassName("two_two"),
//        two_four = document.getElementsByClassName("two_four"),
//        two_five = document.getElementsByClassName("two_five"),
//        two_seven = document.getElementsByClassName("two_seven");
//  
//  if (document.getElementById("what_ga").innerHTML == "atari"){   
//    //debuging purposes
//    console.log(a.innerHTML);
//
//    //remember don't touch this. This is working fine
//    if (a.innerHTML==="true" && c.innerHTML==="true" && e.innerHTML==="true"&&f.innerHTML==="true"&&h.innerHTML==="true"&&j.innerHTML==="true"&&k.innerHTML==="true"&&l.innerHTML==="true"&&m.innerHTML==="true"&&n.innerHTML==="true"){
//      for (i=0; i<eighty_two.length; i++){
//        eighty_two[i].style.display="block";
//      }
//      for (i=0; i<eighty_three.length; i++){
//        eighty_three[i].style.display="block";
//      }
//      for (i=0; i<eighty_four.length; i++){
//        eighty_four[i].style.display="block";
//      }
//      for (i=0; i<eighty_six.length; i++){
//        eighty_six[i].style.display="block";
//      }
//      for (i=0; i<two_two.length; i++){
//        two_two[i].style.display="block";
//      }
//      for (i=0; i<two_four.length; i++){
//        two_four[i].style.display="block";
//      }
//      for (i=0; i<two_five.length; i++){
//        two_five[i].style.display="block";
//      }
//      for (i=0; i<two_seven.length; i++){
//        two_seven[i].style.display="block";
//      }
//    }
//    else if (h.innerHTML === "true"){
//      h.innerHTML= "false";
//      if (c.innerHTML=== "true"||f.innerHTML==="true"||h.innerHTML==="true"||j.innerHTML==="true"||l.innerHTML==="true"||m.innerHTML==="true"||n.innerHTML==="true"){
//        for (i=0; i<eighty_two.length; i++){
//          two_two[i].style.display="none";
//        }
//      }else{
//        for (i=0; i<eighty_two.length; i++){
//          two_two[i].style.display="block";
//        }
//      }
//    }
//    else if(h.innerHTML === "false"){
//      h.innerHTML="true";
//      for (i=0; i<eighty_two.length; i++){
//        two_two[i].style.display="block";
//      }
//    }
//    else{
//      console.log("error no value");
//    }
//  }
//}
//Amstrad section
//if (document.getElementById("what_ga").innerHTML == "amstrad"){   
//    console.log(a.innerHTML);
//    //debuging purposes
//    if (a==="true" && c==="true" && e==="true"&&f==="true"&&n==="true"&&j==="true"&&o==="true"&&p==="true"&&q==="true"&&r==="true"){
//      for (i=0; i<eighty_two.length; i++){
//        eighty_two[i].style.display="block";
//      }
//      for (i=0; i<eighty_three.length; i++){
//        eighty_three[i].style.display="block";
//      }
//      for (i=0; i<eighty_four.length; i++){
//        eighty_four[i].style.display="block";
//      }
//      for (i=0; i<eighty_six.length; i++){
//        eighty_six[i].style.display="block";
//      }
//      for (i=0; i<two_two.length; i++){
//        two_two[i].style.display="block";
//      }
//      for (i=0; i<two_four.length; i++){
//        two_four[i].style.display="block";
//      }
//      for (i=0; i<two_five.length; i++){
//        two_five[i].style.display="block";
//      }
//      for (i=0; i<two_seven.length; i++){
//        two_seven[i].style.display="block";
//      }
//    }
//    else if (a.innerHTML === "true"){
//      a.innerHTML = "false";
//      if (c=== "true"||f==="true"||h==="true"||j==="true"||l==="true"||m==="true"){
//        for (i=0; i<eighty_two.length; i++){
//          eighty_two[i].style.display="none";
//        }
//      }
//    }
//    else if(a === "false"){
//      a="true";
//      for (i=0; i<eighty_two.length; i++){
//        eighty_two[i].style.display="block";
//      }
//    }
//    else{
//      console.log("error no value")
//    }
//  }



