'use strict'

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;


// Make navbar transparent when it is on the top
document.addEventListener('scroll',() => {
    
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


// Handle scrolling when tapping on the navbar menu
const navbarIndex = document.querySelector('.index ul');
navbarIndex.addEventListener('click', (event) => {
    // console.log(event.target);

    const target = event.target;
    const link = target.dataset.link;
    if(link==null) {
        // button말고 빈곳을 클릭했을때, undefined이 나온다.
        // 이때는 함수를 실행시키지 않고, 빠르게 return하는게 효율적이다.
        return;
    } else {
        // const scrollTo = document.querySelector(link);
        // scrollTo.scrollIntoView({behavior:'smooth'});
        scrollIntoView(link);
    }
});

// Handle click on "contact me" button on home
const contactmeBtn = document.querySelector('.profile__contact__btn');

contactmeBtn.addEventListener('click', () => {

    scrollIntoView('#contact');
    // const scrollTo = document.querySelector(#contact);
    // scrollTo.scrollIntoView({behavior:'smooth'});
    // 2회 반복해서 쓰이니 함수화하자.

});

function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
};