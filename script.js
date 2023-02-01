$('#currentDay').text(dayjs().format("dddd, MMMM D, YYYY"));


$(function () {
  function changingTime() {
    var time = dayjs().hour();
    $(".time-block").each(function(){
      var hour = parseInt($(this).attr('id').substring(5));
      var stringHour=$(this).attr('id').substring(5)
      var loadedText=localStorage.getItem(stringHour);
      this.children[1].value= loadedText;
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
 
  var eventTime = ($(this.parentElement).attr('id').substring(5));
  
  var eventText = this.parentElement.children[1].value;

  localStorage.setItem(eventTime, eventText);
 console.log(localStorage.getItem(eventTime));
 

})
});
