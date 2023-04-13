//Declare variable, turn the html element into a js variable
let applyBtn = document.getElementById('apply-btn');
let closeBtn = document.getElementById('close-form-btn');


//add click event listeners to the variables to trigger a function once clicked
applyBtn.addEventListener('click', ()=> {
    document.querySelector('.join-modal-bg').style.display = 'flex';
})

closeBtn.addEventListener('click', ()=> {
    document.querySelector('.join-modal-bg').style.display = 'none';
})