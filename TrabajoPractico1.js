const productos = [  
{ id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },  
{ id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },  
{ id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" }, 
{ id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },  
{ id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }  
];


console.log("Ejercicio 1:")
console.log("1." + productos[0].nombre);

console.log("2.")
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
}

console.log("3.")
productos.forEach((producto) => {console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);})

console.log("Ejercicio 2:\n4.")
const array = productos.map((producto) => producto.nombre);
console.log(array);

console.log("5.")
const arrayRopa = productos.filter((producto) => producto.categoria === "Ropa");
console.log(arrayRopa);

console.log("6.")
const arrayPrecio = productos.filter((producto) => producto.precio > 3000);
console.log(arrayPrecio);

console.log("7.")
console.log(productos.find((producto) => producto.nombre === "Gorra"));

console.log("8.")
console.log(productos.some((producto) => producto.precio > 10000));

console.log("9.")
console.log(productos.every((producto) => producto.precio > 1000));

console.log("10.")
console.log(array.includes("Campera"));

console.log("11.")
productos.sort((a, b) => a.precio - b.precio);
console.log(productos);

console.log("12.")
const arrayStrings = productos.map((producto) => 
    `El producto ${producto.nombre} cuesta $${producto.precio} y pertenece a la categoria ${producto.categoria}`
);

console.log(arrayStrings);

console.log("13.");
const productosAdicionales = [
    { id: 6, nombre: "Guantes", precio: 1000, categoria: "Accesorios" },
    { id: 7, nombre: "Botas", precio: 1800, categoria: "Calzado" }
];

const todosLosProductos = [...productos, ...productosAdicionales];

console.log(todosLosProductos);