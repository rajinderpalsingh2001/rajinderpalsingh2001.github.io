// VanillaTilt.init(document.querySelectorAll(".card"), {
//     max: 25,
//     speed: 400,
//     easing:"cubic-bezier(.05,.80,.60,.99)",
//     perspective:500,
//     transition:true
// });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        $('#header').addClass('onscroll');
        $('#header').removeClass('noscroll');
    } else {
        $('#header').addClass('noscroll');
        $('#header').removeClass('onscroll');
    }
}
function showprojects(id) {
    var elid=['#pythonprojects','#cppprojects','#htmlcssjsprojects','#djangoprojects'];
    for(i of elid){
        if(i==id){
            $(String(i)).fadeToggle();
        }else{
            $(String(i)).fadeOut();
        }
    }
}
$(".toggleMenu").on('click', function(){
    $("#mainMenu").toggleClass('open');
});

$(".container").on('click', function(){
    $("#mainMenu").removeClass('open');
});
function togglecloseafterclick() {
    $("#mainMenu").toggleClass('open');
}