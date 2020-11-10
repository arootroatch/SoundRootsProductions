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
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
            }
            broadwayRadio.style.display = 'block'
            break;
        case 'TR-Demonbreun':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
            }
            demonbreunRadio.style.display = 'block'
            break;
        case 'Sutler':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
            }
            break;
        case 'Other':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
            }
            explain.style.display = 'block'
            document.getElementById('other').required = true;
            break;
        case '':
            if (broadwayRadio.style.display == 'block'){
                broadwayRadio.style.display = 'none';
            }
            if (explain.style.display == 'block'){
                explain.style.display = 'none';
                document.getElementById('other').required = false;
            }
            if (demonbreunRadio.style.display == 'block'){
                demonbreunRadio.style.display = 'none';
            }
            break;
    }
}







