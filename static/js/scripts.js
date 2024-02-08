// Función de scroll
const barraSuperior = document.querySelector('.barra-superior');
const opcionesMenu = document.querySelectorAll('.linea-hover');
const logo = document.querySelectorAll('.logo');

let funcionScroll = true;

window.addEventListener('scroll', () => {
    if (funcionScroll) {
        let value = window.scrollY;
        if (value > 50) {
            barraSuperior.style.backgroundColor = '#4f3333';
            opcionesMenu.forEach(opcion => opcion.classList.add('hover-activo'));
            logo.forEach(option => option.classList.add('barra-activa'));
            logoImg.src = 'static/img/logo.png';
        } else {
            barraSuperior.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            opcionesMenu.forEach(opcion => opcion.classList.remove('hover-activo'));
            logo.forEach(opcion => opcion.classList.remove('barra-activa'));
            logoImg.src = 'static/img/logo.png';
        }
    }
});

// Función de buscador
let buscador = document.getElementById("search");
buscador.addEventListener("keyup", function() {
    let searchTerm = new RegExp(buscador.value, 'gi');
    
    Array.from(document.getElementsByTagName("p")).forEach(elemen => {
        const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
        
        if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
            const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
            elemen.innerHTML = htmlNuevo;
        } else {
            elemen.innerHTML = htmlOriginal;
        }
    })
    Array.from(document.getElementsByTagName("h1")).forEach(elemen => {
      const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
      
      if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
          const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
          elemen.innerHTML = htmlNuevo;
      } else {
          elemen.innerHTML = htmlOriginal;
      }
    })
    Array.from(document.getElementsByTagName("dt")).forEach(elemen => {
      const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
      
      if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
          const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
          elemen.innerHTML = htmlNuevo;
      } else {
          elemen.innerHTML = htmlOriginal;
      }
    })
    Array.from(document.getElementsByTagName("dd")).forEach(elemen => {
      const htmlOriginal = elemen.getAttribute("data-original-text") || elemen.innerText;
      
      if (searchTerm.test(htmlOriginal) && buscador.value !== '') {
          const htmlNuevo = htmlOriginal.replace(searchTerm, '<span style="background-color: yellow;">$&</span>');
          elemen.innerHTML = htmlNuevo;
      } else {
          elemen.innerHTML = htmlOriginal;
      }
    })
});

