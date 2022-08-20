let for_index = ["mobil" , "sepeda", "pisang" , "motor" , "kecap"];

let for_data = ["volvo", "mit" , "max"];

// ini sama tapi mewakili index
for(let index in for_index) {
    console.log(for_index[index]);
}
console.log("\n");
// ini untuk jika mau langsung cetak array semuanya
for(let Data of for_data) {
    console.log(Data);
}