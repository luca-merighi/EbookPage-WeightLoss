function changeHeaderWhenScrolling() {
    const header = document.querySelector('.header')
    const firstSection = document.getElementById('ebook-presentation')

    if(window.scrollY >= 1) {
        header.classList.add('change-header')
        firstSection.classList.add('change-section')
    } else if (window.scrollY == 0) {
        header.classList.remove('change-header')
        firstSection.classList.remove('change-section')
    }
}

function showBackToTopButton() {
    const backToTopButton = document.querySelector('.back-to-top-button')

    if(window.scrollY >= 700) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]')
function activateLinkAtCurrentSection() {
    const checkpoint = window.scrollY + (window.innerHeight / 8) * 4

    for(const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')

        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight

        if(checkpointStart && checkpointEnd) {
            document
            .querySelector('.header .header-links li a[href*=' + sectionId + ']')
            .classList.add('active')    
        } else {
            document
            .querySelector('.header .header-links li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
    }
}

window.addEventListener('scroll', () => {
    showBackToTopButton()
    changeHeaderWhenScrolling()
    activateLinkAtCurrentSection()
})