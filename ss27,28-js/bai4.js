let array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let mangSoChan = [];
let mangSoLe = [];
for (let i = 0; i < array.length-1; i++) {
    if (array[i] % 2 === 0) {
        mangSoChan.push(array[i]);
    }else {
        mangSoLe.push(array[i]);
    }
}
console.log("mang so chan la :",mangSoChan);
console.log("mang so le la :",mangSoLe);
