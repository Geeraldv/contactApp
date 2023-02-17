const divContainer = document.querySelector(".container");

const api = async () => {
  const url = "http://www.raydelto.org/agenda.php";
  const res = await fetch(url);
  const res2 = await res.json();

  res2.map((contact) => {
    let divContact = document.createElement("div");
    let img = document.createElement("img");
    img.src = `https://robohash.org/user${Math.floor(Math.random() * 100)}`;

    divContact.classList.add("card");
    let h1Nombre = document.createElement("h1");
    let h1Apellido = document.createElement("h1");
    let h1Telefono = document.createElement("h1");

    divContainer.appendChild(divContact);
    divContact.appendChild(img);
    divContact.appendChild(h1Nombre);
    divContact.appendChild(h1Apellido);
    divContact.appendChild(h1Telefono);

    h1Nombre.innerHTML = `${contact.nombre}`;
    h1Apellido.innerHTML = `${contact.apellido}`;
    h1Telefono.innerHTML = `${contact.telefono}`;
  });
};

api();
