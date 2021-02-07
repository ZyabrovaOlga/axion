$(document).ready(function () {
    const $menuButton = $('#mobile-menu'),
          $nav = $('.header__nav'),
          $activity = $('.header__user-activity'),
          $spacer = $('.menu-spacer');
  
    $menuButton.on('click', function() {
      $nav.toggleClass('displayed');
      $activity.toggleClass('displayed');
      $spacer.toggleClass('spaced');
    });
  });