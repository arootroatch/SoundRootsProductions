//show and hide divs for feedback page
let venue = document.getElementById('venue');
let broadwayRadio = document.getElementById('broadwayRadio');
let demonbreunRadio = document.getElementById('demonbreunRadio');
let explain = document.getElementById('explain');
let memphisForm = document.getElementById('memphisForm');
let nashvilleForm = document.getElementById('nashvilleForm'); 

function revealCity(){
    city = document.getElementById('city').value;
    switch (city){
        case 'Nashville':
            if (memphisForm.style.display == 'block'){
                memphisForm.style.display = 'none';
            }
            if (bhamForm.style.display == 'block'){
                bhamForm.style.display = 'none';
            }
            nashvilleForm.style.display = 'block'
            break;
        case 'Memphis':
            if (nashvilleForm.style.display == 'block'){
                nashvilleForm.style.display = 'none';
            }
            if (bhamForm.style.display == 'block'){
                bhamForm.style.display = 'none';
            }
            memphisForm.style.display = 'block';
            break; 
        case 'Birmingham':
            if (nashvilleForm.style.display == 'block'){
                nashvilleForm.style.display = 'none';
            }
            if (memphisForm.style.display == 'block'){
                memphisForm.style.display = 'none';
            }
            bhamForm.style.display = 'block';
            break; 
    }
}

function revealOptions(){
    switch (venue.value){
        case 'TR-Broadway':
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
                document.getElementById('demonbreunBtn').disabled = true;
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
                document.getElementById('other').disabled = true;
            }
            broadwayRadio.style.display = 'block'
            document.getElementById('broadwayBtn').disabled = false;
            break;
        case 'TR-Demonbreun':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
                document.getElementById('broadwayBtn').disabled = true;
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
                document.getElementById('other').disabled = true;
            }
            demonbreunRadio.style.display = 'block'
            document.getElementById('demonbreunBtn').disabled = false;
            break;
        case 'Sutler':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
                document.getElementById('broadwayBtn').disabled = true;
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
                document.getElementById('other').disabled = true;
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
                document.getElementById('demonbreunBtn').disabled = true;
            }
            break;
        case 'Other':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
                document.getElementById('broadwayBtn').disabled = true;
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
                document.getElementById('demonbreunBtn').disabled = true;
            }
            explain.style.display = 'block'
            document.getElementById('other').required = true;
            document.getElementById('other').disabled = false;
            break;
        case '':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
                document.getElementById('broadwayBtn').disabled = true;
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
                document.getElementById('demonbreunBtn').disabled = true;
            }
            break;
    }
}
let radio = document.getElementsByName('soundcheck-rating');
// let radioArray = [].slice.call(radio, 0);
let x = parseInt(radio[0].getAttribute('value'));
console.log(radio);


function serviceRadio(){
    let radio = document.getElementsByName('service-rating');
    for (let i = 0; i<radio.length; i++) {
        let x = parseInt(radio[i].getAttribute('value'));
        if (radio[i].checked) {
            for (let j = (x-1); j>0; j--) {
                document.getElementById('cs' + j).classList.add('solid-star');
            }
            for (let k = (x+1); k<radio.length; k++) {
                document.getElementById('cs' + k).classList.remove('solid-star');
            }
        }
    }
}
function soundcheckRadio(){
    let radio = document.getElementsByName('soundcheck-rating');
    for (let i = 0; i<radio.length; i++) {
        let x = parseInt(radio[i].getAttribute('value'));
        if (radio[i].checked) {
            for (let j = (x-1); j>0; j--) {
                document.getElementById('sc' + j).classList.add('solid-star');
            }
            for (let k = (x+1); k<radio.length; k++) {
                document.getElementById('sc' + k).classList.remove('solid-star');
            }
        }
    }
}
function overallRadio(){
    let radio = document.getElementsByName('engineer-rating');
    for (let i = 0; i<radio.length; i++) {
        let x = parseInt(radio[i].getAttribute('value'));
        if (radio[i].checked) {
            for (let j = (x-1); j>0; j--) {
                document.getElementById('all' + j).classList.add('solid-star');
            }
            for (let k = (x+1); k<radio.length; k++) {
                document.getElementById('all' + k).classList.remove('solid-star');
            }
        }
    }
}
function monitorRadio(){
    let radio = document.getElementsByName('mix-rating');
    for (let i = 0; i<radio.length; i++) {
        let x = parseInt(radio[i].getAttribute('value'));
        if (radio[i].checked) {
            for (let j = (x-1); j>0; j--) {
                document.getElementById('mon' + j).classList.add('solid-star');
            }
            for (let k = (x+1); k<radio.length; k++) {
                document.getElementById('mon' + k).classList.remove('solid-star');
            }
        }
    }
}

function generalRadio(){
    let radio = document.getElementsByName('general-rating');
    for (let i = 0; i<radio.length; i++) {
        let x = parseInt(radio[i].getAttribute('value'));
        if (radio[i].checked) {
            for (let j = (x-1); j>0; j--) {
                document.getElementById('gen' + j).classList.add('solid-star');
            }
            for (let k = (x+1); k<radio.length; k++) {
                document.getElementById('gen' + k).classList.remove('solid-star');
            }
        }
    }
}

//nav

function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.getElementById("main").style.opacity = "0.5";
}

function closeNav() {
    document.getElementById("sideNav").style.width = "0px";
    document.getElementById("main").style.opacity = "1";
}

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