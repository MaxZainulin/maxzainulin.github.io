$(document).ready(function () {

    var show = true;
    var countbox = ".statistics-header";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.statistics_number').css('opacity', '1');
            $('.statistics_number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});

/*
var $type = $('#type-site-ID')
   ,$design = $('#design_site_ID')
   ,$adaptive = $('#adaptive_site_ID')
   ,$tot = $('#total-price')
   ,prices = {
   // номер_направления: { номер_кол-ва: цена, }
     1: { 1: 500, 2: 1300, 3: 1700, 4: 2000, 5: 2700 },
     2: { 1: 500, 2: 1500, 3: 2100, 4: 2500 },
     3: { 1: null,2: 1400 }
   }
;

function update() {
  var typeSite = $type.val(); // значение направления
  var designSite = $design.val(); // значение кол-ва
  $tot.val( prices[type]  &&  prices[type][design]); 
}

// слушать собятия обновления значений
$type.on('change', update);
$design.on('change', update); 
*/

function calculatePrice()
{
  var typeSite = document.getElementById('typeSite').value;
  var designSite = document.getElementById('designSite').value;
  var adaptiveSite = document.getElementById('adaptiveSite').value;

  var price = typeSite.values + designSite.values + adaptiveSite.values;

  document.getElementById('price').innerHTML = price.toFixed(3);
}