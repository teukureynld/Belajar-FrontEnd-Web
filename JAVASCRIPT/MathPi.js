function mathPi () {
    return Math.PI;
}; console.log(Math.PI);
mathPi();

// Coba Menghitung Keliling lingkaran 
// Menghitung dengan Diameter Lingkaran, cara mencarinya 
// Garis tengah = diameter = d;

// Rumus : Keliling lingkaran = 3,14 * d
const CalculateRound = function (d) {
    return 2 * Math.PI * d;
}; console.log(CalculateRound(20));

function calculateCircumference(radius) {
    return Math.PI * (radius + radius);
  }
  
console.log(calculateCircumference(1)); // 6.283185307179586

// rumus lingkaran : pi * r *r

function Luaslingkaran (r,r) {
    return Math.PI * (r*r);
}; console.log(`Jadi luas lingkaran tersebut adalah`, Luaslingkaran(9,9));


