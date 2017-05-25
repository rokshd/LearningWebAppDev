var main = function() {
  var AddCommentFromInputBox = function() {
    if ($(".comment-input input").val() != "") {
      var $new_comment = $("<p>").text($(".comment-input input").val());
      $new_comment.hide();
      $(".comments").append($new_comment);
      $new_comment.fadeIn();
      $(".comment-input input").val("");
    }
  }

  $(".comment-input button").on("click", function(event) {
    AddCommentFromInputBox();
  });

  $(".comment-input input").on("keypress", function(event) {
    if (event.keyCode == 13) {
      AddCommentFromInputBox();
    }
  });
};

$(document).ready(main);
