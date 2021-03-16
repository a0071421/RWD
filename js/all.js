$(document).ready(function(){
    $(".mobile-menu").on("click",  function(e){
       e.preventDefault();
       $(".topmenu").toggleClass("menu-show");
    });
  
});