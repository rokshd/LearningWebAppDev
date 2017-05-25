var main = function() {
  $(".comment-input button").on("click", function(event) {
    $(".comments").append("<p>Новый</p>");
  });
};

$(document).ready(main);
