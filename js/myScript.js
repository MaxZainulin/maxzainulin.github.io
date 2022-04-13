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

  setTimeout(function(){ 
    modalwin = document.getElementById('modal-content');
    modalwin.style.display="block"; 
    document.getElementById("modal-close").addEventListener("click", function(){
        modalwin.style.display="none";            
    });
  }, 5000);

  
  document.getElementById("calculatorID").addEventListener('change', calculatePrice());
  function calculatePrice(){
  var typeSite = document.getElementById('typeSite').value;
  var designSite = document.getElementById('designSite').value;
  var adaptiveSite = document.getElementById('adaptiveSite').value;
  
  typeSite = Number(typeSite);
  designSite = Number(designSite);
  adaptiveSite = Number(adaptiveSite);

  var price = typeSite + designSite + adaptiveSite;

  document.getElementById('price').innerHTML = price;
  };
  
  