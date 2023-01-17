$(document).ready(function () {
  // saves stored data when save button clicked
  const saveButton = $("button");
  saveButton.on("click", function () {
    var content = $(this).siblings(".description").val();
    var timeSlot = $(this).parent().attr("id");
    console.log(timeSlot);
    console.log(content);
    localStorage.setItem(timeSlot, content);
  });

  // function displays all stored data when refreshed
  function displayinfo() {
    for (i = 9; i <= 17; i++) {
      $("#" + `${i} .description`).val(localStorage.getItem(`${i}`));
    }
  }
  displayinfo();

  // Text area will changed based on time
  function ColorChnge() {
    for (i = 9; i <= 17; i++) {
      var boxHour = $(this).attr(`${i}`);
      var newBoxHour = $(boxHour).attr("id");
      var boxHourInt = parseInt(newBoxHour);
      var currentHour = dayjs().hour();
      console.log(boxHour);
      console.log(currentHour);
      console.log("Id Value:" + boxHourInt);
      if (boxHourInt < currentHour) {
        $(boxHour).addClass("past");
      } else if (boxHourInt == currentHour) {
        $(boxHour).addClass("present");
      } else {
        $(boxHour).addClass("future");
      }
    }
  }

  ColorChnge();
  // displays current date
  const dateDiv = $("#currentDay");
  const date = dayjs().format("dddd MMMM D, YYYY");
  dateDiv.append(date);

  console.log(dayjs().hour());
});
