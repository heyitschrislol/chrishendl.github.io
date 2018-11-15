"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Review Assignment

   Author: Christopher Hendl
   Date:   11/1/18

	
*/
/* */
var thisDay = new Date("August 30, 2018");
var tableHTML = "<table id='eventTable'><caption>Upcoming Events</caption><tr><th>Date</th><th>Event</th><th>Price</th></tr>";

/* create a date object that is 14 days after thisDay */
var endDate = new Date(thisDay.getTime()+14*24*60*60*1000);

/* loop through the eventDates array */
for (var i = 0; i < eventDates.length; i++) {
  var eventDate = new Date(eventDates[i]);
  var eventDay = eventDate.toDateString();
  var eventTime = eventDate.toLocaleTimeString();
  /* check to see if the current date is less than the event date AND that
   * the event date is less than the end date */
  if (thisDay <= eventDate && eventDate <= endDate)
    {
      tableHTML += "<tr><td>" + eventDay + "@" + eventTime + "</td><td>" + eventDescriptions[i] + "</td><td>" + eventPrices[i] + "</td></tr>";
    }
}
tableHTML += "</table>";
document.getElementById("eventList").innerHTML = tableHTML;

