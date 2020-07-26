var faderPath = document.getElementById('scrolltrack');
var fader = document.getElementById('scrollthumb');
let bottomEdge = ((faderPath.offsetHeight - fader.offsetHeight)/faderPath.offsetHeight)*100;
window.onresize = function() {
    bottomEdge = ((faderPath.offsetHeight - fader.offsetHeight)/faderPath.offsetHeight)*100;
    return bottomEdge;
}
const percentOffset = ((100 - bottomEdge)/100) + 1;

//click and drag
fader.onmousedown = function(event) {

    // document.body.append(fader);
    function moveAt(clientY) {
        // fader.style.left = pageX - fader.offsetWidth / 2 + 'px';
        let newTop = (((clientY - faderPath.getBoundingClientRect().top)/faderPath.offsetHeight)*100);
        console.log(newTop);
        
        //restrains fader in track
        if(newTop<0){
            newTop=0;
        }
        
        if(newTop>bottomEdge){
            newTop = bottomEdge;
        }
        //sets new position
        fader.style.top = newTop + '%';
        //make page scroll with fader position
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrollPos = ((newTop/100)*percentOffset)*height;
        console.log(scrollPos);
        document.documentElement.scrollTop = scrollPos;

    }
    moveAt(event.clientY);

    function onMouseMove(event) {
        moveAt(event.clientY);
    }
    document.addEventListener('mousemove', onMouseMove);
    document.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        fader.onmouseup = null;
    }
}
fader.ondragstart = function() {
    return false;
}

//make fader move with window scrolling

window.onscroll = function scrollLink(){
    var scrollPos = document.documentElement.scrollTop;
// console.log(scrollPos);
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = ((scrollPos/height)*100);
    fader.style.top = 'calc(' + scrolled + '%/' + percentOffset + ")";
    // document.addEventListener('scroll', scrollLink);
}