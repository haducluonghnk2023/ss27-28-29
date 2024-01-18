function demSoLanXuatHien(chuoi, kyTu) {
    const regex = new RegExp(kyTu, 'g');
    const soLanXuatHien = (chuoi.match(regex) || []).length;
    return soLanXuatHien;
}
const chuoiNhap = prompt("Nhập vào một chuỗi:");
const kyTuNhap = prompt("Nhập vào một ký tự:");
console.log(`Chuỗi đã nhập: ${chuoiNhap}`);
console.log(`Ký tự đã nhập: ${kyTuNhap}`);
console.log(`Số lần xuất hiện của ký tự trong chuỗi: ${demSoLanXuatHien(chuoiNhap, kyTuNhap)}`);
