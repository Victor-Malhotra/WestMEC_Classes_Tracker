document.getElementById("currentDay").innerHTML = moment().format("dddd");
document.getElementById("currentDate").innerHTML =
  moment().format("MM/DD/YYYY");
function renderTime() {
  document.getElementById("currentTime").innerHTML = moment().format("hh:mmA");
}
renderTime();
setInterval(renderTime, 1000);

if (
  moment().format("dddd") == "Sunday" ||
  moment().format("dddd") == "Saturday"
) {
  document.getElementById(
    "classesTable"
  ).innerHTML = `<h1 style="" class=" font-extrabold text-center">There is no school on ${moment().format(
    "dddd"
  )} </h1>`;
} else {
  /*
    <tr>
      <td>Coding</td>
      <td>1:00PM</td>
      <td>3:30PM</td>
      <td>Mr.Bernard</td>
      <td>Main Building 2nd Flood</td>
    </tr>
  */
  const classInfoElement = document.getElementById("classInfo");
  $.getJSON("classes.json", function (data) {
    for (let i = 0; i < data.programs.length; i++) {
      for (let g = 0; g < data.programs[i].classTimes.length; g++) {
        classInfoElement.innerHTML +=
          "<tr class='" +
          data.programs[i].programName +
          "'><td>" +
          data.programs[i].programName +
          "</td><td>" +
          data.programs[i].classTimes[g].startTime +
          "</td><td>" +
          data.programs[i].classTimes[g].endTime +
          "</td><td>" +
          data.programs[i].instructorName +
          "</td><td>" +
          data.programs[i].classLocation +
          "</td></tr>";
      }
    }
  });

  $.fn.infiniteScrollUp = function () {
    var self = this,
      kids = self.children();
    kids.slice(20).hide();
    setInterval(function () {
      kids.filter(":hidden").eq(0).fadeIn();
      kids.eq(0).fadeOut(function () {
        $(this).appendTo(self);
        kids = self.children();
      });
    }, 2900);
    return this;
  };
  const scrollBody = document.getElementsByTagName("tbody");

  $(function () {
    $("tbody").infiniteScrollUp();
  });
}
function slideChange() {
  setTimeout(function () {
    window.location.replace("http://127.0.0.1:5500/image.html");
  }, 120000);
}
slideChange();
