// Constante con el mapa fijo (25x25)


// 0 = vacío
// 1 = muro sólido
// 2 = camino
// 3 = ladrillo destructible
// 4 = agua
// 5 = base/objetivo

const MAP_DATA = [
  [6,10,10,10,10,10,10,10,10,7], // fila superior: muro
  [11,2,2,2,2,2,2,2,2,11], // camino abierto
  [11,2,2,2,2,2,2,2,2,11], // ladrillos y huecos
  [11,2,2,2,2,2,2,2,2,11], // agua en el centro
  [11,3,3,3,3,3,3,3,3,11], // base protegida
  [11,3,3,3,3,3,3,3,3,11], // simétrico al de arriba
  [11,2,3,3,0,0,3,3,2,11], // ladrillos otra vez
  [11,2,2,2,2,2,2,2,2,11], // camino abierto
  [11,2,2,2,2,2,2,2,2,11], // camino abierto
  [9,10,10,10,10,10,10,10,10,8], // fila inferior: muro
];



/*

const MAP_DATA = [];
for (let i = 0; i < 25; i++) {
  const row = [];
  for (let j = 0; j < 25; j++) {
    row.push(Math.floor(Math.random() * 198)); // 0 a 197
  }
  MAP_DATA.push(row);
}
*/