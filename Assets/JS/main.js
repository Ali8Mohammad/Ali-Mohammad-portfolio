var typed = new Typed('.sec-text', {
    strings : ['Ali Mohammad', 'Civil Engineer', 'Developer'],
    typeSpeed : 50,
    backSpeed : 50,
    loop :  true,
})
const container = document.querySelector('.progress-bars');
const progress = document.querySelectorAll('.progress');
const percetage = document.querySelectorAll('.percetage');
let bol = false ;
let count;

window.addEventListener('scroll', () => {
    if (pageYOffset > container.offsetTop - 400 && bol === false) {
        for (let i=0; i < progress.length; i++) {
            percetage.innerText = 0;
            count = 0;
            const data = parseInt(progress[i].dataset.count);
            progress[i].style.transition = 'width ' + (data * 30) + 'ms';
            progress[i].style.width = (data + 15) + '%';

            function updateCount() {
                if (count < data) {
                    count++;
                    percetage[i].innerText = count + '%'
                    setTimeout(updateCount, 50)
                }else {
                    percetage[i].innerText = data + '%'
                }
                }
                updateCount()
                bol = true
            }
        }
    })
    var swiper = new Swiper(".slider", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    let iconNav = document.querySelector('.fa-bars');
    let linksNavBar_2 = document.querySelector('.links-nav2');
    let logoNav = document.querySelector('.nav2-title')
    iconNav.addEventListener('click', () => {
        linksNavBar_2.classList.toggle('active-links')
        logoNav.classList.toggle('hidden')
    })
    let nums = document.querySelectorAll('.our-numbers .nums');
    let section = document.querySelector('.scrolling-section');
    let started = false;
    
    window.onscroll = function() {
        if (window.scrollY >= section.offsetTop) {
            if (!started) {
                nums.forEach((num) => startCount(num));
            }
            started = true;
        }

        if (window.scrollY > 430 || document.documentElement.scrollTop > 430) {
            document.querySelector(".nav-bar").style.backgroundColor = "#fff";
            document.querySelector(".nav-bar").style.color = "#000";
            document.querySelector(".nav-2").style.backgroundColor = "#fff";
            document.querySelector(".nav-2").style.color = "#000";
        } else {
            document.querySelector(".nav-2").style.backgroundColor = "transparent";
            document.querySelector(".nav-2").style.color = "#fff";
        }
    }
    
    function startCount(el) {
        let goal = el.dataset.goal;
        let counter = setInterval(() => {
            el.textContent++;
            if (el.textContent == goal) {
                clearInterval(counter)
            }
        }, 3000 / goal);
    }
    

    document.addEventListener('DOMContentLoaded', function() {
        const tabs = document.querySelectorAll('.tabs li');
        const projects = document.querySelectorAll('.projects');
    
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.getAttribute('data-filter');
    
                projects.forEach(project => {
                    const category = project.getAttribute('data-category');
                    if (filter === 'all' || (category && category.includes(filter))) {
                        project.style.display = 'flex';
                    } else {
                        project.style.display = 'none';
                    }
                });
    
                tabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
            });
        });
    });
    
