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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.

});

/*
$("button").click(function(){
  console.log($(this).parent().attr('id')); // hour-9
  console.log($(this).parent().attr('class')); // row time-block past
  console.log(typeof $(this).parent().attr('class')); //string

  // update the "class" attribute with the "new_text"
  var new_text = 'row time-block future';
  $(this).parent().attr('class',new_text);
  
});
*/

/* test
//var body = $('body');
//var body = $('.container-lg px-5');

var jw = document.querySelector('.container-lg');
//var jw = document.querySelector('#hour-9');
console.log(jw);
console.log(jw.children.length);
console.log(jw.children[0].id);

// this works
var new_text = 'row time-block past';
jw.children[1].className = new_text; // change the class to the new_text


for(var i=0;i<9;i++){
  var jw_id = jw.children[i].id;
  console.log(jw_id);
}
*/



function update_past_present_future(){
    var today = new Date();
    hour = today.getHours(); // 'number'

    var past_text = 'row time-block past';
    var present_text = 'row time-block present';
    var future_text = 'row time-block future';

    var jw = document.querySelector('.container-lg');
    for(var i=0;i<9;i++){
      var schedule_hr = i+9; // starting from 9AM
      if(schedule_hr < hour){
        // update to past
        jw.children[i].className = past_text; // change the class to the new_text
      }else if(schedule_hr == hour){
        // update to present
        jw.children[i].className = present_text; // change the class to the new_text
      }else{
        // update to future
        jw.children[i].className = future_text; // change the class to the new_text
      }
    }
}
update_past_present_future();



// let's try with a basic approach
/*
var btn9  = $('#hour-9'); // this is for test
var btn10 = $('#hour-10'); // this is for test
var btn11 = $('#hour-11'); // this is for test
var btn12 = $('#hour-12'); // this is for test
var btn13 = $('#hour-13'); // this is for test
var btn14 = $('#hour-14'); // this is for test
var btn15 = $('#hour-15'); // this is for test
var btn16 = $('#hour-16'); // this is for test
var btn17 = $('#hour-17'); // this is for test
btn9.on('click', save_schedule);
btn10.on('click', save_schedule);
btn11.on('click', save_schedule);
btn12.on('click', save_schedule);
btn13.on('click', save_schedule);
btn14.on('click', save_schedule);
btn15.on('click', save_schedule);
btn16.on('click', save_schedule);
btn17.on('click', save_schedule);
function save_schedule(){
  console.log('jw');
}
*/






function display_today(){
  var today = new Date();

  // let's try several functions first....
  console.log(today); // Wed Nov 16 2022 09:17:27 GMT-0600 (Central Standard Time)
  console.log(typeof today); // object. So, I cannot directly split this into string
  console.log(today.getDay); // n'th day of the week (0 ~ 6). So, this is not what I am looking for.
  console.log(today.toDateString()); // Wed Nov 16 2022; this is what I am looking for
  console.log(typeof today.toDateString()); // string
  console.log(today.toLocaleDateString()); // 11/16/2022;
  console.log(typeof today.toLocaleDateString()); // string
  console.log(today.toTimeString()); // 09:39:15 GMT-0600 (Central Standard Time)
  console.log(typeof today.toTimeString()); // string
  console.log(today.toLocaleTimeString()); //09:40:36 AM
  console.log(today.toString()); // Wed Nov 16 2022 09:17:27 GMT-0600 (Central Standard Time)
  console.log(typeof today.toString()); // string
  console.log(today.getHours()); // returs 0 ~ 23 in "number"
  console.log(typeof today.getHours()); // number

  // Now, I understand what I need to do^^
  
  var date_string = today.toDateString().split(" "); // Wed Nov 16 2022
  var weekday = date_string[0]; //Wed
  var month = date_string[1]; // Nov
  var day = date_string[2]; // 16
  var year = date_string[3]; // 2022
  console.log(weekday, month, day, year);
  
  var currentDay = $('#currentDay');
  //currentDay.text(weekday + ', ' + month + ', ' + day + ', ' + year);
  currentDay.text(today.toDateString()); // direct & simple approach  
}

//display_today();





