$(function() {
 apply_css_to_team();

  function apply_css_to_team(){
  /* if chrome use flex boxes */
  if($.browser.chrome){
    $(".person, .team_container").each(function(i, target){
      $(target)
      .removeClass('no_chrome')
      .addClass('yes_chrome');
    });
  }
 }

});