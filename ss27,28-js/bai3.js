let mangSoNguyen = [-1,-3,3,4,1,2];
let arraySoChan = [];
for (let i = 0; i < mangSoNguyen.length; i++) {
    if (mangSoNguyen[i] % 2 === 0) {
        arraySoChan.push(mangSoNguyen[i]);
        console.log(arraySoChan);
    }else {
        arraySoChan.splice(mangSoNguyen.indexOf(mangSoNguyen[i]), 1);
    }   
}