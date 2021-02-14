// window.onscroll = function () {
//     scrollFunction()
// };
//
// function scrollFunction() {
//     if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
//         $('#header').addClass('onscroll');
//         $('#header').removeClass('noscroll');
//     } else {
//         $('#header').addClass('noscroll');
//         $('#header').removeClass('onscroll');
//     }
// }

function showprojects(id, btnid) {
    var elid = ['#pythonprojects', '#cppprojects', '#htmlcssjsprojects', '#djangoprojects'];
    var elbtnid = ['ppbtn', 'cpppbtn', 'hcjpbtn', 'dpbtn'];
    for (i of elid) {
        if (i == id) {
            $(String(i)).fadeToggle();
        } else {
            $(String(i)).fadeOut();
        }
    }
    var dom;
    for (i of elbtnid) {
        dom=document.getElementById(String(i));
        if (btnid == i) {
            dom.setAttribute("selected", "");
        } else {
            dom.removeAttribute("selected");
        }
    }
}

function typewriter(text,elid){
    var i=0;
    var speed=50;
    if (i < text.length) {
        document.getElementById(elid).innerHTML += text.charAt(i);
        text=text.slice(i+1,text.length);
        i++;
        setTimeout(function () {
            typewriter(text,elid);
        },speed);
    }
}
var app = document.getElementById('bannertext');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 50,
    deleteSpeed: 5
});

typewriter
    .pauseFor(1000)
    .typeString('Hi! I am, <strong>Rajinderpal Singh</strong>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<strong style="font-size: 30px;">Top Contributor</strong> at Winter of Code,2020')
    .pauseFor(1000)
    .deleteChars(38)
    .typeString('<strong>Open Source</strong> Enthusiast')
    .pauseFor(1000)
    .start();