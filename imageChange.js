function switchSlide(){
setInterval(function () {
  console.log("a");
  $("#img1").toggleClass("hidden");
  $("#img2").toggleClass("hidden");
  setTimeout(function () {
    window.location.replace("https://victor-malhotra.github.io/WestMEC_Classes_Tracker/index.html");
  }, 20000);
}, 25000);
}
switchSlide();
