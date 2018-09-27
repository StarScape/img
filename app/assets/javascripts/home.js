$(document).ready(() => {

  const y = $(document).height()/2 - $("#main-image").height()/2;
  $("#main-image").offset({ top: y });

  // $(".window").draggable({
  //   containment: "#editing-area",
  //   start: function() {
  //     $(this).css('margin', 0);
  //   }
  // });


});