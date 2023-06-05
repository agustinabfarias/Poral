//productos del e-commerce 
const stockProductos = [
  { id: 1, nombre: "camisa azul", precio: 8000 },
  { id: 2, nombre: "camisa verde", precio: 8500 },
  { id: 3, nombre: "jeans", precio: 10000 },
  { id: 4, nombre: "mom jeans", precio: 12000 },
  { id: 5, nombre: "zapatos", precio: 15000 },
  { id: 6, nombre: "gorra", precio: 5000 },
];

const contenedorProductos=document.getElementById("contenedor-productos")
//boton eliminar
const vaciar = document.getElementById("eliminar")


let carrito = []; 
//carrito en el storage
localStorage.setItem("carrito", JSON.stringify(stockProductos));

let carritoStorage = JSON.parse(localStorage.getItem("carrito")) || []


//productos en el document
stockProductos.forEach((producto) => { 
  let div = document.createElement("div"); 
  div.innerHTML = ` 
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
  
}

// Cargar carrito del localStorage
carrito = carritoStorage;


// //vaciar el carrito
vaciar.addEventListener("click", () => {
  localStorage.clear();
  
  alert("carrito eliminado");
  location.reload(); 
  });





















































































