let carrito = [];

function cargarUnItem() {

    const nuevoItem = new Item();
    nuevoItem.nombre = prompt('Ingrese el producto deseado');
    nuevoItem.marca = prompt('¿Qué marca es el producto?');
    nuevoItem.precio = Number(prompt('¿Cuál es el precio del producto?'));
    nuevoItem.cantidad = Number(prompt('¿Cuántas quieres?'));

    carrito.push(nuevoItem);
}

const cargarItems = () => {
    let seguir;
    do {
        cargarUnItem();
        seguir = prompt('Desea ingresar otro producto si/no');
    }while (seguir == 'si');
}

function mostrarCarrito() {

    let ticket = '';
    let totalTicket = 0

    carrito.forEach((item) => {
       ticket = ticket + `nombre: ${item.nombre} \n precio: ${item.precio} \n cantidad: ${item.cantidad} \n marca: ${item.marca} \n\n`;
    });

    totalTicket = carrito.reduce((total,item) => {
        return total + item.precio*item.cantidad;

    },0);

    alert(ticket + `Total: ${totalTicket}`);

}

cargarItems();
mostrarCarrito();