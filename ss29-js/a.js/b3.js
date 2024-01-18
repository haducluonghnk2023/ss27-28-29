function demSoKyTu(chuoi) {
    const chuoiKhongKyTuTrong = chuoi.split(' ').join('');
    return chuoiKhongKyTuTrong.length;
}
const chuoiDaKhaiBao = "abcdefghijklmnopqrstuvwxyz : đây là 1 chuỗi kí tự";
console.log("Chuỗi đã khai báo:", chuoiDaKhaiBao);
console.log("Số ký tự trong chuỗi (không tính ký tự trống):", demSoKyTu(chuoiDaKhaiBao));
