const DataEven = [0,1,2,3,4,5,6,,7,8,9,10];

for(let index in DataEven) {
    if(index % 2 == 0) {
        console.log(DataEven[index]);
    }
}

const DataOdd = [0,1,2,3,4,5,6,7,8,9,10];

for(let index2 of DataOdd) {
    if(index2 % 2 == 1) {
        console.log(DataOdd[index2]);
    }
}