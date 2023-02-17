const form = document.getElementById("contact-form");

const buttom = document.getElementById("enviar");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const nombre = form.elements.nombre.value;
  const apellido = form.elements.apellido.value;
  const telefono = form.elements.telefono.value;

  fetch("http://www.raydelto.org/agenda.php", {
    method: "POST",
    body: JSON.stringify({ nombre, apellido, telefono }),
    headers: {
      accept: "application/json",
    },
  });

  console.log({ nombre, apellido, telefono });
});
