$(function(){
  var div=$("#MainBlock");
  var bckg=['url(office.jpg)', 'url(man.jpg)', 'url(handshake.jpg)'];
  var cur=0;
  function nextBcg(){
    div.css(
      'background',
      bckg[cur=++cur%bckg.length]);
    div.css(
      'background-repeat',
      "no-repeat");
    div.css(
      'background-size',
      "cover");
    setTimeout(nextBcg, 5000);
  }
  setTimeout(nextBcg, 5000);
  div.css(
    'background',
    bckg[0]);
  div.css(
    'background-repeat',
    "no-repeat");
  div.css(
    'background-size',
    "cover");
});

$(function() {
  var i=0;
  $('input[name=input]').on('click init-post-format', function() {
    $('#win').css('z-index', i);
    $('#lin').css('z-index', 1-i);
    i=++i%2;
  }).trigger('init-post-format');
});

$(function() {
  var i=0;
  var colors = ["#2196F3", "black"]
  $('input[name=input]').on('click init-post-format', function() {
    $('#lbl1').css('color', colors[i]);
    $('#lbl2').css('color', colors[1-i]);
    i=++i%2;
  }).trigger('init-post-format');
});

$(document).ready(function () {

  $("#main").click(function() {
    $('html, body').animate({
        scrollTop: $("#MainBlock").offset().top//-document.body.offsetHeight*0.1
      }, 300);
  });
  $("#systems").click(function() {
    $('html, body').animate({
        scrollTop: $("#SystemsBlock").offset().top//-document.body.offsetHeight*0.1
      }, 300);
  });
  $("#software").click(function() {
    $('html, body').animate({
        scrollTop: $("#SoftBlock").offset().top//-document.body.offsetHeight*0.1
      }, 300);
  });
  $("#contacts").click(function() {
    $('html, body').animate({
        scrollTop: $("#ContactsBlock").offset().top//-document.body.offsetHeight*0.1
      }, 300);
  });
});
