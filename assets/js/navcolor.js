const links = document.querySelectorAll('.heading__nav-link')
const activePage = window.location.pathname

const datas1 = ['/sabiroglu/madditexniki.php','/sabiroglu/mission.php','/sabiroglu/timeline.php']
const datas2 = ['/sabiroglu/setempolicy.php','/sabiroglu/qualitypolicy.php','/sabiroglu/durabilitypolicy.php','/sabiroglu/informationpolicy.php']


console.log(activePage)

datas1.forEach(data=>{
  if(data === activePage){
    links[1].classList.remove('heading__nav-link');
    links[1].classList.remove('heading__nav-link--new');
    links[1].classList.add('nav-text');
  }
})


datas2.forEach(data=>{
    if(data === activePage){
        links[3].classList.remove('heading__nav-link');
        links[3].classList.remove('heading__nav-link--new');
        links[3].classList.add('nav-text');
    }
})



// const firstLink = document.querySelector('.newLink__1')

document.querySelectorAll('.heading__nav-link').forEach(link => {
    
    // datas1.forEach(data=>{
    //     if(data === activePage){
    //         console.log(true)
    //     }else console.log(false)
    // })

      if(activePage === '/sabiroglu/') {
        firstLinked.classList.add('nav-text')
      }
    else if(link.href.includes(`${activePage}`)){
        link.classList.remove('heading__nav-link')
        link.classList.remove('heading__nav-link--new');
        link.classList.add('nav-text');
    }
     
}); 



// nav-text







