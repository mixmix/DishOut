//CSS Styling Reference

.mainTitle = "Main page Titles"
.subTitle = "Secondary Titles on each page"
.eventInfo = "Event details div containing event details"
  .name = "name of event div "
  .time = "time of event div"
  .date = "date of event div"
  .description = "description of event div"
  .location = "location of event div"

.eventsHosting = "The events div containing all the events you are hosting"  
 .events = ""
.eventsGuesting = "The events div containing all the events you are a guest of"

.userDetails = ""


.login = "Any type of login box"


.guestsDishes
  .title
    h2 Dishes Guests need to bring
  .dishes
    each dish in dishes
      .dish
        .course #{dish.course}
        .dishUser #{dish.userId}
        .dishName #{dish.name}
