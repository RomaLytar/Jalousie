
//Cкрипт закрепления вверху меню
var h_hght = 140; // высота шапки
var h_mrg = 30;    // отступ когда шапка уже не видна                    
        $(function(){         
            var elem = $('#top_nav');
            var top = $(this).scrollTop();
                if(top > h_hght){
                elem.css('top', h_mrg);
            }           
                $(window).scroll(function(){
                top = $(this).scrollTop(); 
                if (top+h_mrg < h_hght) {
                    elem.css('top', (h_hght-top));
                } else {
                    elem.css('top', h_mrg);
                }
            });
});
//Plavnuy skrol
$(document).ready(function(){
    $("#top_nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссыл
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якор
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});


$(document).ready(function(){
    $(".main_buttons").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссыл
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якор
            top = $(id).offset().top;
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
