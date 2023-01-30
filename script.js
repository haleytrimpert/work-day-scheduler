// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"));


$(function () {
  function changingTime() {
    var time = dayjs().hour();
    $(".time-block").each(function(){
      var hour = parseInt($(this).attr('id').substring(5));
      
      if(time===hour){
        $(this).addClass("present");
      }else if(time < hour){
        $(this).addClass("future");
      }else{
        $(this).addClass("past");
      }
    }) 
  }
  changingTime();

$(".saveBtn").on('click', function() {
  console.log('click');
})
 

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
});
