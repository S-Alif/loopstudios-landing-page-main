// nav toggle on mobile
document.querySelector('.control-btn').addEventListener('click', () => {
  let openIcon = document.querySelector('.bar')
  let closeIcon = document.querySelector('.cross')
  let navitem = document.querySelector('.nav-item-wrapper')

  if(openIcon.classList.contains('open')){
    openIcon.classList.remove("open")
    closeIcon.classList.add('open')
    navitem.classList.add('opened')
  }
  else{
    openIcon.classList.add("open")
    closeIcon.classList.remove('open')
    navitem.classList.remove('opened')
  }
})