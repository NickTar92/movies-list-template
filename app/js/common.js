$(function () {
  $("#show-more").click(function () {
    $("#show-more-content").show(300);
    $("#show-less").show();
    $("#show-more").hide();
  });

  $("#show-less").click(function () {
    $("#show-more-content").hide(200);
    $("#show-more").show();
    $(this).hide();
  });
});
