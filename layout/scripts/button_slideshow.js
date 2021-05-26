var slideIndex = 1;
showDivs(slideIndex);
showDivs2(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function plusDivs2(n) {
    showDivs2(slideIndex += n);
  }

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function showDivs2(n) {
var j;
  var y = document.getElementsByClassName("mySlides2");
  if (n > y.length) {slideIndex = 1}
  if (n < 1) {slideIndex = y.length}
  for (j = 0; j < y.length; j++) {
    y[j].style.display = "none";  
  }
  y[slideIndex-1].style.display = "block";  
}