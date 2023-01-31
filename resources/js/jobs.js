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
let error = document.getElementById('error');
let city = document.getElementById('city').value;
let application = document.getElementById('applicationSection');
let resumeForm = document.getElementById('resumeForm');
let applicationMemphis = document.getElementById('applicationSectionMemphis');
let resumeFormMemphis = document.getElementById('resumeFormMemphis');
let applicationBham = document.getElementById('applicationSectionBham');
let resumeFormBham = document.getElementById('resumeFormBham');
let buttonRow = document.getElementById('buttonRow');

function updateVariable() {
    city = document.getElementById('city').value;
}


function showResume() {
    switch (city) {
        case '':
            error.style.display = 'block';
            break;
        case 'Nashville':
            buttonSection.style.display = 'none';
            resumeForm.style.display = 'block';
            buttonRow.style.display = 'block';
            break;
        case 'Memphis':
            buttonSection.style.display = 'none';
            resumeFormMemphis.style.display = 'block';
            buttonRow.style.display = 'block';
            break;    
        case 'Birmingham':
            buttonSection.style.display = 'none';
            resumeFormBham.style.display = 'block';
            buttonRow.style.display = 'block';
            break;    
    } 
}

function showApplication(){
    switch (city) {
        case '':
            error.style.display = 'block';
            break;
        case 'Nashville':
            application.style.display = 'block';
            buttonSection.style.display = 'none';
            buttonRow.style.display = 'block';
            break;
        case 'Memphis':
            applicationMemphis.style.display = 'block';
            buttonSection.style.display = 'none';
            buttonRow.style.display = 'block';
            break;    
        case 'Birmingham':
            applicationBham.style.display = 'block';
            buttonSection.style.display = 'none';
            buttonRow.style.display = 'block';
            break;    
    }
}

function backButton(){
    buttonRow.style.display = 'none';
    if (error.style.display == 'block'){
        error.style.display = 'none';
    }
    if (application.style.display == 'block') {
        application.style.display = 'none';
    } else
    if (resumeForm.style.display == 'block'){
        resumeForm.style.display = 'none';
    } else
    if (applicationMemphis.style.display == 'block') {
        applicationMemphis.style.display = 'none';
    } else
    if (resumeFormMemphis.style.display == 'block'){
        resumeFormMemphis.style.display = 'none';
    }
    if (applicationBham.style.display == 'block') {
        applicationBham.style.display = 'none';
    } else
    if (resumeFormBham.style.display == 'block'){
        resumeFormBham.style.display = 'none';
    }
    buttonSection.style.display = 'block';
}











