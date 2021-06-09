'use strict';

/*! My project scripts */
(function ($) {
  // Табы
  let uniTabs = function (tabsSection) {
    let tabLink = $(tabsSection).find('.tabs__navigation-link');

    $(tabLink).click(function () {
      $(this).parent().siblings().removeClass('active');
      $(this).parent().addClass('active');

      let tabLinkHref = $(this).attr('href');
      $('.tabs__wrapper').find('.tabs__content').removeClass('open');
      $(tabLinkHref).addClass('open');
      return false;
    });
  }
  uniTabs('.tabs');
})(jQuery);

(function ($) {
  // Карусель отзывов
  function carouselReviews(element, startCounterSlide) {
    const slider = $(element);
    if (slider) {
      $(slider).slick({
        slidesToShow: startCounterSlide,
        infinite: false,
        prevArrow: '<button class="slick-arrow slick-arrow--prev" type="button"><span class="visually-hidden">Предыдущий слайд</span><svg class="slick-arrow__icon" width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M7.36667 0L9 1.63333L3.63333 7L9 12.3667L7.36667 14L0.366666 7L7.36667 0Z"/></svg></button>',
        nextArrow: '<button class="slick-arrow slick-arrow--next" type="button"><span class="visually-hidden">Следующий слайд</span><svg class="slick-arrow__icon" width="9" height="14" viewBox="0 0 9 14" xmlns="http://www.w3.org/2000/svg"><path d="M1.63333 0L0 1.63333L5.36667 7L0 12.3667L1.63333 14L8.63333 7L1.63333 0Z"/></svg></button>',
        dots: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 481,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      });
    }
  }
  carouselReviews('.reviews__slider', 2);
})(jQuery);

(function() {
  // Yandex map
  function yandexMap(coords) {
    ymaps.ready(init);
    function init() {
      var zoom = 17;
      var iconImageSize = [75, 79];
      var iconImageOffset = [-37, -65];
      var center = coords;
      var siteMap = new ymaps.Map('map', {
        center: center,
        zoom: zoom,
        controls: []
      });
      var zoomControl = new ymaps.control.ZoomControl({
        options: {
          size: "small"
        }
      });
      siteMap.controls.add(zoomControl);
      var elamarPlacemark = new ymaps.Placemark(center, {}, {
        iconLayout: 'default#image',
        iconImageHref: 'images/icon-pin.png',
        iconImageSize: iconImageSize,
        iconImageOffset: iconImageOffset
      });
      siteMap.geoObjects.add(elamarPlacemark);
    }
  }
  yandexMap([53.916, 27.5126]);
})();

(function ($) {
  // Маска телефона
  $('.form__field--phone').mask('+375 (99) 999-99-99');
})(jQuery);

(function ($) {
  // Валидация формы
  $(".form--validate").each(function() {
    let $form = $(this);
    $form.validate();
  });

  $.extend($.validator.messages, {
    required: 'Обязательное поле'
  });
})(jQuery);

(function ($) {
  // Page scroll to id
  $('a[rel="m_PageScroll2id"]').mPageScroll2id({
    offset: 25,
    onComplete:function(){
      $('.js--page-header').removeClass('active');
      $('body').removeClass('overflow');
    }
  });
})(jQuery);

(function ($) {
  // Открываем боковое меню
  let openAsideMenu = function (el) {
    $(el).click(function () {
      $(this).parents('.page-header').toggleClass('active');
      $('body').toggleClass('overflow');
      return false;
    });
  }
  openAsideMenu('.js--menu-toggler');
})(jQuery);
