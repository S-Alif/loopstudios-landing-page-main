// get the elements
let openIcon = document.querySelector('.bar')
let closeIcon = document.querySelector('.cross')
let navitem = document.querySelector('.nav-item-wrapper')

// nav toggle on mobile
document.querySelector('.control-btn').addEventListener('click', () => {
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

// close nav on link click on mobile
document.querySelectorAll('.navbar .nav-item-wrapper .nav-links').forEach(e => {
  e.addEventListener('click', () => {
    openIcon.classList.add("open")
    closeIcon.classList.remove('open')
    navitem.classList.remove('opened')
  })
})