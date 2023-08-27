/*cdnjs  search - typed and copy in html source link*/

var typed = new Typed(".typing",{
    strings:["веб дизайнером","веб разработчиком","проффесионалом своего дела"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})

/*modal*/

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);

/*modal end*/
