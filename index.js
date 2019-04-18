$('.dynamic.zad1').show();

$('.dynamic-link').click(function() {
    $('.dynamic').hide();
    $('.dynamic.' + this.dataset.page).show();
})