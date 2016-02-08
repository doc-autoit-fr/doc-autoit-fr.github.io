$(document).ready(function() {
  'use strict';

  var cfg = {
    srcLang: 'en',
    trgLang: 'fr'
  };

  $('body').prepend('<button id="toggleLang" class="toggleLang"></button>');

  function updateLangIndicator() {
    var el = $('#toggleLang');
    el.html(cfg.srcLang + ' &#x2942; ' + cfg.trgLang);
    el.attr('title', 'Changer la langue de la page vers la langue : "' + cfg.trgLang + '".');
  }

  function togglePageLang() {
    var temp = cfg.srcLang
    cfg.srcLang = cfg.trgLang;
    cfg.trgLang = temp;

    var r = `${cfg.trgLang}`;

    $(`span[lang="${cfg.trgLang}"]`).css('display', 'none');
    $(`span[lang="${cfg.srcLang}"]`).css('display', '');

    updateLangIndicator();
  }

  $('.segments').tooltip({
    items: '.segments',
    content: function() {
      return $(this).find(`[lang="${cfg.trgLang}"]`).html();
    },
    tooltipClass: 'tooltip-segments'
  });

  $("button#toggleLang")
    .button()
    .click(function(event) {
      event.preventDefault();
      togglePageLang();
    });

  updateLangIndicator();
});
