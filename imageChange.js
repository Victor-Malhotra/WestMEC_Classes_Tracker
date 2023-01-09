setInterval(function () {
  console.log("a");
  $("#img1").toggleClass("hidden");
  $("#img2").toggleClass("hidden");
  setTimeout(function () {
    window.location.replace("http://127.0.0.1:5500/");
  }, 20000);
}, 25000);
