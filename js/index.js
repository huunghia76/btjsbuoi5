/**
 * Bài tập 1
 *  input: yêu cầu người dùng nhập điểm chuẩn (benchmark)
 *         yêu cầu người dùng nhập điểm môn 1 (subject1)
 *         yêu cầu người dùng nhập điểm môn 2 (subject2)
 *         yêu cầu người dùng nhập điểm môn 3 (subject3)
 *         Cho phép người dùng chọn khu vực tương ứng với số điểm ưu tiên
 *         Cho phép người dùng loại đối tượng tương ứng với số điểm ưu tiên
 *         
 * 
 * process:Kiểm tra đầu vào 1 trong 3 điểm có lớn hơn 0 không
 *         Tính điểm tổng kết sau đó kiểm tra với điểm chuẩn xem lớn hơn hoặc
 *              bằng điểm tổng là trúng tuyển 
 *          Điểm tổng kết được tính : tổng điểm 3 môn + Điểm ưu tiên
 *          Điểm ưu tiên được chia thành điểm theo khu vực và điểm theo đối tượng 
 * 
 * 
 * 
 * output: Hiển thị kết quả cho biết thí sinh có tổng điểm là bao nhiêu và đậu hay rớt
 */
// tham số: area   trả ra: điểm
function calcAreaGrade(area) {
    if (area === "A") return 2;
    // khi gặp lệnh return thì function coi như xiong, toàn bộ code nằm dưới return sẽ không được thực thi
    if (area === "B") return 1;
    if (area === "C") return 0.5;
    return 0;
}

// tham số: type   trả ra: điểm
function calcTypeGrade(type) {
    if (type === "1") return 2.5;
    // khi gặp lệnh return thì function coi như xiong, toàn bộ code nằm dưới return sẽ không được thực thi
    if (type === "2") return 1.5;
    if (type === "3") return 1;
    return 0;
}

function exercise1() {
    // lấy input
    var benchmark = +document.getElementById("benchmarkInput").value;
    var subject1 = +document.getElementById("subject1Input").value;
    var subject2 = +document.getElementById("subject2Input").value;
    var subject3 = +document.getElementById("subject3Input").value;
    var areaVal = document.getElementById("areaSelect").value;
    var typeVal = document.getElementById("typeSelect").value;

    // tính điểm khu vực
    var areaGrade = calcAreaGrade(areaVal);
    // tính điểm đối tượng
    var typeGrade = calcTypeGrade(typeVal);

    // tính tổng điểm
    var total1 = subject1 + subject2 + subject3 + areaGrade + typeGrade;
    var textScore = '';
    // check kết quả
    if (
        total1 >= benchmark &&
        subject1 !== 0 &&
        subject2 !== 0 &&
        subject3 !== 0
    ) {
        textScore = "Đậu";
    } else {
        textScore = "Rớt";
    }
    document.getElementById('result1').innerHTML = total1 + " -> " + textScore;
    // console.log(total1);

    // in kêt quả
}

// event: click
// event handler: exercise1
// đăng kí hàm exercise1 sẽ chạy khi nút 'submit1' đc click
document.getElementById("submit1").onclick = exercise1;


/**
 * Bài tập 2
 *  input: yêu cầu người dùng nhập thông tin tiêu thụ điện Tên và số Kw 
 *         Cho biết 50kw dau : 500d/kw
                    50kw kế : 650d/kw
                    100kw Kế : 850d/kw
                    150kw kế : 1100d/kw
                    Còn lại : 1300d/kw

 *          
 * 
 * process:Tính tiền điện trả theo quy tắc
 * 
 * 
 * output: Hiển thị kết quả tiền điện phải trả theo quy tắc lên giao diện
 */
function checkElectricityBill(kw) {
    var totalMoney;
    if (kw < 50) {
        totalMoney = kw * 500;
    } else if (kw <= 100) {
        totalMoney = 50 * 500 + (kw - 50) * 650;
    } else if (kw <= 200) {
        totalMoney = 50 * 500 + 50 * 650 + (kw - 100) * 850;
    } else if (kw <= 350) {
        totalMoney = 50 * 500 + 50 * 650 + 100 * 850 + (kw - 200) * 1100;
    } else {
        totalMoney = 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (kw - 350) * 1300;
    }
    return totalMoney;
}
function exercise2() {
    var bt2Name = document.getElementById('bt2Name').value;
    var bt2Kw = +document.getElementById('bt2Kw').value;
    var total2;
    total2 = checkElectricityBill(bt2Kw);
    document.getElementById('result2').innerHTML = "Họ tên: " + bt2Name + ";" + 'Tiền điện: ' + total2.toLocaleString();
}

document.getElementById('submit2').onclick = exercise2
/**
 * Bài tập 3
 *  input: yêu cầu người dùng nhập số Họ tên, tổng thu nhập năm, số người phụ thuộc
 *         
 * 
 * process:Tính số thu nhập chịu thuế = Tổng thu nhập năm - 4.000.000- Số người phụ thuộc * 1.600.000
 *          Tính số tiền thuế phải đóng theo mốc quy định
 * 
 * output: Hiển thị thuế thu nhập cá nhân phải trả
 */
function calculateTaxableIncome(totalMoneyYear, person) {
    var totalMoneyTax;
    totalMoneyTax = totalMoneyYear - 4000000 - person * 1600000;
    return totalMoneyTax;
}
function taxExport(taxableIncome) {
    var totalTaxableIncome;

    if (taxableIncome <= 60000000) {
        totalTaxableIncome = taxableIncome * 0.05;
    } else if (taxableIncome <= 120000000) {
        totalTaxableIncome = taxableIncome * 0.1;
    } else if (taxableIncome <= 210000000) {
        totalTaxableIncome = taxableIncome * 0.15;
    } else if (taxableIncome <= 384000000) {
        totalTaxableIncome = taxableIncome * 0.2;
    } else if (taxableIncome <= 624000000) {
        totalTaxableIncome = taxableIncome * 0.25;
    } else if (taxableIncome <= 960000000) {
        totalTaxableIncome = taxableIncome * 0.30;
    } else {
        totalTaxableIncome = taxableIncome * 0.35;
    }

    return totalTaxableIncome.toFixed(1);
}
function exercise3() {
    var bt3Name = document.getElementById('bt3Name').value;
    var totalAnnualIncome = +document.getElementById('totalAnnualIncome').value;
    var dependentPerson = +document.getElementById('dependentPerson').value;
    var total3 = 0;
    total3 = taxExport(calculateTaxableIncome(totalAnnualIncome, dependentPerson));
    document.getElementById('result3').innerHTML = "Họ tên: " + bt3Name + " ; " + " Tiền thuế thu nhập cá nhân: " + total3;
}
document.getElementById('submit3').onclick = exercise3;
/**
 * Bài tập 4
 *  input: Yêu cầu chọn loại khách hàng Nhà dân hay Doanh nghiệp
 *          Nhập số kênh cao cấp
 *          Nhập số kết nối nếu khách hàng là doanh nghiệp
 *          Các phí phụ thu theo loại khách hàng
 *          
 * 
 * process:Tạo sự kiện onchange cho select
 *          Tính phí dịch vụ cơ bản cho loại khách hàng
 *          Tính phí thuê kênh cao cấp cho loại khách hàng
 *          Tính tổng tiền cáp phải trả
 * 
 * 
 * output: Hiển thị tiền cáp phải trả 
 */
function changeTypeCustomer() {
    var option1 = +document.getElementById('typeCustomer').value;
    if (option1 === 2) {
        document.getElementById("inputConect").style.display = "inline-block";
    }else {
        document.getElementById("inputConect").style.display = "none";
    }
}
function exercise4() {
    var inputIdCustomer = document.getElementById('inputIdCustomer').value;
    var inputChannelNumber = +document.getElementById('inputChannelNumber').value;
    var inputConect = +document.getElementById('inputConect').value;
    var optionChange = +document.getElementById('typeCustomer').value;

    var total4 = 0;
    if (optionChange === 2) {
        var bill2 = 15;
        var serviceBasic2 ;
        var premiumChannel2 = 50;

        if (inputConect <= 10) {
            serviceBasic2 = 75 ;
        }else{
            serviceBasic2 = 75 + (inputConect - 10) * 5;
        } 
        total4 = bill2 + premiumChannel2 * inputChannelNumber  + serviceBasic2;

    }else{
        var bill1 = 4.5;
        var serviceBasic1 = 20.5;
        var premiumChannel1 = 7.5;

        total4 = bill1 + premiumChannel1 * inputChannelNumber + serviceBasic1 ;
    }
    document.getElementById('result4').innerHTML = 'Mã khách hàng: '+ inputIdCustomer + " ; Tiền cáp : $" + total4;
}
document.getElementById('submit4').onclick = exercise4 ;
document.getElementById('typeCustomer').onchange = changeTypeCustomer ;
