//Выпадающий список
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".nav__item-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".container-dropdown");

            document.querySelectorAll(".nav__item-btn").forEach(el => {
                if (el != btn) {
                    el.classList.remove("active--btn");
                }
            });

            document.querySelectorAll(".container-dropdown").forEach(el => {
                if (el != dropdown) {
                    el.classList.remove("active-list--item");
                }
            })
            dropdown.classList.toggle("active-list--item");
            btn.classList.toggle("active--btn")
        })
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".nav__list")) {
            document.querySelectorAll(".container-dropdown").forEach(el => {
                el.classList.remove("active-list--item");
            })
            document.querySelectorAll(".list--item__btn").forEach(el => {
                el.classList.remove("active--btn");
            });
        }
    })
})



const slider = document.querySelector('.swiper');
const slider1 = document.querySelector('.gallery__swiper');
const slider2 = document.querySelector('.events__swiper');
const slider3 = document.querySelector('.projects__swiper');

let mySwiper = new Swiper(slider, {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})

let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 3,
    spaceBetween: 50,
    slidesPerGroup: 3,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__swiper-button-prev',
        prevEl: '.gallery__swiper-button-next'
    }
})

let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.events__btn-next'

    }
})

let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 50,
    loop: true,
    navigation: {
        nextEl: '.projects__swiper-button--prev',
        prevEl: '.projects__swiper-button--next'
    }
})



// Кастомный селект
const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false
});

let ariaLabel = element.getAttribute('aria-label');
element.closest('.choices').setAttribute('aria-label', ariaLabel);


// Маска валидации
let inputs = document.querySelectorAll('input[type="tel"]');
let inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(inputs);

new JustValidate('.form', {
    rules: {
        fio: {
            required: true,
            minLength: 2,
            maxLength: 10
        },
        tel: {
            required: true,
            function: (name, value) => {
                const phone = selector.inputmask.unmaskedvalue()
                return Number(phone) && phone.length === 10
            }
        },
    },
});

// Яндекс карта
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758462909955064, 37.60118486185032],
        zoom: 17
    });
    var myPlacemark = new ymaps.Placemark([55.758462909955064, 37.60118486185032], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/card/map-label.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);
}


// Тултип
tippy('[data-tippy-content]');

// Accordion

$(function() {
    $(".accordion").accordion({
        heightStyle: "content",
        collapsible: true
    });
});


// Tabs

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.accordion__painter-link').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path

            document.querySelectorAll('.pointer-content').forEach(function(tabContent) {
                tabContent.classList.remove('pointer-content--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('pointer-content--active')
        })
    })
})

// Якоря

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}