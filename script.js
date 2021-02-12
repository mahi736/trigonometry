/*****************taking all required elements **********/
let degree = document.querySelector('.degree');
let input = document.getElementById('input');
let submit = document.getElementById('submit');
let label = document.querySelector('.label');
let button = document.querySelectorAll('.btn-tri');
let degP = document.querySelector('.deg-p');
let deinput = document.querySelector('.deinput');
let wrong = document.querySelector('.wrong');
let quad = document.getElementById('quad');

/******** Utility functions that needs ***********/

// funciton to check the value is positive or not
function isPositive(value){
    if(value >= 0){
        return true;
    } else {
        return false;
    }
}

// function to check the trigonometry is positive or not on quadrant

function triPositive(tri, quad){
    if(quad == '1st'){
        return true;
    }
    else if(quad == '2nd'){
        if(tri == 'Sin' || tri == 'Cosec'){
            return true;
        } else{
            return false;
        }
    }
    else if(quad == '3rd'){
        if(tri == 'Tan' || tri == 'Cot'){
            return true;
        } else {
            return false;
        }
    }
    else if(quad == '4th'){
        if(tri == 'Cos' || tri == 'Sec'){
            return true;
        } else {
            return false;
        }
    }
}

// function to check the number is even or odd
function isEven(num){
    even = num % 2;
    if(even == 0){
        return true;
    } else {
        return false;
    }
}

// function to change the trigometry value when the number is odd
function trigoChange(trigo){
    if(trigo == 'Sin'){
        return 'Cos';
    }
    if(trigo == 'Cos'){
        return 'Sin';
    }
    if(trigo == 'Tan'){
        return 'Cot';
    }
    if(trigo == 'Cot'){
        return 'Tan';
    }
    if(trigo == 'Cosec'){
        return 'Sec';
    }
    if(trigo == 'Sec'){
        return 'Cosec';
    }
}
// function to change radian to degree
function toDegree(value){
    return value * Math.PI / 180;
}

// Selecting all buttons..
Array.from(button).forEach(element => {
    
    // when user clicks it should disable and display the degree
    element.addEventListener('click', ()=>{
        Array.from(button).forEach(elem =>{
            elem.setAttribute('disabled', 'true');
        })
    window. trigo = element.innerText; 
    mline1.innerHTML = trigo;
    window.location.href = '#scrollin';
    degP.style.display = 'block';
    deinput.style.display = 'block';
    })
});

// user should input the valid degrees
input.addEventListener('input', ()=>{
    regex = /^-?\d+$/;
    if(regex.test(input.value)){
        submit.removeAttribute('disabled');
        wrong.style.display = 'none';
        mline1.innerHTML = trigo + input.value;
    }
    else{
        submit.setAttribute('disabled', 'true');
        wrong.style.display = 'block';
    }
    
})

// main part is here
submit.addEventListener('click', ()=>{
     value = input.value;
     
    window.location.href = '#heading'; // this is for scrolling
    // moving the circle on quadrant
    if(isPositive(value)){
    if(value > 360){
        var value = value % 360;
    }
    if(value <= 90){
        let deg = value * 2.5;
        degree.style.top = 0 - deg + 'px'; 
        degree.style.left = 225 - deg + 'px'; 
        quadre = '1st';
    }
    else if(value <= 180 && value > 90){
        value = value - 90;
        deg = value * 2.5;
        degree.style.top = (-225 + deg) + 'px'; 
        degree.style.left = 0 - deg + 'px'; 
        quadre = '2nd';
    }
    else if(value <= 270 && value > 180){
        value = value - 180;
        deg = value * 2.5;
        degree.style.top = (0 + deg) + 'px'; 
        degree.style.left = (-225 + deg) + 'px';
        quadre = '3rd';
    }
    else if(value <= 360 && value > 270){
        value = value - 270;
        deg = value * 2.5;
        degree.style.top = (225 - deg) + 'px'; 
        degree.style.left = (0 + deg) + 'px';
        quadre = '4th';
    }
} else{
    value = Math.abs(value);
    if(value > 360){
        var value = value % 360;
    }
    if(value <= 90){
        let deg = value * 2.5;
        degree.style.top = 0 + deg + 'px'; 
        degree.style.left = 225 - deg + 'px';
        quadre = '4th'; 
    }
    else if(value <= 180 && value > 90){
        value = value - 90;
        deg = value * 2.5;
        degree.style.top = 225 - deg + 'px'; 
        degree.style.left = 0 - deg + 'px'; 
        quadre = '3rd';
    }
    else if(value <= 270 && value > 180){
        value = value - 180;
        deg = value * 2.5;
        degree.style.top = 0 - deg + 'px'; 
        degree.style.left = (-225 + deg) + 'px';
        quadre = '2nd';
    }
    else if(value <= 360 && value > 270){
        value = value - 270;
        deg = value * 2.5;
        degree.style.top = (-225 + deg) + 'px'; 
        degree.style.left = (0 + deg) + 'px';
        quadre = '1st';
    }
}
    // displaying the values
    quad.innerHTML = '<p>Calculating...</p>' 
    if(triPositive(trigo, quadre)){
        window. tripos = 'Positive';
        pos = '';
    }   else {
        window. tripos = 'Negative';
        pos = '-';
    }
    // value should be absolute 
    let absolute = Math.abs(input.value);
    let divide = parseInt(absolute / 90);
    let extra = absolute % 90;
    if(isEven(divide)){
        tri = trigo;
    }  else {
        tri = trigoChange(trigo); // changed
    }
    // displaying everything after 1 second for better user experience
    setTimeout(() => {
        quad.innerHTML = `<p><b>${quadre}</b> quadrant ${trigo} is <b>${tripos}</b></p>`;
        mline2.innerText = `=${trigo}(${divide} × 90 + ${extra})`;
        mline3.innerText = `=${pos}${tri}${extra}`;
        if(tri == 'Sin'){
        mline4.innerText = `=${pos}${Math.sin(toDegree(extra))} (Ans)`;
        }
        else if(tri == "Cos"){
        mline4.innerText = `=${pos}${Math.cos(toDegree(extra))} (Ans)`;
        }
        else if(tri == 'Tan'){
        mline4.innerText = `=${pos}${Math.tan(toDegree(extra))} (Ans)`;
        }
        else if(tri == 'Cosec'){
        mline4.innerText = `=${pos}${1 / Math.sin(toDegree(extra))} (Ans)`;
        }
        else if(tri == 'Sec'){
        mline4.innerText = `=${pos}${1 / Math.cos(toDegree(extra))} (Ans)`;
        }
        else if(tri == 'Cot'){
        mline4.innerText = `=${pos}${1 / Math.tan(toDegree(extra))} (Ans)`;
        }
    }, 1000);
})
// designing the input element
input.addEventListener('click', ()=>{
    label.style.top = '2.3px';
    input.style.borderBottom = '2px solid red';
})
input.addEventListener('blur', ()=>{
    if(input.value == ''){
    label.style.top = '34px';
    input.style.borderBottom = '2px solid black';
    wrong.style.display = 'block';
    }
    else{
        wrong.style.display = 'none';
    }
})
// when user wants to change the trigonometry..
change.addEventListener('click', ()=>{
    Array.from(button).forEach(eleme => {
        eleme.removeAttribute('disabled');
    })
    input.value = '';
    mline1.innerHTML = '';
    mline2.innerText = '';
    mline3.innerText = '';
    mline4.innerText = '';
    quad.innerHTML = '';
    degP.innerText = '';
    deinput.style.display = 'none';
})