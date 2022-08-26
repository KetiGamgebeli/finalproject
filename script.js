
const navheader =[ "მთავარი","ჩვენს შესახებ","ფსიქოთერაპია", "კვლევითი პროექტები", "კონტაქტი" ];
const links = ["index.html", "About.html", "psychotherapy.html", "research.html", "Contact.html"];

let navlenghth = navheader.length;
let navtext = "<ul>";

for(let i=0; i<navlenghth; i++){
  navtext +='<li><a href=" '+ links [i] +' ">' + navheader[i] + "</a></li>";
}





navtext += "</ul>";

document.getElementById("navheader"). innerHTML = navtext;



function show(){
  document.getElementById("messageboxcontainer").style.display = "block";
}

function hide(){
  document.getElementById("messageboxcontainer").style.display = "none";

}


$('#myCarousel').carousel({
  interval: 3000,
  cycle: true
}); 
