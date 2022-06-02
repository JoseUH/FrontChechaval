let mesasArray = [];
let cartasArray = [];
let pedidosArray = [];
//LOS NODOS QUE VOY A NECESITAS
const mesasSection$$ = document.querySelector('.contenedorMesas');
const fondoProductos1$$ = document.querySelector('.cerveza');
const fondoProductos2$$ = document.querySelector('.cocktel');
const fondoProductos3$$ = document.querySelector('.sinAlcohol');
const chango$$ = document.querySelector('.chango');
const buttonPlus$$ = document.querySelectorAll('.buttonPlus');

//botones

document.querySelector('.botonI').setAttribute('onclick', "mostrar('cerveza')");
document.querySelector('.botonC').setAttribute('onclick', "mostrar('cocktel')");
document
  .querySelector('.botonD')
  .setAttribute('onclick', "mostrar('sinAlcohol')");

const getCartas = async () => {
  //pokemonJSONArray = [];

  const cartaURL = 'http://localhost:8069/cartas';
  //console.log(cartaURL);
  const cartaAPI = await fetch(cartaURL);
  const cartaJSON = await cartaAPI.json();
  //console.log(pokemonJSON);
  //console.log(cartaJSON.Cartas);
  //console.log(cartaJSON.Cartas);
  /* cartasArray = cartaJSON.map((Cartas) => ({
        id: Cartas._id,
        producto: Cartas.producto,
        descripcion: Cartas.descripcion,
        precio: Cartas.precio,
        tipo: Cartas.tipo,
        imagen: Cartas.imagen,
        createdAt: Cartas.createdAt,
        updatedAt: Cartas.updatedAt,
      }));
 */
  //console.log(cartaJSON);
  cartasArray = cartaJSON.Cartas;
  pintarProductos(cartasArray);
};

const getMesas = async () => {
  for (let index = 0; index < 3; index++) {
    switch (index) {
      case 0:
        const mesasSalonURL = 'http://localhost:8069/mesas/zona/salon';
        //console.log(mesasURL);
        const mesasSalonAPI = await fetch(mesasSalonURL);
        const mesasSalonJSON = await mesasSalonAPI.json();
        mesasSalonArray = mesasSalonJSON.Mesa;
        //console.log(mesasSalonArray);
        pintarMesas(mesasSalonArray, 'salon');
        break;
      case 1:
        const mesasTerrazaCuURL =
          'http://localhost:8069/mesas/zona/terraza cubierta';
        //console.log(mesasURL);
        const mesasTerrazaCuAPI = await fetch(mesasTerrazaCuURL);
        const mesasTerrazaCuJSON = await mesasTerrazaCuAPI.json();
        mesasTerrazaCuArray = mesasTerrazaCuJSON.Mesa;
        pintarMesas(mesasTerrazaCuArray, 'terraza cubierta');
        break;
      case 2:
        const mesasTerrazaExURL =
          'http://localhost:8069/mesas/zona/terraza exterior';
        //console.log(mesasURL);
        const mesasTerrazaExAPI = await fetch(mesasTerrazaExURL);
        const mesasTerrazaExJSON = await mesasTerrazaExAPI.json();
        mesasTerrazaExArray = mesasTerrazaExJSON.Mesa;
        pintarMesas(mesasTerrazaExArray, 'terraza exterior');
        break;
    }
  }
};

const getPedidos = async () => {
  const pedidosURL = 'http://localhost:8069/pedidos';
  //console.log(mesasURL);
  const pedidosAPI = await fetch(pedidosURL);
  const pedidosJSON = await pedidosAPI.json();
  pedidosArray = pedidosJSON.pedidos;
};

getMesas();
getCartas();
getPedidos();
// addItem(producto._id, producto.producto, producto.precio);

const pintarProductos = async (cartasArray) => {
  let divFondo1 = '';
  let divFondo2 = '';
  let divFondo3 = '';
  for (const producto of cartasArray) {
    //console.log(producto);
    //alert(producto.tipo);
    switch (producto.tipo) {
      case 'rubia':
        divFondo1 += `
                <div class="fondo_contenedor-producto">
                <label>${producto.producto}</label>
                <img class="producto" src="${producto.imagen}" alt="${producto.producto}">
                <p class="texto">${producto.descripcion}<p>
                <p><strong>${producto.precio} €</strong><p>
                <button class="buttonPlus" onclick = "addItem('${producto._id}', '${producto.producto}', '${producto.precio}')">+</button>
                </div>
            `;

        break;
      case 'Coctel':
        divFondo2 += `
                <div class="fondo_contenedor-producto">
                <label>${producto.producto}</label>
                <img class="producto" src="${producto.imagen}" alt="${producto.producto}">
                <p class="texto">${producto.descripcion}<p>
                <p><strong>${producto.precio} €</strong><p>
                <button class="buttonPlus">+</button>
                </div>
            `;
        break;
      case 'sin alcohol':
        divFondo3 += `
                    <div class="fondo_contenedor-producto">
                    <label>${producto.producto}</label>
                    <img class="producto"src="${producto.imagen}" alt="${producto.producto}">
                    <p class="texto">${producto.descripcion}<p>
                    <p><strong>${producto.precio} €</strong><p>
                    <button class="buttonPlus">+</button>
                    </div>
                `;

        break;
    }
  }

  //alert(divFondo1);

  fondoProductos1$$.innerHTML = divFondo1;
  fondoProductos2$$.innerHTML = divFondo2;
  fondoProductos3$$.innerHTML = divFondo3;
};

const pintarMesas = async (mesasArray, zona) => {
  console.log(mesasArray);
  let divPrincipal$$ = document.createElement('div');
  let pPrincipal$$ = document.createElement('h1');
  pPrincipal$$.innerText = zona;
  divPrincipal$$.appendChild(pPrincipal$$);
  mesasSection$$.appendChild(divPrincipal$$);
  for (const mesas of mesasArray) {
    let div$$ = document.createElement('div');
    let button1$$ = document.createElement('button');
    let p1$$ = document.createElement('p');
    let p2$$ = document.createElement('p');

    p1$$.innerText = mesas.name;
    p2$$.innerText = mesas.comensales;
    button1$$.setAttribute('onclick', "asignarMesa('" + mesas._id + "')");
    button1$$.innerText = '+';
    div$$.appendChild(p1$$);
    div$$.appendChild(p2$$);
    div$$.appendChild(button1$$);

    mesasSection$$.appendChild(div$$);
    div$$.className = 'mesasUnicas';
    divPrincipal$$.appendChild(div$$);
  }
}

const asignarMesa = (idMesa) => {
  document.getElementById('mesaSeleccionada').value = idMesa;
  document.querySelector('.mesasSection').style.display = 'none';
  document.querySelector('.productosSection').style.display = 'block';
  document.querySelector('.carritoSection').style.display = 'flex';
}



const mostrar = (tipo) => {
  switch (tipo) {
    case 'cerveza':
      fondoProductos1$$.style.display = 'flex';
      fondoProductos2$$.style.display = 'none';
      fondoProductos3$$.style.display = 'none';
      break;
    case 'cocktel':
      fondoProductos1$$.style.display = 'none';
      fondoProductos2$$.style.display = 'flex';
      fondoProductos3$$.style.display = 'none';
      break;
    case 'sinAlcohol':
      fondoProductos1$$.style.display = 'none';
      fondoProductos2$$.style.display = 'none';
      fondoProductos3$$.style.display = 'flex';
      break;
  }
};

const addItem = (id, producto, precio) => {
  const divAddItem$$ = document.createElement('div');
  const pID$$ = document.createElement('p');
  const pProducto$$ = document.createElement('p');
  const pPrecio$$ = document.createElement('p');
  const removeItem$$ = document.createElement('button');

  pID$$.innerText = id;
  pProducto$$.innerText = producto;
  pPrecio$$.innerText = precio;
  removeItem$$.innerText = "Quitar";

  divAddItem$$.appendChild(pID$$);
  divAddItem$$.appendChild(pProducto$$);
  divAddItem$$.appendChild(pPrecio$$);
  divAddItem$$.appendChild(removeItem$$);
  chango$$.appendChild(divAddItem$$);

  const borrar = (event) => {
    event.remove();
  };
  removeItem$$.addEventListener('click', () => borrar(divAddItem$$));
};

// const addToCart = () => {
//     const li$$ = document.createElement("li")
//     const button1$$ = document.createElement("button")
//     const p1$$ = document.createElement("p")

//     p1$$.innerText = input$$.value;

//     li$$.appendChild(p1$$)
//     li$$.appendChild(button1$$)
//     ul$$.appendChild(li$$)

//     const borrar = (event) => {
//         event.remove()
//     }
//     button1$$.addEventListener('click', ()=>borrar (li$$));

// }
