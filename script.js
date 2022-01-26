const modal = document.querySelector('.modal');

const overlay = document.querySelector('.overlay');

const btnsShowModal = document.querySelectorAll('.show-modal');

const btnCloseModal = document.querySelector('.close-modal');

const openModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

const closeModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsShowModal.length; i++)

    btnsShowModal[i].addEventListener('click',function(){
       closeModal();
    }); 

  

    btnCloseModal.addEventListener('click',function(){
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        openModal();
    });
    overlay.addEventListener('click',function(){
        // modal.classList.add('hidden');
        // overlay.classList.add('hidden');
        openModal();
    });




