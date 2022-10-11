// Bài 1 :
/**
 * INPUT:
 *      LƯƠNG 1 NGÀY 100000, SỐ NGÀY LÀM
 *
 *
 * PROCESS:
 *      1. LẤY SỐ NGÀY LÀM TỪ INPUT
 *      2. TÍNH LƯƠNG = LƯƠNG 1 NGÀY * SỐ NGÀY
 *
 *
 * OUTPUT:
 *      TIỀN LƯƠNG
 *
 *
 *
 */

function ex1() {
  var salary = 100000;
  var workDate = +document.getElementById("workDate").value;
  var totalSalory;
  if (workDate <= 0 || workDate > 31) {
    return alert("Work date must be between 0 and 31  ");
  } else {
    totalSalory = salary * workDate;
    document.getElementById("ex1").innerHTML =
      "Tổng lương tháng : " + totalSalory + " $ ";
  }
}
// Bài 2 :
/**
 * INPUT:   5 SỐ THỰC
 *
 *
 *
 * PROCESS:
 *      1. LẤY 5 SỐ THỰC TỪ INPUT : number1 =  , number2 = , number3 , number4 , number5
 *      2. TÍNH TRUNG BÌNH CỦA 5 SỐ THỰC ĐÃ CHO = (TỔNG CỦA 5 SỐ THỰC ĐÃ CHO) / 5
 *
 * OUTPUT:
 *      TRUNG BÌNH 5 SỐ THỰC ĐÃ CHO
 *
 *
 */
function ex2() {
  var number1 = +document.getElementById("number_1").value,
    number2 = +document.getElementById("number_2").value,
    number3 = +document.getElementById("number_3").value,
    number4 = +document.getElementById("number_4").value,
    number5 = +document.getElementById("number_5").value;
  var average;

  average = (number1 + number2 + number3 + number4 + number5) / 5;

  document.getElementById("ex2").innerHTML = "Trung bình cộng : " + average;
}
// Bài 3 :
/**
 * INPUT:   GIÁ TRỊ CỦA 1 USD = 23700 VND, SỐ LƯƠNG USD MUỐN QUY ĐỔI
 *
 *
 *
 * PROCESS:
 *      1. LẤY SÓ LƯỢNG USD ĐỔI TỪ INPUT TẠO 2 BIẾN : -   GIÁ TRỊ CỦA USD = 23700 VND
 *
 *      2. TÍNH SỐ TIỀN QUY ĐỔI:
 *              TỔNG SỐ TIỀN QUY ĐỔI = (GIÁ TRỊ CỦA USD = 23700 VND) * SỐ LƯỢNG USD MUỐN QUY ĐỔI
 *      3. XUẤT KẾT QUẢ
 *
 *
 * OUTPUT:
 *      SỐ TIỀN QUY ĐỔI ĐƯỢC
 *
 *
 */

function ex3() {
  var USD = 23700;
  var amountOfUsd = +document.getElementById("amountOfUsd").value;
  var totalMoney;
  totalMoney = USD * amountOfUsd;
  if (amountOfUsd <= 0) {
    return alert("Amount of usd > 0");
  } else {
    document.getElementById("ex3").innerHTML =
      "Tổng số tiền quy đổi được : " + totalMoney + "  VND";
  }
}
// Bài 4 :
/**
 * INPUT:
 *      ĐỘ DÀI CÁC CẠNH CỦA HÌNH CHỮ NHẬT
 *
 *
 * PROCESS:Ư
 *      1. LẤY CHIỀU DÀI VÀ CHIỀU RỘNG  HÌNH CHỮ NHẬT TỪ INPUT
 *      2. TÍNH:
 *          -  DIỆN TÍCH = CHIỀU DÀI * CHIỀU RỘNG
 *          -  CHU VI = ( CHIỀU DÀI + CHIỀU RỘNG ) * 2
 *      3. XUẤT KẾT QUẢ
 *
 *
 * OUTPUT:  1. DIỆN TÍCH HCN
 *          2. CHU VI HCN
 *
 *
 *
 */
function ex4() {
  var width = +document.getElementById("width").value;
  var longs = +document.getElementById("longs").value;
  var perimeter, area;
  if (width <= 0 || longs <= 0) {
    return alert(" Nhập lại chiều rộng chiều dài HCN > 0 ");
  } else {
    perimeter = (width + longs) * 2;
    area = width * longs;

    document.getElementById("ex4").innerHTML =
      " Diện tích hình chữ nhật : " +
      area +
      " ; Chu vi hình chữ nhật : " +
      perimeter;
  }
}
// Bài 5 :
/**
 * INPUT:   SỐ CÓ 2 CHỮ SỐ
 *
 *
 *
 * PROCESS:
 *      1. LẤY SỐ CÓ 2 CHỮ SỐ TỪ INPUT
 *      2. TÌM RA SỐ HÀNG CHỤC VÀ HÀNG ĐƠN VỊ   :
 *          - SỐ HÀNG CHỤC = Math.floor(SỐ ĐÃ CHO / 10)
 *          - SỐ HÀNG ĐƠN VỊ = SỐ ĐÃ CHO % 10
 *      3. TÍNH TỔNG 2 SỐ TRÊN = SỐ HÀNG CHỤC + SỐ HÀNG ĐƠN VỊ
 *
 *
 * OUTPUT:
 *      TỔNG 2 KÝ SỐ
 *
 *
 */
function ex5() {
  var number_ab = +document.getElementById("number_ab").value;
  var dozen, unit, totalDozenAndUnit;
  if (number_ab > 99 || number_ab < 10) {
    return alert("Number must be from 10 to 99 ");
  } else {
    dozen = Math.floor(number_ab / 10);
    unit = number_ab - dozen * 10;
    totalDozenAndUnit = dozen + unit;
    document.getElementById("ex5").innerHTML =
      "Tổng ký số số đã cho : " + totalDozenAndUnit;
  }
}
