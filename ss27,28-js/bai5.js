function findUniqueElements(arr) {
    const elementCount = {};
    arr.forEach(element => {
        elementCount[element] = (elementCount[element] || 0) + 1;
    });
    let firstUniqueElement = null;
    for (const element in elementCount) {
        if (elementCount[element] === 1) {
            firstUniqueElement = element;
            break;
        }
    }
    if (firstUniqueElement !== null) {
        console.log("Phần tử đầu tiên độc nhất trong mảng là:", firstUniqueElement);
    }
}
const myArray = [1, 2, 3, 4, 1, 2, 3, 5, 6, 7, 8, 6, 9];
findUniqueElements(myArray);

