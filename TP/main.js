/* -------------------Entrega 1------------------------------- */
    // let pregunta = confirm("¿Desea ingresar un producto?")
    // let cantidad = 0 
    // let producto = false
    // function orden(){
    //     console.log(`usted ordenó ${cantidad} ${producto} `)
    //     return;
    // }

    // while(pregunta == true){
    //     producto = prompt("ingrese su producto")
    //     cantidad = parseInt(prompt("ingrese la cantidad de su producto"))
    //     if (isNaN(cantidad)){
    //         alert("Ingrese un dato valido")
    //     }else{
    //         orden()
    //         cantidad ++ //me gustaría que se pueda sumar el total de todas los productos y se mostraran al final como "ordenaste 80 productos" que serían todos los que el usuario puso sumandose. Se hacer sumas, pero ¿cómo podria hacer para sumar todas las respuestas que hace el usuario?
    //     }
    //     pregunta = confirm("¿desea agregar otro producto?")
    // }

    // console.log("usted ordeno un total de "+ cantidad + " productos")

/* ---------------ENTREGA 2 -----------------------------------*/

const productos = [
    { nombre: "camisa azul", precio: 8000 },
    { nombre: "camisa verde", precio: 8500 },
    { nombre: "jeans", precio: 10000 },
    { nombre: "mom jeans", precio: 12000 },
    { nombre: "zapatos", precio: 15000 },
    { nombre: "gorra", precio: 5000 },
  ];
  
  let producto = prompt("Ingrese qué producto busca");
  const buscados = productos.filter((item) => item.nombre.includes(producto));
  
  buscados.forEach((item) => {
    let mensaje = `Producto: ${item.nombre}\nPrecio: ${item.precio}`;
    alert(mensaje);
  });
  
  let misProductos = confirm("¿Desea agregar productos al carrito?");
  
  class ProductoUsuario {
    constructor(nombre, precio) {
      this.nombre = nombre;
      this.precio = precio;
    }
  }
  
  const carrito = [];
  
  function orden() {
    switch (nuevoProducto) {
      case "gorra":
        let gorra = new ProductoUsuario("gorra", 5000);
        carrito.push(gorra);
        break;
      case "jeans":
        const jeans = new ProductoUsuario("jeans", 10000);
        carrito.push(jeans);
        break;
      case "mom jeans":
        const momJeans = new ProductoUsuario("mom jeans", 12000);
        carrito.push(momJeans);
        break;
      case "camisa azul":
        const camisaAzul = new ProductoUsuario("camisa azul", 8000);
        carrito.push(camisaAzul);
        break;
      case "camisa verde":
        const camisaVerde = new ProductoUsuario("camisa verde", 8500);
        carrito.push(camisaVerde);
        break;
      case "zapatos":
        const zapatos = new ProductoUsuario("zapatos", 15000);
        carrito.push(zapatos);
        break;
    }
  }
  
  let nuevoProducto = prompt("Ingrese el producto");
  orden();
  
  let otroProducto = confirm("¿Desea agregar otro producto?");
  while (otroProducto) {
    nuevoProducto = prompt("Ingrese el producto");
    orden();
    otroProducto = confirm("¿Desea agregar otro producto?");
  }
  
  carrito.forEach((item) => {
    console.log(item);
  });
    let total = carrito.reduce((acum, item) => acum + item.precio, 0);
    alert(`El total es ${total}`);
//   let total = carrito.reduce((acum, item) => acum + item.precio, 0);
//   console.log(`El total es ${total}`);
  
  let vaciar = confirm("¿Desea vaciar el carrito?");
  if (vaciar) {
    vaciarCarrito();
    alert("No hay nada en el carrito");
  } else {
    alert("Gracias por visitar Poral");
  }
  
  function vaciarCarrito() {
    carrito.length = 0;
  }







































