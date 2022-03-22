//Выпадающий список
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".header__dropdown-btn").forEach(item => {
        item.addEventListener("click", function() {
            let btn = this;
            let dropdown = this.parentElement.querySelector(".container-dropdown");

            document.querySelectorAll(".header__dropdown-btn").forEach(el => {
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
        });
    })

    document.addEventListener("click", function(e) {
        let target = e.target;
        if (!target.closest(".header__dropdown")) {
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

// Слайдер в Hero
let mySwiper = new Swiper(slider, {
    loop: true,
    autoplay: {
        delay: 4000,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
})

// Cлайдер в Gallery
let mySwiper1 = new Swiper(slider1, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.gallery__swiper-button-prev',
        prevEl: '.gallery__swiper-button-next'
    },
    breakpoints: {
        531: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1350: {
            slidesPerView: 3,
            spaceBetween: 48,
            slidesPerGroup: 3,
        }
    },
})

// Слайдер в Events
let mySwiper2 = new Swiper(slider2, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
        el: '.events__swiper-pagination',
        clickable: 'true',
    },
    breakpoints: {
        500: {
            slidesPerView: 2,
            spaceBetween: 31,
            slidesPerGroup: 2,
        },
        880: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 2,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 27,
            slidesPerGroup: 3,
        },

        1030: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
            navigation: {
                nextEl: '.events__btn-next',
                prevEl: '.events__btn-prev'
            },
        },
    },
})

// Слайдер в Projects
let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: '.button-prev',
        prevEl: '.button-next'
    },
    breakpoints: {
        531: {
            slidesPerView: 2,
            slidesPerGroup: 3,
            spaceBetween: 34,
        },
        769: {
            slidesPerView: 2,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
        1350: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    },
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

new JustValidate('.feedback__form', {
    rules: {
        fio: {
            required: true,
            minLength: 2,
            maxLength: 30,
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

let inputText = document.querySelector('.form__contacts');

inputText.addEventListener('keyup', function() {
    this.style.backgroundColor = 'white';
});


// Яндекс карта
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758462909955064, 37.60118486185032],
        zoom: 13,
        controls: ['geolocationControl', 'zoomControl']
    }, {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "350px", right: "10px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "270px", right: "10px" }
    });

    myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

    var myPlacemark = new ymaps.Placemark([55.758462909955064, 37.60118486185032], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../img/card/map-label.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);

};


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


// Модальное

const btns = document.querySelectorAll('.swiper-slide__btn');
const modalOverlay = document.querySelector('.modal__overlay');
const modals = document.querySelectorAll('.modal__content');
const modalBtn = document.querySelectorAll('.modal__btn');
const body = document.body;

btns.forEach((el) => {
    el.addEventListener('click', (e) => {
        let path = e.currentTarget.getAttribute('data-path');

        modals.forEach((el) => {
            el.classList.remove('modal__content--visible');
        });

        document.querySelector(`[data-target="${path}"]`).classList.add('modal__content--visible');
        modalOverlay.classList.add('modal__overlay--visible');

    });
});

modalBtn.forEach(function(item) {

    item.addEventListener('click', function(e) {
        let parentModal = this.closest('.modal__overlay');

        parentModal.classList.remove('modal__overlay--visible');
        modalOverlay.classList.remove('modal__overlay--visible');
    });

});


// Отключаем скролл у сайта

let disableScroll = function() {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
}

let enableScroll = function() {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({ top: pagePosition, left: 0 });
    document.body.removeAttribute('data-position');
}

btns.forEach(function(el) {
    el.addEventListener('click', () => {
        disableScroll();
    });
});

modalBtn.forEach(function(el) {
    el.addEventListener('click', () => {
        enableScroll();
    });
});


// Бургер


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.burger').addEventListener('click', function() {
        document.querySelector('.nav').classList.add('is-open')
    })
    document.querySelector('.nav__burger-close').addEventListener('click', function() {
        document.querySelector('.nav').classList.remove('is-open')
    })
})


// Поиск

function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function(evt) {
        if (this._isOpened) {
            this.classList.remove(params.activeClass);
            this.classList.remove(params.hiddenClass);
            this._isOpened = false;
        } else {
            this._isOpened = true;
        }
    });

    search.addEventListener('click', function(evt) {
        evt._isSearch = true;
    });

    openBtn.addEventListener("click", function(evt) {
        this.disabled = true;

        if (!search.classList.contains(params.activeClass) &&
            !search.classList.contains(params.hiddenClass)
        ) {
            search.classList.add(params.activeClass);
        }
    });

    closeBtn.addEventListener('click', function() {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function(evt) {
        if (!evt._isSearch && search._isOpened) {
            openBtn.disabled = false;
            search.classList.add(params.hiddenClass);
        }
    });
}

setSearch({
    openBtnClass: "header__search-btn",
    closeBtnClass: "form__search-close",
    searchClass: "js-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
});