let pregunta = confirm("¿Desea ingresar un producto?")
let cantidad = 0 
let producto = false
function orden(){
    console.log(`usted ordenó ${cantidad} ${producto} `)
    return;
}

while(pregunta == true){
    producto = prompt("ingrese su producto")
    cantidad = parseInt(prompt("ingrese la cantidad de su producto"))
    if (isNaN(cantidad)){
        alert("Ingrese un dato valido")
    }else{
        orden()
        cantidad ++ //me gustaría que se pueda sumar el total de todas los productos pero no me estaría saliendo, ¿cómo puedo hacerzx
    }
    pregunta = confirm("¿desea agregar otro producto?")
}

console.log("usted ordeno un total de "+ cantidad + " productos")
