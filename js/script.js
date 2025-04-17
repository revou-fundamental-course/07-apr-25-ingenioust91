var name = prompt("Siapakah nama Anda?","");
document.getElementById("name").innerHTML = name;

var slideIndex = 1;

function plusSlides(n){
  showSlides(slideIndex += n);
}

function showSlides(n){
 var i;
 var imglist = document.getElementsByClassName("img-slideshow");

 if (n > imglist.length) {slideIndex = 1;}
 else if (n < 1) {slideIndex = imglist.length;}
 
 for(i = 0; i < imglist.length; i++) {
 imglist[i].style.display = "none"; }

 imglist[slideIndex-1].style.display = "block";
}

function validationform() {
  var cname = document.getElementById('cust-name').value;
  var cemail = document.getElementById('cust-email').value;
  var cproject = document.getElementById('cust-project').value;

  if (cname == '') {alert('Please enter your name')}
  else if (cemail == '') {alert('Please enter your email')}
  else if (cproject == '') {alert('Please tell me your project')}
  else {
   document.getElementById('hasil').innerHTML = "Name : " + cname + " | Email : " +    cemail + " | Project :" + cproject;
   document.getElementById("form-contact").reset();
  }
}

setInterval(() =>{
  plusSlides(slideIndex);
}, 3000);

