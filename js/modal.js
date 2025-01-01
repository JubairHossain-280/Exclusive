//todo Marquee Animation

$('.marquee').marquee({
	duration: 30000,
	gap: 0,
	delayBeforeStart: 0,
	direction: 'left',
	duplicated: true,
    pauseOnHover: true,
    startVisible: true,
});


//? Login Modal

const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.my-modal');
const closeModal = document.querySelector('.close-modal');
const body = document.querySelector('body');
const submitBtn = document.querySelector('.create-btn button');


openModal.addEventListener('click', () => {
    modal.style.display = 'block';
    modal.classList.add('slide-down');
    // body.style.backgroundColor = 'rgba(0, 0, 0, 0.582)';
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('slide-down');
    modal.classList.add('slide-up');
    // body.style.backgroundColor = 'white';
    modal.addEventListener('animationend', () => {
        modal.style.display = 'none';
        modal.classList.remove('slide-up');
    }, {once: true});

});

// submitBtn.onclick = alert('Your account has been created successfully!');

//? Login Modal

