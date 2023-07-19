const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



const pizzasConIdImpar = pizzas.filter((pizza) => pizza.id % 2 === 1);
console.log("a) Pizzas con id impar:", pizzasConIdImpar);


const hayPizzaMenorA600 = pizzas.some((pizza) => pizza.precio < 600);
console.log("b) ¿Hay alguna pizza que valga menos de $600?", hayPizzaMenorA600);


const nombresYPrecios = pizzas.map((pizza) => ({
  nombre: pizza.nombre,
  precio: pizza.precio,
}));
console.log("c) Nombres y precios de las pizzas:", nombresYPrecios);


pizzas.forEach((pizza) => {
  console.log(`d) Ingredientes de ${pizza.nombre}:`, pizza.ingredientes);
});

