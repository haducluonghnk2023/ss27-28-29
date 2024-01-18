function locPhanTuTheoChuoi(mang, chuoi) {
    const ketQuaLoc = mang.filter((phanTu) => phanTu.includes(chuoi));
    return ketQuaLoc;
}
const mangChuoi = [
    "apple",
    "banana",
    "orange",
    "grape",
    "kiwi",
    "pineapple"
];
const chuoiNhap = prompt("Nhập vào một chuỗi:");
console.log("Mảng gồm nhiều chuỗi:", mangChuoi);
console.log(`Chuỗi đã nhập: ${chuoiNhap}`);
console.log("Các phần tử trong mảng chứa chuỗi đã nhập:");
console.log(locPhanTuTheoChuoi(mangChuoi, chuoiNhap));
