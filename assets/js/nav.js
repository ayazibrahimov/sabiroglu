
const box = document.querySelector('.heading__nav-search--box')
const box__open = document.querySelector('.box--opened')
const firsSearch = document.querySelector('.heading__nav-search--glass')
const cancel = document.querySelector('.heading__nav-cancel')
const body = document.querySelector('body')
const navContent = document.querySelector('.heading__nav-content')
const cancelMob = document.querySelector('.heading__nav-mob-cancel')
const overlayBox = document.querySelector('.overlayBox')
const itemDrop = document.querySelectorAll('.heading__nav-item--drop')
const boxContents = document.querySelectorAll('.drop__box-content')
const infoSection = document.querySelector('.info')
const navMenu = document.querySelector('.heading__nav')
const logoWhite = document.querySelector('.main__logo--white')
const logoBlack = document.querySelector('.main__logo--black')
const selectedCuntry = document.querySelector('.selected_country')
const linesWhite = document.querySelector('.three-line--white')
const linesBlack = document.querySelector('.three-line--black')



document.querySelector('.search__icon-box').addEventListener('click',function(e){

    e.preventDefault()

    document.querySelector('.search__icon-box').classList.add("unShown")
    document.querySelector('.cancel__icon-box').classList.remove("unShown")
    document.querySelector('.heading__nav-search--box').classList.remove("unShown")

    // box.classList.add('box--opened')
    // firsSearch.classList.add('box--closed')
    // cancel.classList.remove('box--closed')
})
document.querySelector('.cancel__icon-box').addEventListener('click',function(e){

    e.preventDefault()

    document.querySelector('.search__icon-box').classList.remove("unShown")
    document.querySelector('.cancel__icon-box').classList.add("unShown")
    document.querySelector('.heading__nav-search--box').classList.add("unShown")
    

    // box.classList.add('box--opened')
    // firsSearch.classList.add('box--closed')
    // cancel.classList.remove('box--closed')
})




document.querySelector('.three-line--white').addEventListener('click',function(){
    // body.classList.add('overflowY')
    navContent.classList.add('contentTransfor')
    // overlayBox.classList.add('overlay')
    body.classList.add('overflowY')
})
document.querySelector('.three-line--black').addEventListener('click',function(){
    // body.classList.add('overflowY')
    navContent.classList.add('contentTransfor')
    // overlayBox.classList.add('overlay')
    body.classList.add('overflowY')
})


cancelMob.addEventListener('click',function(){
    navContent.classList.remove('contentTransfor')
    // overlayBox.classList.remove('overlay')
    body.classList.remove('overflowY')
})



// itemDrop.addEventListener('click',function(){
//     if(window.innerWidth < 992){
//         boxContents.classList.toggle('dropboxShown')
//     }
//     else return;
// })



itemDrop.forEach(function(clicked,i){
  
    clicked.addEventListener('click',function(){
        if(window.innerWidth < 992){
                boxContents[i].classList.toggle('dropboxShown')
                
         }
          else return;
    })
})



/////// sticky navigation ////////



// const infoSec = infoSection.getBoundingClientRect()

// console.log(infoSec.top)




window.addEventListener('scroll',function(e){
    if(window.scrollY > 500){
        navMenu.classList.add('sticky')
        // headingNav1.classList.add('heading__nav--1')
        logoWhite.classList.add('unShown')
        logoBlack.classList.remove('unShown')
        firsSearch.style.color='black'
        selectedCuntry.style.color='black'
        // navMenu.classList.add('nav__border')
        linesWhite.classList.add("unShown")
        linesBlack.classList.remove("unShown")
    }
    
    else{
        navMenu.classList.remove('nav__border')
        // headingNav1.classList.remove('stickydata')
        // headingNav1.style.position = "relative"
        navMenu.classList.remove('sticky')
        logoWhite.classList.remove('unShown')
        logoBlack.classList.add('unShown')
        firsSearch.style.color='white'
        selectedCuntry.style.color='white'
        linesWhite.classList.remove("unShown")
        linesBlack.classList.add("unShown")
    }
})















