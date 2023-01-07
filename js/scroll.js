document.querySelector('.footer__upper').addEventListener('click',function(e){
    
    e.preventDefault()

    window.scrollTo({ top: 10, behavior: 'smooth' });
})
