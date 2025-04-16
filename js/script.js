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

function validationform () {
  const cname = document.getElementById('cust-name').value;
  const cemail = document.getElementById('cust-email').value;
  const cproject = document.getElementById('cust-project').value;

  if (cname == '') {alert('Please enter your name')}
  else if (cemail == '') {alert('Please enter your email')}
  else if (cproject == '') {alert('Please tell me your project')}
  else {alert('Thank You - Please wait for our respond')}

  //document.getElementbyid("hasil").innerHTML = cname;
}

setInterval(() =>{
  plusSlides(slideIndex);
}, 3000);