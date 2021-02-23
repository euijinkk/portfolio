'use strict'

const navbar = document.querySelector('#navbar');
let navbarHeight = navbar.getBoundingClientRect().height;

const home = document.querySelector('#home');
const homeContainer = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;

const about = document.querySelector('#about');
const aboutHeight = about.getBoundingClientRect().height;

const skills = document.querySelector('#skills');
const skillsHeight = skills.getBoundingClientRect().height;

const work = document.querySelector('#work');
const workHeight = work.getBoundingClientRect().height;

const testimonial = document.querySelector('#testimonial');
const testimonialHeight = testimonial.getBoundingClientRect().height;

const contact = document.querySelector('#contact');
const contactHeight = contact.getBoundingClientRect().height;




const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

const workBtnContainer = document.querySelector('.work__categories');
const projectBtns = document.querySelectorAll('.work__categories button');

const menuBtns = document.querySelectorAll('.menu ul li');

// // 형변환 parseInt(), 
// var 변수 = parseInt(문자);    //문자를 정수형 숫자로 변환해줌
// var 변수 = parseFloat(문자);     //문자를 실수형 숫자로 변환해줌
// var 변수 = Nu   mber(문자);    //문자를 정수&실수형 숫자로 변환해줌


const arrowBtn = document.querySelector('.arrow-btn');



// document.addEventListener('scroll', () => {
//     menuBtns.forEach((menuBtn) => {
//         menuBorder(menuBtn.dataset.link);
//     })
// })

// function menuBorder (menuName) {
//     const menu = document.querySelector(menuName);
    
//     // menuBtns에서 menuName을 data로 가진 Btn의 index를 구하고,
//     // 거기에 -1한 index 를 찾자.
//     let menuBtnIndex=0;
//     menuBtns.forEach((a) =>{
//         if (a.dataset.link !== menuName) {
//             return;
//         } else {
            
//             for(let i=0; i<menuBtns.length;i++){
//                 if (a.dataset.link !== menuBtns[i].dataset.link){
//                     return;
//                 } else {
//                     menuBtnIndex = i;
//                     break;
//                 }
//             }
//         }
//     })
//     let menuMinus1 = 0;
//     if (menuBtnIndex === 0) {
//         return;
//     } else {
//         let menuMinus1 = document.querySelector(menuBtns[menuBtnIndex-1].dataset.link);
//     }   

    
//     // 선택된 메뉴 이전에 있는 것
    
//     if (menuMinus1.offsetTop < window.scrollY && window.scrollY < menu.offsetTop) {
//         menuBtns.forEach((menuBtn) => {
//             if (menuBtn.dataset.link === menuName) {
//                 menuBtn.classList.add('active');
//             } else{
//                 menuBtn.classList.remove('active');
//             }
//         } )
//     }
// }



// Navbar

// Scroll 될때마다, Navbar Menu Btn의 border가 바뀌게 하는 기능

// 1. 모든 section 요소들을 가지고 온다.
// 2. IntersectionObserver 를 이용해서 모든 섹션을 관찰한다
// 3. 보이는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다.

// const sectionIds = [
//     '#home',
//     '#about',
//     '#skills',
//     '#work',
//     '#testimonials',
//     '#contact',
//   ];
//   const sections = sectionIds.map(id => document.querySelector(id));
//   const navItems = sectionIds.map(id =>
//     document.querySelector(`[data-link="${id}"]`)
//   );
  
//   let selectedNavIndex = 0;
//   let selectedNavItem = navItems[0];
//   function selectNavItem(selected) {
//     selectedNavItem.classList.remove('active');
//     selectedNavItem = selected;
//     selectedNavItem.classList.add('active');
//   }
  
//   const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.3,
//   };
  
//   const observerCallback = (entries, observer) => {
//     entries.forEach(entry => {
//       if (!entry.isIntersecting && entry.intersectionRatio > 0) {
//         const index = sectionIds.indexOf(`#${entry.target.id}`);
//         // 스크롤링이 아래로 되어서 페이지가 올라옴
//         if (entry.boundingClientRect.y < 0) {
//           selectedNavIndex = index + 1;
//         } else {
//           selectedNavIndex = index - 1;
//         }
//       }
//     });
//   };
  
//   const observer = new IntersectionObserver(observerCallback, observerOptions);
//   sections.forEach(section => observer.observe(section));
  

// callback함수는 이 함수가 실행되는 동안, 다른 작업이 동시에 실행될 수 없다.
// 그러므로, callback함수는 최대한 간단하게 만들어주어야 한다.
document.addEventListener('scroll', () => { 
    let active = document.querySelector('.menu ul li.active');
    // navbarHeight = navbar.getBoundingClientRect().height;
    navbarHeight = navbar.getBoundingClientRect().height;
    let sectionPaddingBottom = parseInt(window.getComputedStyle(home, null).getPropertyValue('padding-bottom').slice(0,-2));   
    
    if (navbarHeight>100) {
        sectionPaddingBottom = navbarHeight;
    } 
    // 코드가 길다. 수정이 필요하다.
    if (window.scrollY+sectionPaddingBottom <= about.offsetTop-navbarHeight) {
        active.classList.remove('active')
        menuBtns[0].classList.add('active')
    } else if (window.scrollY+sectionPaddingBottom <= skills.offsetTop-navbarHeight) {
        active.classList.remove('active')
        menuBtns[1].classList.add('active')
    } else if (window.scrollY+sectionPaddingBottom <= work.offsetTop-navbarHeight) {
        active.classList.remove('active')
        menuBtns[2].classList.add('active')
    } else if (window.scrollY+sectionPaddingBottom <= testimonial.offsetTop-navbarHeight) {
        active.classList.remove('active')
        menuBtns[3].classList.add('active')
    } else if (window.scrollY+sectionPaddingBottom <= contact.offsetTop-navbarHeight) {
        active.classList.remove('active')
        menuBtns[4].classList.add('active')
    } else if (window.scrollY+sectionPaddingBottom <= document.body.clientHeight) {
        active.classList.remove('active')
        menuBtns[5].classList.add('active')
    }
})

// Handle scrolling when tapping on the navbar menu
const navbarMenuList = document.querySelector('.menu ul');
navbarMenuList.addEventListener('click', (event) => {
    // console.log(event.target);
    navbarMenu.classList.remove('click');

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

// Navbar toggle button for small screen
const toggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarMenu = document.querySelector('#navbar .menu');

toggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('click');
    
})


//Home

// Scroll될때, Home이 투명해지는 기능

document.addEventListener('scroll',() => {
    // Make navbar transparent when it is on the top
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    };
    
    // Make home transparent when window is scrolled
    if(window.scrollY > homeHeight) {
        
        // arrowBtn.style.visibility = "visible";
        return;
    } else if (window.scrollY > homeHeight/4) {
        
        homeContainer.style.opacity = (1- (window.scrollY/homeHeight));
        // arrowBtn.style.visibility = "hidden";
    } else {
        homeContainer.style.opacity = 1;
        // arrowBtn.style.visibility = "hidden";
    };

    
});




// Work 

// callback 해오면, 효율적이다.
workBtnContainer.addEventListener('click', (e) => {
    // btn위 span이 선택되는 경우도 생각해야한다.
    const stack = e.target.dataset.stack || e.target.parentNode.dataset.stack;
    projectContainer.classList.add('anim-out');    
    setTimeout(()=>{
        // 비동기적으로 발생하도록.
        // 기존의 것이 anim-out되고, 0.3초 후에 filtering 하게 하자.
        // brower에게 0.3초 후에 실행하도록 부탁하는 API이다.
        projectContainer.classList.remove('anim-out');  
        filterProject(stack);  
    },300)

    for (let Btn of projectBtns) {
        // btn위 span이 선택되는 경우도 생각해야한다.
        if (Btn == e.target || Btn == e.target.parentNode) {
            Btn.classList.add("active");
        } else {
            Btn.classList.remove("active");
        }
    }
})


// Contact

// Handle click on "contact me" button on home
const contactmeBtn = document.querySelector('.home__contact__btn');

contactmeBtn.addEventListener('click', () => {

    scrollIntoView('#contact');
    // const scrollTo = document.querySelector(#contact);
    // scrollTo.scrollIntoView({behavior:'smooth'});
    // 2회 반복해서 쓰이니 함수화하자.

});

// Handle click on the "arrow button"
document.addEventListener('scroll', () => {
    if (window.scrollY > homeHeight-navbarHeight) {
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible')
    }
})

arrowBtn.addEventListener('click',() =>{
    scrollIntoView('#home');
});



// projectBtns[1].addEventListener('click', () =>{
//     filterProject(projectBtn[1].dataset.stack);
// })

// projectBtns[2].addEventListener('click', () =>{
//     filterProject("backEnd");
// })

// projectBtns[3].addEventListener('click', () =>{
//     filterProject("mobile");
// })

// projectBtns[0].addEventListener('click', ()=>{
//     for (let project of projects){
//         project.classList.remove("invisible");
//     };
// })

// Function

// scroll function
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:'smooth'});
};




// 1. 버튼 개수가 아무리 많아져도 코드 수정이 적어야한다.
// 2. stack의 이름이 바뀌어도 코드 수정이 적어야 한다.
// => project와 btn을 array로 받자.

//  Work - All projects를 filter 하는 함수
function filterProject(stack) {
    if (stack==null){
        // work__categories 중 빈곳을 택했을 때,
        return;
    } else if (stack==="All"){
        for (let project of projects) {
            project.classList.remove("invisible");
        }
    } else {
        // projects.forEach((project) => {}) 와 같다.
        for (let project of projects) {
            if (project.dataset.stack != stack) {
                project.classList.add("invisible");
            } else {
                project.classList.remove("invisible");
            }
        }
    }
    }






// for (let projectBtn of projectBtns) {
//     clickProject(projectBtn);
// };

// function clickProject (projectBtn) {
//     projectBtn.addEventListener('click', () =>{
//         console.log(projectBtn.dataset.stack);
//         filterProject(projectBtn.dataset.stack);
        
//         for (let Btn of projectBtns) {
//             if (Btn == projectBtn) {
//                 Btn.classList.add("active");
//             } else {
//                 Btn.classList.remove("active");;
//             }
//         }
        
//     })
// };