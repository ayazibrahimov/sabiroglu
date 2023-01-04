
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

document.querySelector('.heading__nav-search--glass').addEventListener('click',function(e){

    e.preventDefault()

    box.classList.add('box--opened')
    firsSearch.classList.add('box--closed')
    cancel.classList.remove('box--closed')
})

cancel.addEventListener('click',function(e){
    e.preventDefault()
    e.target.classList.add('box--closed')
    box.classList.remove('box--opened')
    firsSearch.classList.remove('box--closed')

})



document.querySelector('.three-line').addEventListener('click',function(){
    // body.classList.add('overflowY')
    navContent.classList.add('contentTransfor')
    overlayBox.classList.add('overlay')
    body.classList.add('overflowY')
})


cancelMob.addEventListener('click',function(){
    navContent.classList.remove('contentTransfor')
    overlayBox.classList.remove('overlay')
    body.classList.remove('overflowY')
})



itemDrop.forEach((element,index )=> {
    element.addEventListener('click',function(e){
        e.preventDefault()

       
        boxContents[0].classList.add('boxContents')
        

    })    
});


// var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;









///////