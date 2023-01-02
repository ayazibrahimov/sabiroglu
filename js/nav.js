
const box = document.querySelector('.heading__nav-search--box')
const box__open = document.querySelector('.box--opened')
const firsSearch = document.querySelector('.heading__nav-search--glass')
const cancel = document.querySelector('.heading__nav-cancel')

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





















///////