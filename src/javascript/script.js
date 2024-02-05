const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

const tabClicked = (tab) => {
    tabs.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTab = document.querySelector('.tab-btn.active');
tabClicked(currentActiveTab);


const slides = document.querySelectorAll(".slide");
let index = 0;

function next() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}


function previous() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


    