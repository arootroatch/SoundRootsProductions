let laxContext;
if(window.innerWidth<=973 && document.documentElement.clientHeight<=830) {
    laxContext = 'disabled';
} else {
    laxContext = 'enabled';
}

removeAnchors();
toggleLax();
window.addEventListener("resize", function() {
    removeAnchors();
    toggleLax();
    lax.updateElements();
});




//fader fun
var enabled = 'yes';
var faderPath = document.getElementById('scrolltrack');
var fader = document.getElementById('scrollthumb');
let touch = false;

//click and drag
fader.addEventListener('mousedown', pickup, false);
function pickup(event) {
    if (touch == false){
        enabled = 'no';
        let startPos = event.clientY;
        let faderStart = fader.offsetTop;
        
        function moveAt(event) {
            let bottomEdge = faderPath.offsetHeight - fader.offsetHeight;
            let dragDist = event.clientY - startPos;
            let newTop = faderStart + dragDist;        
            //restrains fader in track
            if(newTop<0){
                newTop=0;
            } else if(newTop>bottomEdge){
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
        }
        document.addEventListener('mousemove', moveAt, false);
        document.addEventListener('mouseup', dropIt, false);

        function dropIt() {
            document.removeEventListener('mousemove', moveAt, false);
            fader.onmouseup = null;
            enabled = 'yes';
        }
    }
}

fader.addEventListener('touchstart', touchPickup, false);
function touchPickup(event) {
    enabled = 'no';
    touch = true;
    let startPos = event.targetTouches[0].clientY;
    let faderStart = fader.offsetTop;
   
    function moveAt(touchEvent) {
        let bottomEdge = faderPath.offsetHeight - fader.offsetHeight;
        let dragDist = touchEvent.targetTouches[0].clientY - startPos; 
        let newTop = faderStart + dragDist;
              
        //restrains fader in track
        if(newTop<0){
            newTop=0;
        } else if(newTop>bottomEdge){
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
    }
    document.addEventListener('touchmove', moveAt, false);
    document.addEventListener('touchend', dropIt, false);

    function dropIt() {
        document.removeEventListener('touchmove', moveAt, false);
        fader.ontouchend = null;
        enabled = 'yes';
        touch = false;
    }
}

fader.ondragstart = function() {
    return false;
}

//make fader move with window scrolling
window.addEventListener('scroll', scrollLink, false);
function scrollLink(){
    if(enabled == 'yes') {
        var scrollPos = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = ((scrollPos/height)*100)/1.13;
        fader.style.top = scrolled + "%";
    }
    //change opacity of container
    if (document.documentElement.clientWidth <= 685) {
        var scrollPos = document.documentElement.scrollTop;
        var vpHeight = document.documentElement.clientHeight;
        var scrollPer = (scrollPos/vpHeight)*2;
        if (scrollPer >= 1){
            scrollPer = 1;
        }
        document.getElementById('container').style.opacity = scrollPer;
    }
}


//anchorDiv 
function removeAnchors() {
    if(window.innerWidth <= 685 || laxContext=='disabled') {
        document.getElementById("largeAnchors").innerHTML = " ";
    } else {
        if(document.getElementById("largeAnchors").innerHTML === " "){
            document.getElementById("largeAnchors").innerHTML = `<a href="#" id="aboutAnchor"></a>
            <a href="#" id="philosophyAnchor"></a>
            <a href="#" id="audioAnchor"></a>
            <a href="#" id="lightingAnchor"></a>
            <a href="#" id="repairAnchor"></a>
            <a href="#" id="programmingAnchor"></a>`
        } 
    }
}

//side nav 

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.opacity = "0.5";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
    document.getElementById("main").style.opacity = "1";
}
//close Nav when clicking outisde of it
document.getElementById('main').addEventListener('touchstart', closeNav);
document.getElementById('main').addEventListener('mousedown', closeNav);

let closed = true;

function toggleNestedNav(){
    if (closed == true) {
        document.getElementById("nestedNav").style.height = "190px";
        closed = false;
    } else {
        document.getElementById("nestedNav").style.height = "0px";
        closed = true;
    }
}


//curator

/* curator-feed-default-feed-layout */
(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/5c45e6ba-7cbc-48d2-be74-39dd75a45ccd.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();

//toggle lax 
function toggleLax() {
   let laxArray = document.getElementsByClassName("toggle");
   
   if(window.innerWidth<=973 && document.documentElement.clientHeight<=830){
       for (let i=0; i<laxArray.length; i++){
           if (laxArray[i].classList.contains('lax')){
                laxArray[i].classList.remove('lax');
                laxArray[i].style.opacity = 1;
                if (laxContext == 'enabled') {
                    location.reload();
                }              
           }
       }
   } else {
        for (let i=0; i<laxArray.length; i++){
            if (!laxArray[i].classList.contains('lax')){
                laxArray[i].classList.add('lax'); 
                if (laxContext=='disabled'){
                    location.reload();
                }
            } 
        }
   }
}