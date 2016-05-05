$("#addDish").click(execute)

function execute(){
  var guestName = $("#guest").val()
  var dishType = $("#dishType").val()
  var dish = $("#dish").val()


  $("#guestDishList").append("<div> guest name: " + guestName + " dish type" + dishType + " dish: " + dish + "</div>")

}

module.exports = {execute: execute}
