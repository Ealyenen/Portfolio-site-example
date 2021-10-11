const humburger = document.querySelector('.humburger'),
      navMenu = document.querySelector('.menu-block'),
      overlay = document.querySelector('.menu-overlay'),
      cross =document.querySelector('.cross');

humburger.addEventListener('click', () => {
    navMenu.classList.add('menu-block_active')
    overlay.classList.add('menu-overlay_active')
});

cross.addEventListener('click', () => {
    navMenu.classList.remove('menu-block_active')
    overlay.classList.remove('menu-overlay_active')
});


const procent = document.querySelectorAll('.procent'),
      procentLine = document.querySelectorAll('.procent-line');

procent.forEach( (item, i) => {
    procentLine[i].style.width = item.innerHTML;
});