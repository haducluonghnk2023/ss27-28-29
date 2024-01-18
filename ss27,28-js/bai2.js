let a = parseInt(prompt("nhập a"));
let b = parseInt(prompt("nhập b"));
let array = [];
for (let i = a; i <= b; i++) {
  array.push(i);
}
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}   