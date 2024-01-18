let numbers = [1, 2, -1, 7, 3, 4, 5];
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > max) {
    max = numbers[i];
  }
}
console.log(`Phần tử lớn nhất là ${max}`);
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] < min) {
    min = numbers[i];
  }
}
console.log(`Phần tử nhỏ nhất là ${min}`);