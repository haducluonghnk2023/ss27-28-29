function kiemTraChanLe(so) {
    if (so % 2 === 0) {
        return `Số ${so} là số chẵn`;
    } else {
        return `Số ${so} là số lẻ`;
    }
}
const so1 = Math.floor(Math.random() * 100) + 1;
const so2 = Math.floor(Math.random() * 100) + 1;
const so3 = Math.floor(Math.random() * 100) + 1;

console.log(`Số thứ nhất: ${so1}`);
console.log(kiemTraChanLe(so1));

console.log(`\nSố thứ hai: ${so2}`);
console.log(kiemTraChanLe(so2));

console.log(`\nSố thứ ba: ${so3}`);
console.log(kiemTraChanLe(so3));
