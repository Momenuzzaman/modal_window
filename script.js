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
    btnsShowModal[i].addEventListener('click',closeModal); 

    btnCloseModal.addEventListener('click', openModal);
    overlay.addEventListener('click', openModal);

    document.addEventListener('keydown',function(e){
        console.log(e);
        if(e.key ==='Escape' && !modal.classList.contains('hidden')){
            openModal();
        }
    });

    
 



