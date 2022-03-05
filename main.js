// Bài 1
var luongNgay = 100000;
var soNgayLam = 34 ;
var luongThang = luongNgay * soNgayLam;
var luongNv = "Lương của nv là: " + luongThang;
console.log(luongNv);

// Bài 2
var number1 = 34;
var number2 = 66;
var number3 = 88;
var number4 = 33;
var number5 = 68;
var tongTBC = (number1 + number2 + number3 + number4 + number5) / 5;
var kqTBC = "Trung bình là: " + tongTBC;
console.log(kqTBC);

// Bài 3
var giaUSD = 23500;
var USD = 34;
var tienVND = giaUSD * USD;
var kqTienVND = "Tổng số tiền là: " + tienVND + "VND";
console.log(kqTienVND);

// Bài 4
var dai = 68;
var rong = 34;
var chuVi = (dai + rong) * 2;
var dienTich = dai * rong;
var kqChuVi = "Chu vi hình chữ nhật là: " + chuVi;
var kqDienTich = "Diện tích hình chữ nhật là: " + dienTich;
console.log(kqChuVi);
console.log(kqDienTich);

// Bài 5
var a = 83;
var donVi = a % 10;
var chuc = Math.floor(a / 10);
var tong2KySo = donVi + chuc;
var kqT2KySo = "Tổng 2 ký số là: " + tong2KySo;
console.log(kqT2KySo);
