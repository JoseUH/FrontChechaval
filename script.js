let mesasArray = [];
let cartasArray = [];
let pedidosArray = [];
//LOS NODOS QUE VOY A NECESITAS
const fondoProductos1$$ = document.querySelector(".fondo1");
const fondoProductos2$$ = document.querySelector(".fondo2");
const fondoProductos3$$ = document.querySelector(".fondo3");



const getCartas = async () => {
    //pokemonJSONArray = [];
    
    const cartaURL = "http://localhost:8069/cartas";
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
    const mesasURL = "http://localhost:8069/mesas";
    //console.log(mesasURL);
    const mesasAPI = await fetch(mesasURL);
    const mesasJSON = await mesasAPI.json();
    mesasArray = mesasJSON.Mesas;
    
}

const getPedidos = async () => {
    const pedidosURL = "http://localhost:8069/pedidos";
    //console.log(mesasURL);
    const pedidosAPI = await fetch(pedidosURL);
    const pedidosJSON = await pedidosAPI.json();
    pedidosArray = pedidosJSON.pedidos;
}


    
getMesas();
getCartas();
getPedidos();

const pintarProductos = async (cartasArray) => {
    let divFondo1 = "";
    let divFondo2 = "";
    let divFondo3 = "";
    fondoProductos1$$.setAttribute("display", "flex");
    fondoProductos2$$.setAttribute("display", "none");
    fondoProductos3$$.setAttribute("display", "none");
    for (const producto of cartasArray) {
        //console.log(producto);
        //alert(producto.tipo);
        switch (producto.tipo) {
            
            case "rubia":
                divFondo1 += `
                <div class="fondo_contenedor-producto">
                <label>${producto.producto}</label>
                <img src="${producto.imagen}" alt="${producto.producto}">
                <p>${producto.descripcion}<p>
                <button>+</button>
                </div>
            `; 

                break;
            case "Coctel":
                divFondo2 += `
                <div class="fondo_contenedor-producto">
                <label>${producto.producto}</label>
                <img src="${producto.imagen}" alt="${producto.producto}">
                <p>${producto.descripcion}<p>
                <button>+</button>
                </div>
            `;
                break;
            case "sin alcohol":
                divFondo3 += `
                    <div class="fondo_contenedor-producto">
                    <label>${producto.producto}</label>
                    <img src="${producto.imagen}" alt="${producto.producto}">
                    <p>${producto.descripcion}<p>
                    <button>+</button>
                    </div>
                `;
                break;                
        }
    }

    //alert(divFondo1);

    fondoProductos1$$.innerHTML = divFondo1;
    fondoProductos2$$.innerHTML = divFondo2;
    fondoProductos3$$.innerHTML = divFondo3;
    
}


