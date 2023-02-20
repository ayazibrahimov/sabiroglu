const headingNav1 = document.querySelector('.heading__nav--1')
// const linesWhite = document.querySelector('.three-line--white')
// const linesBlack = document.querySelector('.three-line--black')



window.addEventListener('scroll',function(e){
    if(window.scrollY > 300){
        // navMenu.classList.add('sticky')
        headingNav1.classList.add('stickydata')

        // logoWhite.classList.add('unShown')
        // logoBlack.classList.remove('unShown')
        // firsSearch.style.color='black'
        // selectedCuntry.style.color='black'
        // navMenu.classList.add('nav__border')
    }
    
    else{
        headingNav1.classList.remove('stickydata')
    }
})



















//////