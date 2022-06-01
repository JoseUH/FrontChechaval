let mesasArray = [];
let cartasArray = [];
let pedidosArray = [];
//LOS NODOS QUE VOY A NECESITAS




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
      //filtradoRubia(cartasArray);
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

const filtradoRubia = async (cartasArray) => {
    const productoRubia = [];
    /* for (const producto of cartasArray) {
        if(producto.tipo === "rubia"){
            productoRubia.push(producto);
        }    
    } */
    console.log(cartasArray[[PromiseResult]]);
    
}


