let for_index = [0,1,2,3,4,5,6,7,8,9,10];

let for_data = ["volvo", "mit" , "max"];

// ini sama tapi mewakili index
for(let index in for_index) {
    console.log(for_index[index]);
}

// ini untuk jika mau langsung cetak array semuanya
for(let Data of for_data) {
    console.log(Data);
}