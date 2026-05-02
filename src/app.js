// import './style.css'

let navBtn=document.querySelector('#menu');
let menuBar=document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', ()=>{
    console.log("button clicked");
    const isExpanded = JSON.parse(navBtn.getAttribute('aria-expanded'));
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
    
})