// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  // event listener when save buttons are clicked on calendar
  $('.saveBtn').on('click', function () {
    // key of local storage pair
    let hours = $(this).parent().attr('id')
    // value of local storage pair
    let inputValue = $(this).siblings('.description').val()
    // save info to local storage
    localStorage.setItem(hours, inputValue)
    // give confirmation for booked time slot
    $('#confirmation').addClass('show')
    // hide confirmation message after 3 seconds
    setTimeout(function () {
      $('#confirmation').removeClass('show')
    }, 3000)
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  function changeHour() {
    // give the current total amount of hours in a 24-hour day
    let currentHour = dayjs().hour()
    console.log(currentHour)

    // iterate over each hour block
    $('.time-block').each(function () {
      let timeBlock = parseInt($(this).attr('id').split('-')[1])
      // check each time block against the current hour of the day
      if(timeBlock > currentHour) {
        $(this).addClass('future')
      } else if (timeBlock === currentHour) {
        $(this).addClass('present')
      } else {
        $(this).addClass('past')
      }
    })
  }

  changeHour()
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  $('#hour-8 .description').val(localStorage.getItem('hour-8'))
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
  // TODO: Add code to display the current date in the header of the page.
  let today = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(today)
});
