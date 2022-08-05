function myFunction() {

    var x = document.getElementById("under");
    var y = document.getElementById("myBtn");
  
    if (x.style.display === "inline") {
      x.style.display = "none";
      y.innerHTML = "More"; 
    
    } else {
      x.style.display = "inline";
      y.innerHTML = "Less"; 
      
    }
  }
  $cards.scrollIntoView({
behavior:'smooth',
block:'center',
  })
  undefined({
    behavior:'smooth',
block:'end' ,
  })
  undefined({
    behavior:'smooth',
block:'start' , 
  })