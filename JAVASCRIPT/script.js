const a = 5;
const b = 10;

if (a < b) {
    console.log("Ini benar");
}

let nilai = 80;
if (nilai >= 80 && nilai <= 80) {
    console.log("Nilai pas");
} else { 
    console.log("Hasilnya segini")
}

let nilai2 = 85;
if (nilai2 > 82 && nilai2 <= 84) {
    console.log("Nilai anda kurang kriteria");
} else if (nilai2 > 84 && nilai2 >= 85) {
    console.log("Nilai ini sudah pas untuk kriteria masuk sekolah")
}

const mycar = { make: "Honda", model: "Accord", year: 1998 };
delete mycar.make;
"make" in mycar; // returns false

const trees = ["redwood", "bay", "cedar", "oak", "maple"];
delete trees[3];
3 in trees; // returns false
