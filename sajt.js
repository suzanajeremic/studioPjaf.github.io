function visinaProzora() {
    let visina = $(window).height();
    let futer = $("#futer").outerHeight();

    $("#naslovnaSlika, #onama, #galerijaSlika1, #kontakt").css("min-height", visina);
    $("#kontakt").css("min-height", visina - futer)
}
visinaProzora();


$("section").on("resize", function () {
    visinaProzora();
});

$(".dropdown-menu").on("click", function () {
    $(".dropdown-item-text").animate(4000);
});



$(window).on("scroll", function () {
    let fromTop = $(window).scrollTop();


    if (fromTop > 600) {
        $(".mainHeder").addClass("topHeader");
    } else(
        $(".mainHeder").removeClass("topHeader")
    )
});


$(function(){
    $('.carousel').carousel({
      interval: 2000
    });
});

/*

$("#dugme1").on("click", function(){
    if($("#ime") == ""){
     $("#pIme").html("Unesite Vase ime")
    }
    else{

    }
    if($("#email") == ""){
        document.getElementById("pEmail").innerHTML = "Unesite vas email"
    }
    if($("#por") == ""){
        document.getElementById("pPor").innerHTML = "Unesite poruku"
    }
   
});*/

