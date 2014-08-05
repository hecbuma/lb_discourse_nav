$(function(){
  var lb_header='<div id="lb-menu"></div>';

  $(lb_header).insertAfter('header.d-header div.title')
  $('#lb-menu').load('plugins/lb_custom/lb_menu.html');

  $(document).on('mouseenter','li.lb-nav', function(){
    $(this).find('ul.lb-submenu').show();
  });

  $(document).on('mouseleave','li.lb-nav', function(){
    $(this).find('ul.lb-submenu').hide();
  });
});



