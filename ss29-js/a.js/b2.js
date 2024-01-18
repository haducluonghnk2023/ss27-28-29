function timPhanTuCoDoDaiLonNhat(mang) {
    if (mang.length === 0) {
        return "Mảng trống, không có phần tử nào.";
    }
    let phanTuMax = mang[0];
    for (let i = 1; i < mang.length; i++) {
        if (mang[i].length > phanTuMax.length) {
            phanTuMax = mang[i];
        }
    }

    return `Phần tử có độ dài lớn nhất trong mảng là: ${phanTuMax}`;
}
const mangNgauNhien = [
    "abc",
    "abcdef",
    "xyz",
    "mnopqrst",
    "uvwxyz"
];
console.log("Mảng đã khai báo:", mangNgauNhien);
console.log(timPhanTuCoDoDaiLonNhat(mangNgauNhien));
