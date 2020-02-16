---
layout: null
sitemap:
exclude: 'yes'
---

$(document).ready(function () {
  $('a.blog-button').click(function (e) {

    var par = $('.content-wrapper__inner').children();
    for(var i=0; i<par.length; i++){
        console.log(par[i])
        console.log($(par[i]).hasClass('hidden'));
        if (!$(par[i]).hasClass('hidden'))
            $(par[i]).addClass('hidden');
    }
    $('.post-list').parent().removeClass('hidden');

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#blog') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }
  if (window.location.hash && window.location.hash == '#project') {
    $('.panel-cover').addClass('panel-cover--collapsed')
    var par = $('.content-wrapper__inner').children();
    for(var i=0; i<par.length; i++){
        if (!$(par[i]).hasClass('hidden'))
            $(par[i]).addClass('hidden');
    }
    $('.project-list').parent().removeClass('hidden');
  }

  console.log(window.location.pathname)
  console.log("{{ site.url }}{{ site.baseurl }}")

  if (window.location.pathname !== '{{ site.baseurl }}' && window.location.pathname !== '{{ site.baseurl }}index.html') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.btn-mobile-menu').click(function () {
    $('.navigation-wrapper').toggleClass('visible animated bounceInDown')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

  $('.navigation-wrapper .blog-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })




  $('a.project-button').click(function (e) {
    console.log("Project button clicked");
    var par = $('.content-wrapper__inner').children();
    for(var i=0; i<par.length; i++){
        if (!$(par[i]).hasClass('hidden'))
            $(par[i]).addClass('hidden');
    }
    $('.project-list').parent().removeClass('hidden');

    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return
    currentWidth = $('.panel-cover').width()
    if (currentWidth < 960) {
      $('.panel-cover').addClass('panel-cover--collapsed')
      $('.content-wrapper').addClass('animated slideInRight')
    } else {
      $('.panel-cover').css('max-width', currentWidth)
      $('.panel-cover').animate({'max-width': '530px', 'width': '40%'}, 400, swing = 'swing', function () {})
    }
  })

  if (window.location.hash && window.location.hash == '#project') {
    $('.panel-cover').addClass('panel-cover--collapsed')
  }

  $('.navigation-wrapper .project-button').click(function () {
    $('.navigation-wrapper').toggleClass('visible')
    $('.btn-mobile-menu__icon').toggleClass('icon-list icon-x-circle animated fadeIn')
  })

})
