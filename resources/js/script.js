window.addEventListener("resize", function() {
	lax.updateElements()
});


//fader fun
var enabled = 'yes';
var faderPath = document.getElementById('scrolltrack');
var fader = document.getElementById('scrollthumb');

//click and drag
fader.onmousedown = function(event) {
    enabled = 'no';
    // document.body.append(fader);
    function moveAt(clientY) {
        // fader.style.left = pageX - fader.offsetWidth / 2 + 'px';
        let bottomEdge = faderPath.offsetHeight - fader.offsetHeight;
        let newTop = clientY - fader.offsetHeight/.55;        
        //restrains fader in track
        if(newTop<0){
            newTop=0;
        }
        if(newTop>bottomEdge){
            newTop = bottomEdge;
        }

        //sets new position
        fader.style.top = `${newTop}px`;
        //convert position to percentage
        var newTopPer = (newTop / bottomEdge);
        //make page scroll with fader position
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPos = newTopPer*height;
        document.documentElement.scrollTop = scrollPos;
        console.log(document.documentElement.scrollTop);

    }
    moveAt(event.clientY);

    function onMouseMove(event) {
        moveAt(event.clientY);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        fader.onmouseup = null;
        enabled = 'yes';
    }
}
fader.ondragstart = function() {
    return false;
}

//make fader move with window scrolling

window.onscroll = function scrollLink(){
    if(enabled == 'yes') {
        var scrollPos = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = ((scrollPos/height)*100)/1.13;
        fader.style.top = scrolled + "%";
    }
    removeOutline();


}

//side nav 

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    // document.getElementById("main").style.marginLeft = "75px";
    // document.getElementById("welcome-section").style.marginLeft = "75px";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
    // document.getElementById("main").style.marginLeft = "0px";
    // document.getElementById("welcome-section").style.marginLeft = "0px";

}

//curator

/* curator-feed-default-feed-layout */
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/5c45e6ba-7cbc-48d2-be74-39dd75a45ccd.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();

//about section
var elem1a = document.getElementById('caret1');
var elem1b = document.getElementById('audio');
var elem2a = document.getElementById('caret2');
var elem2b = document.getElementById('lighting');
var elem3a = document.getElementById('caret3');
var elem3b = document.getElementById('repair');
var elem4a = document.getElementById('caret4');
var elem4b = document.getElementById('programming');
var elemArray1 = [elem1a, elem2a, elem3a, elem4a];
var elemArray2 = [elem1b, elem2b, elem3b, elem4b];


function showAudio() {
    var found = false;
    if (elem1a.style.opacity == '0') {
        for (i=0; i<4; i++) {
            if (elemArray1[i].style.opacity == '1') {
                elemArray1[i].style.opacity = '0';
                elemArray2[i].style.width = '0%';
                elemArray2[i].style.height = '25%';
                found = true;
                setTimeout(hello, 200);
            } 
        }

        function hello() {
            elem1a.style.opacity = '1';
            elem1b.style.width = '100%';
            elem1b.style.height = '100%';
        }

        if(found == false){
            hello();
        }
    } 
}

function showLighting() {
    var found = false;
    if (elem2a.style.opacity == '0') {
        for (i=0; i<4; i++) {
            if (elemArray1[i].style.opacity == '1') {
                elemArray1[i].style.opacity = '0';
                elemArray2[i].style.width = '0%';
                elemArray2[i].style.height = '25%';
                found = true;
                setTimeout(hello, 200);
            } 
        }
        if (found == false){
            hello();
        }

        function hello() {
            elem2a.style.opacity = '1';
            elem2b.style.width = '100%';
            elem2b.style.height = '100%';
        }
    } 
}

function showRepairs() {
    var found = false;
    if (elem3a.style.opacity == '0') {
        for (i=0; i<4; i++) {
            if (elemArray1[i].style.opacity == '1') {
                elemArray1[i].style.opacity = '0';
                elemArray2[i].style.width = '0%';
                elemArray2[i].style.height = '25%';
                found = true;
                setTimeout(hello, 200);
            } 
        }
        if (found == false){
            hello();
        }
        function hello(){
            elem3a.style.opacity = '1';
            elem3b.style.width = '100%';
            elem3b.style.height = '100%';
        }
    } 
}

function showProgramming() {
    var found = false;
    if (elem4a.style.opacity == '0') {
        for (i=0; i<4; i++) {
            if (elemArray1[i].style.opacity == '1') {
                elemArray1[i].style.opacity = '0';
                elemArray2[i].style.width = '0%';
                elemArray2[i].style.height = '25%';
                found = true;
                setTimeout(hello, 200);
            } 
        }
        if (found == false){
            hello();
        }
        function hello(){
            elem4a.style.opacity = '1';
            elem4b.style.width = '100%';
            elem4b.style.height = '100%';
        }
    } 
}

//remove outline when opacity is 0, called in fader onscroll 
function removeOutline() {
    for (i=1; i<5; i++) {
        if (document.getElementById('fig' + i).style.opacity == '0') {
            document.getElementById('btn' + i).style.outline = 'none';
        } else {
            document.getElementById('btn' + i).style.outline = '';
        }
    }
    
}