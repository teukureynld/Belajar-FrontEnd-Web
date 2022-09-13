//! Ini adalah function expresi 
const showName  = function (name) {
    return `Halo, ${name}`;
}
console.log(showName('Teuku'));


// ! Kalo ini adalah contoh dari arrow function
const tampilNama =  (nama) => {
    return `Halo selamat malam, ${nama}`;
}; 
console.log(tampilNama('Reynaldi'));

console.log();

// ! Ini adalah function anonymous
// ! Contoh untuk looping
const anonymousFunction = function (i) {
    for(i=0; i <= 25; i++) {
        console.log(i);
    };
    return `Contoh untuk panggil parameter , ${i};`
}

anonymousFunction();

const anonymous = function() {
    console.log("Test");
}
anonymous();