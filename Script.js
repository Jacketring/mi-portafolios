const nombre = "Jose Hurtado de Mendoza Suarez";
let i = 0;

function escribirNombre() {
  if (i < nombre.length) {
    document.getElementById("nombre").textContent += nombre.charAt(i);
    i++;
    setTimeout(escribirNombre, 150);
  } else {
    document.getElementById("nombre").classList.add("neon-fx");
    document.querySelector(".foto-perfil").classList.add("borde-neon");
  }
}

window.onload = () => {
  escribirNombre();
  crearEfectoMatrix();
};

function crearEfectoMatrix() {
  const canvas = document.createElement('canvas');
  canvas.id = 'matrix';
  document.body.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const letters = "アァイィウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ0123456789".split("");
  const fontSize = 14;
  const columns = canvas.width / fontSize;
  const drops = new Array(Math.floor(columns)).fill(1);

  function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#00ff88";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      drops[i]++;
    }
  }

  setInterval(draw, 33);

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
}

function mostrarPopup(id) {
  document.getElementById(id).classList.remove('oculto');
}
function cerrarPopup(id) {
  document.getElementById(id).classList.add('oculto');
}

function mostrarTab(tab) {
  document.getElementById('estudios').classList.add('oculto');
  document.getElementById('experiencia').classList.add('oculto');
  document.getElementById(tab).classList.remove('oculto');

  document.getElementById('btn-estudios').classList.remove('tab-activa');
  document.getElementById('btn-experiencia').classList.remove('tab-activa');
  document.getElementById('btn-' + tab).classList.add('tab-activa');
}
function observarAnimacionesBidireccional() {
    const animados = document.querySelectorAll('.aparece-magico');
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
        } else {
          entrada.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.3 });
  
    animados.forEach(elem => observer.observe(elem));
  }
  
  window.addEventListener('DOMContentLoaded', observarAnimacionesBidireccional);
  