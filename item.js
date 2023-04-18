class Item
{
  nombre;
  marca;
  precio;
  cantidad;

//     constructor(nombre, precio, cantidad) 
//   {
//     this.nombre = nombre;
//     this.precio = precio;
//     this.marca = marca;
//     this.cantidad = cantidad;
//   }

  subtotal = () => {
    return this.precio*this.cantidad;
  }
}
