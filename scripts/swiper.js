const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    },
    keyboard: true,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1310: {
            slidesPerView: 3,
            setWrapperSize: true
        }
    }
})