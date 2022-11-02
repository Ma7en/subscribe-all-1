


/*  
===============================================
===============================================
*/

/* start sub 1 */

let sub1Btn = document.querySelector(".sub-1 .content .btn");
let sub1Close = document.querySelector(".sub-1 #popup .close");

sub1Btn.addEventListener("click", popupToggle);
sub1Close.addEventListener("click", popupToggle);

function popupToggle() {
    let popup = document.getElementById("popup");
    popup.classList.toggle("active");
}


/* end sub 1 */

/*  
===============================================
===============================================
*/

/* start sub 2 */

let s2day = document.querySelector(".sub-2 .day .numb");
let s2hour = document.querySelector(".sub-2 .hour .numb");
let s2min = document.querySelector(".sub-2 .min .numb");
let s2sec = document.querySelector(".sub-2 .sec .numb");

let s2timer = setInterval(() => {
    let currentDate = new Date().getTime();
    let lanchDate = new Date('Sep 19, 2023 13:00:00').getTime();
    let duration = lanchDate - currentDate;
    let days = Math.floor(duration / (1000 * 60 * 60 * 24));
    let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    let minutes = Math.floor((duration % (1000 * 60 * 60 )) / (1000 * 60));
    let seconds = Math.floor((duration % (1000 * 60)) / 1000);

    s2day.innerHTML = days;
    s2hour.innerHTML = hours;
    s2min.innerHTML = minutes;
    s2sec.innerHTML = seconds;

    if( days < 10) {
        s2day.innerHTML = "0" + days;
    }

    if( hours < 10) {
        s2hour.innerHTML = "0" + days;
    }

    if( minutes < 10) {
        s2min.innerHTML = "0" + days;
    }

    if( seconds < 10) {
        s2sec.innerHTML = "0" + days;
    }

    if(duration < 0) {
        clearInterval(s2timer);
    }

}, 1000);




/* end sub 2 */

/*  
===============================================
===============================================
*/

/* start sub 3 */

let s3startBtn = document.querySelector(".sub-3 .start-btn");
let s3modalBox = document.querySelector(".sub-3 .modal-box");
let s3close = document.querySelector(".sub-3 .modal-box .fa-times");

s3startBtn.addEventListener("click", () => {
    s3modalBox.classList.toggle("show-modal");
    s3startBtn.classList.toggle("show-modal");
});

s3close.addEventListener("click", () => {
    s3modalBox.classList.toggle("show-modal");
    s3startBtn.classList.toggle("show-modal");
});


/* end sub 3 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/


/*  
===============================================
===============================================
*/

/* start sub 1 */



/* end sub 1 */

/*  
===============================================
===============================================
*/

