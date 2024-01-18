function getAllSubstrings(inputString) {
    const substrings = [];
    for (let i = 0; i < inputString.length; i++) {
        for (let j = i + 1; j <= inputString.length; j++) {
            substrings.push(inputString.slice(i, j));
        }
    }
    return substrings;
}
const userString = prompt("Nhập vào một chuỗi bất kỳ:");
const result = getAllSubstrings(userString);
console.log("Mảng chứa tất cả các chuỗi con của chuỗi đã nhập:", result);

