// 1-A Sticky NAVBAR
window.addEventListener('scroll', function(){
  let header = document.querySelector('#header');

  header.classList.toggle('sticky', window.scrollY > 0)
})


// let showMenu = function(navToggle, navMenu){
//   let toggle = document.querySelector('#'+ navToggle);
//   let menu = document.querySelector('#'+ navMenu);
//
//   if (toggle && menu){
//     toggle.addEventListener('click', function(){
//       menu.classList.toggle('show-menu');
//     })
//   }
// }
//
// showMenu('nav-toggle', 'nav-menu');
