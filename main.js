$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
function phoneMask() {
    var num = $(this).val().replace(/\D/g,'');
    $(this).val('(' + num.substring(0,3) + ')' + '-' + num.substring(3,6) + '-' + num.substring(6,8) + '-' + num.substring(8,10));
}
$('[type="tel"]').keyup(phoneMask);
