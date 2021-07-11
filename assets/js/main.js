/* CURSOR */
let mouseCursor = document.querySelector('.cursor');
let bodyElement = document.querySelector('body');

function showCursor(e) {
  if(mouseCursor.classList.contains('hiddenCursor')) {
    mouseCursor.classList.remove('hiddenCursor');
  }
  mouseCursor.classList.add('visibleCursor')
}

function hideCursor(e) {
  if(mouseCursor.classList.contains('visibleCursor')) {
    mouseCursor.classList.remove('visibleCursor');
  }
  mouseCursor.classList.add('hiddenCursor')
}

function cursorMove(e) {
  showCursor();
  var cursorWidth = mouseCursor.offsetWidth * 0.5;
  var cursorHeight = mouseCursor.offsetHeight * 0.5;

  var cursorX = e.clientX - cursorWidth;
  var cursorY = e.clientY - cursorHeight;
  var cursorPos = `translate(${cursorX}px, ${cursorY}px)`;
  mouseCursor.style.transform = cursorPos;
}
window.addEventListener('mousemove', cursorMove);
bodyElement.addEventListener('mouseleave', hideCursor);

function cursorHover(e) {mouseCursor.classList.add('hoverInter')};
function cursorUnhover(e) {mouseCursor.classList.remove('hoverInter');
}
document.querySelectorAll('a').forEach(item => {
  item.addEventListener('mouseover', cursorHover);
  item.addEventListener('mouseleave', cursorUnhover);
})
document.querySelectorAll('input').forEach(item => {
  item.addEventListener('mouseover', cursorHover);
  item.addEventListener('mouseleave', cursorUnhover);
})
document.querySelectorAll('button').forEach(item => {
  item.addEventListener('mouseover', cursorHover);
  item.addEventListener('mouseleave', cursorUnhover);
})
document.querySelectorAll('span').forEach(item => {
  item.addEventListener('mouseover', cursorHover);
  item.addEventListener('mouseleave', cursorUnhover);
})

/* MENU */
let wrapperMenu = document.querySelector('.menu');
let burgerBtn = document.getElementById('burger');
let menuBtn = document.querySelector('.hamburger');
let menuClose = document.querySelector('.crossrotate');
let menuAnchor = document.querySelectorAll('.anchor');

// affiche le menu et change le burger par la croix quand il est visible
function toggleMenu(e) {
  if(wrapperMenu.style.display == 'grid') {
    wrapperMenu.style.display="none";
    menuBtn.style.display="block";
    menuClose.style.display="none";
  } else {
    wrapperMenu.style.display="grid";
    menuBtn.style.display="none";
    menuClose.style.display="block";
  }
}
burgerBtn.addEventListener('click', toggleMenu);

// ferme le menu lorsque l'on clique sur un lien
menuAnchor.forEach(function (item) {
  item.addEventListener('click', function() {
  wrapperMenu.style.display ='none';
  menuBtn.style.display="block";
  menuClose.style.display="none";
})
});

/* HEADER */
// diminue l'opacité de du header selon le scroll
window.addEventListener('scroll', function() {
  if (window.scrollY > 550) {
      document.getElementById('heading').style.opacity = '.75';
  } else {
      document.getElementById('heading').style.opacity = '1';
  }
});

// scroll top avec effet smooth
document.getElementById('retourHome').addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({top:0, behavior:'smooth'});
})

// TYPING
const text = 'Rémi Lopez';
let i = 0;
let letter = '';

(function type(){
  letter = text.slice(0, i++);
  document.querySelector('.typing').textContent = letter;
  setTimeout(type, 400)
}());




// FORM VALIDATE 
$(document).ready(function() {
    $('#myForm').trigger("reset");
    $("form :input").attr("autocomplete", "off");
    $('#myForm').submit(function(e) {
      e.preventDefault();
      var name = $('#name').val();
      var email = $('#email').val();
  
      $(".error").remove();
  
      // Vérifie si un nom est bien renseigné
      if (name.length < 1) {
        $('#name').after('<span class="error">Veuillez rentrer votre Nom et prénom</span>');
        $('#name').addClass('error-icon');
      } else {         
        $('#name').removeClass('error-icon');    
      }
  
      // Verifie si l'adresse email est renseignée et valide
      if (email.length < 1) {
        $('#email').after('<span class="error">Veuillez rentrer votre adresse email</span>');
        $('#email').addClass('error-icon');
      } else {
        var regEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
        var validEmail = regEx.test(email);
        if (!validEmail) {
          $('#email').after('<span class="error">Cette adresse email semble invalide</span>');
          $('#email').addClass('error-icon');
        }else {   
          $('#email').removeClass('error-icon');      
        }
      }
    }); 
}); 


