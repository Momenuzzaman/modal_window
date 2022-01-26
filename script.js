const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnsShowModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('close-modal');

for(let i = 0; i < btnsShowModal.length; i++){
    let btnShowModal = btnsShowModal[i];
    
    btnShowModal.addEventListener('click',function(){
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
    });
    
}
