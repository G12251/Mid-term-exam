
// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navigator").style.fontSize = "30px";
  } else {
    document.getElementById("navigator").style.fontSize = "40px";
  }
}
