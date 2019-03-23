var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos < currentScrollPos) {
    document.getElementById("back-to-top").style.bottom = "30px";
  } else {
    document.getElementById("back-to-top").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
} 