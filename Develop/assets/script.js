$(".textarea").on("click", "input", function() {
  var oldtext = $(this)
  .attr('id')
  .val();
  console.log(oldtext);
  });

  $(".textarea").on("blur", "input", function() {
    console.log("leaving")
  });