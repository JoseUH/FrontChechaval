let mesasArray = [];
let cartasArray = [];
let pedidosArray = [];
//LOS NODOS QUE VOY A NECESITAS
const fondoProductos1$$ = document.querySelector(".cerveza");
const fondoProductos2$$ = document.querySelector(".cocktel");
const fondoProductos3$$ = document.querySelector(".sinAlcohol");
const chango$$ = document.querySelector(".chango");
const buttonPlus$$ = document.querySelectorAll(".buttonPlus")


//botones


document.querySelector(".botonI").setAttribute("onclick", "mostrar('cerveza')");;
document.querySelector(".botonC").setAttribute("onclick", "mostrar('cocktel')");;
document.querySelector(".botonD").setAttribute("onclick", "mostrar('sinAlcohol')");;


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
// addItem(producto._id, producto.producto, producto.precio);


const pintarProductos = async (cartasArray) => {
    let divFondo1 = "";
    let divFondo2 = "";
    let divFondo3 = "";
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
                <p><strong>${producto.precio} €</strong><p>
                <button class="buttonPlus" onclick = "addItem('${producto._id}', '${producto.producto}', '${producto.precio}')">+</button>
                </div>
            `; 

                break;
            case "Coctel":
                divFondo2 += `
                <div class="fondo_contenedor-producto">
                <label>${producto.producto}</label>
                <img src="${producto.imagen}" alt="${producto.producto}">
                <p>${producto.descripcion}<p>
                <p><strong>${producto.precio} €</strong><p>
                <button class="buttonPlus">+</button>
                </div>
            `;
                break;
            case "sin alcohol":
                divFondo3 += `
                    <div class="fondo_contenedor-producto">
                    <label>${producto.producto}</label>
                    <img src="${producto.imagen}" alt="${producto.producto}">
                    <p>${producto.descripcion}<p>
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

    
}


const mostrar = (tipo) => {
    switch (tipo){
        case "cerveza":
            fondoProductos1$$.style.display = 'flex';
            fondoProductos2$$.style.display = 'none';
            fondoProductos3$$.style.display = 'none';
            break;
        case "cocktel":
            fondoProductos1$$.style.display = 'none';
            fondoProductos2$$.style.display = 'flex';
            fondoProductos3$$.style.display = 'none';
            break;
        case "sinAlcohol":
            fondoProductos1$$.style.display = 'none';
            fondoProductos2$$.style.display = 'none';
            fondoProductos3$$.style.display = 'flex';
            break;
    }
}




const addItem = (id, producto, precio) => {
    const divAddItem$$ = document.createElement("div");
    const pID$$ = document.createElement("p")
    const pProducto$$ = document.createElement("p")
    const pPrecio$$ = document.createElement("p")

    pID$$.innerText = id;
    pProducto$$.innerText = producto;
    pPrecio$$.innerText = precio;

    
    divAddItem$$.appendChild(pID$$);
    divAddItem$$.appendChild(pProducto$$);
    divAddItem$$.appendChild(pPrecio$$);
    chango$$.appendChild(divAddItem$$)

}





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

