// prevents any of the code below from executing until DOM loads
$(document).ready(function () {

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

  function changeHour() {
    // give the current total amount of hours in a 24-hour day
    let currentHour = dayjs().hour()
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
 
  // pull value from local storage that allows text entry in hour-block to persist after page refresh
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

  // display current date on header of calendar
  let today = dayjs().format('dddd, MMMM D, YYYY');
  $('#currentDay').text(today)
});
