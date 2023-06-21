//ENTREGA FINAL


//productos del e-commerce 
// const stockProductos = [
//   { id: 1, nombre: "Remera Aeropostale", precio: 8000, img: './img/remera-aeropostale.jpg' },
//   { id: 2, nombre: "top-nike", precio: 8500, img:'./img/top-nike.jpg' },
//   { id: 3, nombre: "buzo-levis", precio: 12000, img:'./img/buzo-levis.jpg' },
//   { id: 4, nombre: "campera de jean", precio: 32000, img:'./img/campera-jean.jpg' },
//   { id: 5, nombre: "botas alanya", precio: 18000, img:'./img/botas.jpeg' },
//   { id: 6, nombre: "blazer", precio: 35000, img:'./img/blazer.jpg' },
// ];

const contenedorProductos=document.getElementById("contenedor-productos")
//boton eliminar
const vaciar = document.getElementById("eliminar")
//contador de carrito
const contadorCarrito = document.getElementById("contadorCarrito");

let carrito = []; 
let precioTotal = document.getElementById("precioTotal");
precioTotal.innerText = "0";


//carrito en el storage
localStorage.setItem("carrito", JSON.stringify(carrito));

let carritoStorage = JSON.parse(localStorage.getItem("carrito")) || [];

if (!carritoStorage.length) {
  localStorage.setItem("carrito", JSON.stringify([]));
}

let data; 

const stockProductos = async () => {
  try {
    const response = await fetch("./data.json");
    data = await response.json();

    data.forEach((post) => {
      let div = document.createElement("div"); 
      div.innerHTML = ` 
          <img src=${post.img} alt= "">
          <h3> ${post.nombre}</h3>
          <b class="precio-producto">$${post.precio}</b>
          <button id="agregar${post.id}" class="boton-agregar">Agregar</button>
          <hr />
          `;
          contenedorProductos.append(div); 

          const boton =document.getElementById(`agregar${post.id}`)
        
          boton.addEventListener('click', () => {
            agregarAlCarrito(post.id)
            Swal.fire({
              title: '¡Producto Agregado al carrito!',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              },
              confirmButtonColor: '#7e8a59', 
              customClass: {
                title: 'titulo-sweetAlert' 
              }
            })
          })
    });
  } catch (error) {
    console.log(error);
  }
};

stockProductos();



//agregar productos al carrito
const agregarAlCarrito = (productoId) => {
  const item = data.find((post) => post.id === productoId)
  carrito.push(item)
  localStorage.setItem('carrito', JSON.stringify(carrito))
  console.log(carrito)
  precioTotal.innerText = (parseInt(precioTotal.innerText) + item.precio).toString();
  actualizarCarrito();
}

//actualizar carrito

const actualizarCarrito = () =>{
  contadorCarrito.innerHTML = carrito.length;
}

// Cargar carrito del localStorage
carrito = carritoStorage.slice();
actualizarCarrito();
console.log(carrito)

//vaciar el carrito
vaciar.addEventListener("click", () => {
  Swal.fire({
    title: '¿Está seguro de vaciar el carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#7e8a59',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Vaciar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        {confirmButtonColor: '#7e8a59',
        title: 'Carrito vacío.'}
      )
    }
    setTimeout(()=>{
      localStorage.clear();
      console.clear();
      location.reload(); 
    }, 2500)
  })

  });



















































































