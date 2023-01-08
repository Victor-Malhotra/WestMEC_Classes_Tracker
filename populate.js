/* <tr>
    <td>Coding</td>
    <td>1:00PM</td>
    <td>3:30PM</td>
    <td>Mr.Bernard</td>
    <td>Main Building 2nd Flood</td>
   </tr> */

const currentDate = new Date();
const currentDay = currentDate.toLocaleString("default", { weekday: "long" });
const formatedDate = currentDate.toLocaleDateString("en", {
  year: "numeric",
  month: "2-digit",
  day: "numeric",
});
const currentDayElement = document.getElementById("currentDay");
currentDayElement.innerHTML = currentDay;
const currentDateElement = document.getElementById("currentDate");
currentDateElement.innerHTML = formatedDate;

console.log(currentDay);

function renderTime() {
  document.querySelector("#currentTime").innerHTML = moment().format("hh:mmA");
}
renderTime();
setInterval(renderTime, 1000);
