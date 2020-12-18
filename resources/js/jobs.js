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

// Show and hide sections 

let buttonSection = document.getElementById('buttonSection');
let application = document.getElementById('applicationSection');
let resumeForm = document.getElementById('resumeForm');
let buttonRow = document.getElementById('buttonRow');


function showResume() {
    buttonSection.style.display = 'none';
    resumeForm.style.display = 'block';
    buttonRow.style.display = 'block';
}

function showApplication(){
    buttonSection.style.display = 'none';
    application.style.display = 'block';
    buttonRow.style.display = 'block';
}

function backButton(){
    buttonRow.style.display = 'none';
    if (application.style.display == 'block') {
        application.style.display = 'none';
    }
    if (resumeForm.style.display == 'block'){
        resumeForm.style.display = 'none';
    }
    buttonSection.style.display = 'block';
}

//show and hide divs for feedback page
let venue = document.getElementById('venue');
let broadwayRadio = document.getElementById('broadwayRadio');
let demonbreunRadio = document.getElementById('demonbreunRadio');
let explain = document.getElementById('explain');

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
    let radio = document.getElementsByName('rating');
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
    let radio = document.getElementsByName('monitor-rating');
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










