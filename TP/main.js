//Hola profe, hasta acá pude llegar con mi entrega. Tengo problemas con el storage ya que me marca de entrada que tengo 6 elementos en el carrito. Los cuales son los que estan en el array de productos. Hay algo mal ordenado o me falta cambiar alguna parte especifica del código? Espero sus correcciones, Muchas gracias!!

//Tercera Pre-Entrega

//productos del e-commerce 
const stockProductos = [
  { id: 1, nombre: "Remera Aeropostale", precio: 8000, img: './img/remera-aeropostale.jpg' },
  { id: 2, nombre: "top-nike", precio: 8500, img:'./img/top-nike.jpg' },
  { id: 3, nombre: "buzo-levis", precio: 12000, img:'./img/buzo-levis.jpg' },
  { id: 4, nombre: "campera de jean", precio: 32000, img:'./img/campera-jean.jpg' },
  { id: 5, nombre: "botas alanya", precio: 18000, img:'./img/botas.jpeg' },
  { id: 6, nombre: "blazer", precio: 35000, img:'./img/blazer.jpg' },
];

const contenedorProductos=document.getElementById("contenedor-productos")
//boton eliminar
const vaciar = document.getElementById("eliminar")
//contador de carrito
const contadorCarrito = document.getElementById("contadorCarrito");

let carrito = []; 
//carrito en el storage
localStorage.setItem("carrito", JSON.stringify(stockProductos));

let carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];

if (!carritoStorage.length) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

//productos en el document
stockProductos.forEach((producto) => { 
  let div = document.createElement("div"); 
  div.innerHTML = ` 
    <img src=${producto.img} alt= "">
    <h3>Nombre: ${producto.nombre}</h3>
    <b class="precio-producto">$${producto.precio}</b>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar</button>
    <hr />
  `;
  contenedorProductos.append(div); 
  
  const boton =document.getElementById(`agregar${producto.id}`)
  boton.addEventListener

  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })
});

//agregar productos al carrito
const agregarAlCarrito = (productoId) => {
  const item = stockProductos.find((producto) => producto.id === productoId)
  carrito.push(item)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  console.log(carrito)
  actualizarCarrito();
}

//actualizar carrito

const actualizarCarrito = () =>{
  contadorCarrito.innerHTML = carrito.length
}

// Cargar carrito del localStorage
carrito = carritoStorage.slice();
actualizarCarrito();
console.log(carrito)

// //vaciar el carrito
vaciar.addEventListener("click", () => {
  localStorage.clear();
  console.clear();
  alert("carrito eliminado");
  location.reload(); 
  });



















































































