var app = document.querySelector('.lead .pl-2');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 20,
    deleteSpeed: 2
});

typewriter
    .pauseFor(1000)
    .typeString('Hi! I am, <strong>Rajinderpal Singh</strong>')
    .pauseFor(1000)
    .deleteChars(17)
    .typeString('<strong style="font-size: 23px;">Top Contributor</strong> of Winter of Code,2020')
    .pauseFor(1000)
    .deleteChars(38)
    .typeString('<strong style="font-size: 23px;">Project Admin</strong>/Mentor GSSOC\'21')
    .pauseFor(1000)
    .start();


function loadprojects(techstackname) {
    var data = Object.values(projectsdata[techstackname]);
    var datalen = data.length;
    var temp = '';
    for (var i = 0; i < datalen; i++) {
        temp += '<div class="py-4">' +
        '<div class="desc">' +
        `<h4 style="text-shadow:0 0 20px black"><a style="text-decoration:none;color:whitesmoke;" href="${data[i]["githubrepo"]}">${data[i]["name"]} <i style="background-color:whitesmoke;padding:5px;border-radius:10px;" class="fab fa-github"></i></a></h4>` +
        `<p><a href="${data[i]["videolink"]}">See Working</a></p>` +
        '</div>' +
        '<div>' +
        `<p>${data[i]["date"]}</p>` +
        '</div>' +
        '<div>';        
            '<ol>';

        var descriptiondata = data[i]["description"];
        try {
            var descriptiondatalen = descriptiondata.length;
            for (var j = 0; j < descriptiondatalen; j++) {
                temp += `<li>${descriptiondata[j]}</li>`
            }
        } catch {
            temp += "No Description";
        }
        temp+="</ol>";        
        temp+=`<hr style="background-color:white;">`
    }
    document.getElementById("projectsdata").innerHTML = temp;
}

function loadskills() {
    var temp = '';
    for (title in skillsdata) {
        temp += '<div class="col-md-6 mt-3">' +
            '<div class="progress-wrap">' +
            `<h4>${title}</h4>` +
            '<div class="progress progress-style">' +
            `<div class="progress-bar color-1" role="progressbar" aria-valuenow="${skillsdata[title]}"` +
            `aria-valuemin="0" aria-valuemax="100" style="width:${skillsdata[title]}%">` +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }
    document.getElementById('skillsbar').innerHTML = temp;
}
loadskills()

function loadtech() {
    var temp = '';
    for (title in techdata) {
        temp += '<div class="col-lg-3 col-md-4 mt-4 mt-md-0">' +
            '<div class="icon-box">' +
                `<img class="tech-icon" src="${techdata[title]}">` +
                `<h3>${title}</h3>` +
            '</div>' +
            '</div>';
    }
    document.getElementById('techdata').innerHTML = temp;
}
loadtech();

function loadexpeiences() {
    var temp = '';
    var datalen=experiencedata.length;
    for(var i=0;i<datalen;i++){
        temp += '<div class="py-4">' +
        '<div class="desc">' +
        `<h4>${experiencedata[i]['position']}</h4>` +
        `<p><a href="${experiencedata[i]['companyurl']}">${experiencedata[i]['companyname']}</a></p>` +
        '</div>' +
        '<div>' +
        `<p>${experiencedata[i]['date']}</p>` +
        '</div>' +
        '<div>';
        var descriptionlen=experiencedata[i]['description'].length;
        for(var j=0;j<descriptionlen;j++){
            temp+=`<li>${experiencedata[i]['description'][j]}</li>`;
        }        
        temp+='</div>' +
        '</div>';
    }    
    document.getElementById('experiencedata').innerHTML=temp;
}
loadexpeiences();

