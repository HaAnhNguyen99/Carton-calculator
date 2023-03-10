var loaithung_value;

function change() {
  var loaithung_element = document.getElementById("select-loaithung");
  var loaithung_value =
    loaithung_element.options[loaithung_element.selectedIndex].text;

  if (loaithung_value === "Thùng A1") {
    document.getElementById("belo-div").style.display = "block";
    document.getElementById("tayxach-div").style.display = "none";
  } else if (loaithung_value === "Hộp tay xách (hay thùng gà)") {
    document.getElementById("tayxach-div").style.display = "block";
    document.getElementById("belo-div").style.display = "none";
  } else {
    document.getElementById("belo-div").style.display = "none";
    document.getElementById("tayxach-div").style.display = "none";
  }
  reset();
}

function tinhD(d, r, belo) {
  if (d + r >= 100 || belo == "Có") {
    D = (d + r) * 2 + 10;
    return D;
  } else {
    D = (d + r) * 2 + 5;
    return D;
  }
}

function TinhK(r, c) {
  K = r + c + 3;
  return K;
}

function TinhD_ThungNapGai(d, c) {
  var D = 4 * c + d + 3;
  return D;
}

function TinhK_ThungNapGai(r, c) {
  var K = 3 * c + 2 * r + 3;
  return K;
}

function TinhD1_HopAmDuong(c, d) {
  var D1 = 4 * c + d + 3;
  return D1;
}

function TinhK1_HopAmDuong(c, r) {
  var K1 = 2 * c + r + 3;
  return K1;
}

function TinhD2_HopAmDuong(c, r) {
  var D2 = 4 * c + r + 4;
  return D2;
}

function TinhK2_HopAmDuong(c, d) {
  var K2 = 2 * c + d + 4;
  return K2;
}
// Tính Đáy hộp âm dương
function TinhDay_HopAmDuong(c, r, d, gia) {
  var D1 = TinhD1_HopAmDuong(c, d);
  var K1 = TinhK1_HopAmDuong(c, r);
  var Day = D1 * K1 * gia;
  return Day;
}
// Tính Nắp hộp âm dương
function TinhNap_HopAmDuong(c, r, d, gia) {
  var D2 = TinhD2_HopAmDuong(c, r);
  var K2 = TinhK2_HopAmDuong(c, d);

  var Nap = D2 * K2 * gia;
  return Nap;
}

//Tính thành tiền Hộp âm dương
function TinhGiaThanh_HopAmDuong(c, r, d, thanh) {
  var day = TinhDay_HopAmDuong(c, r, d, thanh);
  var nap = TinhNap_HopAmDuong(c, r, d, thanh);

  var ThanhTien = Math.trunc(day + nap);
  var ThanhTien_return = ThanhTien.toLocaleString();
  return ThanhTien_return;
}

//Tính giá khuôn bế hộp âm dương
function TinhGiaKhuonBe_HopAmDuong(c, r, d) {
  var D1 = TinhD1_HopAmDuong(c, d);
  var K1 = TinhK1_HopAmDuong(c, r);

  var D2 = TinhD2_HopAmDuong(c, r);
  var K2 = TinhK2_HopAmDuong(c, d);

  var GiaKhuongBe_ = D1 * K1 * 140 + 150000 + D2 * K2 * 140 + 150000;
  var GiaKhuongBe = Math.trunc(GiaKhuongBe_ + GiaKhuongBe_ * 0.2);

  var GiaKhuongBe_return = GiaKhuongBe.toLocaleString();
  return GiaKhuongBe_return;
}

function reset() {
  var c = (document.getElementById("cao-element").value = "");
  var d = (document.getElementById("dai-element").value = "");
  var r = (document.getElementById("rong-element").value = "");
  var t = (document.getElementById("tayxach-element").value = "");
  var gia = (document.getElementById("gia-element").value = "");
  document.getElementById("thanhtien").innerHTML = "";
  document.getElementById("giakhuonbe").innerHTML = "";
}

function changeState(state) {
  if (state === 1) document.getElementById("noti").style.display = "block";
  else {
    document.getElementById("noti").style.display = "none";
  }
}

function myFunction() {
  var c = parseFloat(
    document.getElementById("cao-element").value.replace(",", ".")
  );
  var d = parseFloat(
    document.getElementById("dai-element").value.replace(",", ".")
  );
  var r = parseFloat(
    document.getElementById("rong-element").value.replace(",", ".")
  );
  var t = parseFloat(
    document.getElementById("tayxach-element").value.replace(",", ".")
  );
  var gia = parseFloat(
    document.getElementById("gia-element").value.replace(",", ".")
  );

  if (!isNaN(c) && !isNaN(d) && !isNaN(r) && !isNaN(gia)) {
    var loaithung_element = document.getElementById("select-loaithung");
    var loaithung =
      loaithung_element.options[loaithung_element.selectedIndex].text;

    let state = 0;
    switch (loaithung) {
      case "Thùng A1":
        var belo_element = document.getElementById("belo");
        var belo = belo_element.options[belo_element.selectedIndex].text;
        // Tinh thanh tien
        var D = tinhD(d, r, belo);
        var K = TinhK(r, c);

        const Thanhtien = Math.trunc(D * K * gia);
        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + Thanhtien.toLocaleString() + " VNĐ";
        break;
      case "Hộp nắp gài (dạng bem)":
        var D = TinhD_ThungNapGai(d, c);

        var K = TinhK_ThungNapGai(r, c);

        var ThanhTien = Math.trunc(D * K * gia);
        var GiakhuonBe_ = D * K * 140 + 150000;
        var GiakhuonBe = Math.trunc(GiakhuonBe_ + GiakhuonBe_ * 0.2);

        var showThanhtien = ThanhTien.toLocaleString();
        var showGiakhuonBe = GiakhuonBe.toLocaleString();
        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        document.getElementById("giakhuonbe").innerHTML =
          "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        break;
      case "Hộp âm dương":
        var showThanhtien = TinhGiaThanh_HopAmDuong(c, r, d, gia);
        var showGiakhuonBe = TinhGiaKhuonBe_HopAmDuong(c, r, d, gia);

        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        document.getElementById("giakhuonbe").innerHTML =
          "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        break;
      case "Thùng nắp chồng":
        var D = (d + r) * 2 + 5;
        var K = 2 * r + c + 3;
        var ThanhTien = Math.trunc(D * K * gia);
        var showThanhtien = ThanhTien.toLocaleString();
        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        break;
      case "Hộp nắp đậy đít gài":
        var D = (d + r) * 2 + 5;
        var K = 3 + r + c + r / 2 + 6;
        var ThanhTien = Math.trunc(D * K * gia);
        var GiakhuonBe_ = D * K * 140 + 150000;
        var GiakhuonBe = Math.trunc(GiakhuonBe_ + GiakhuonBe_ * 0.2);

        // show
        var showThanhtien = ThanhTien.toLocaleString();
        var showGiakhuonBe = GiakhuonBe.toLocaleString();

        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        document.getElementById("giakhuonbe").innerHTML =
          "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        break;
      case "Hộp nắp đậy 2 đầu":
        var D;
        var dieukien = (d + r) * 2;
        if (dieukien >= 135) {
          D = (d + r) * 2 + 10;
        } else {
          D = (d + r) * 2 + 5;
        }
        var K = (3 + r) * 2 + 3 + c;
        var ThanhTien = Math.trunc(D * K * gia);
        var GiakhuonBe_ = D * K * 140 + 150000;
        var GiakhuonBe = Math.trunc(GiakhuonBe_ + GiakhuonBe_ * 0.2);

        var showThanhtien = ThanhTien.toLocaleString();
        var showGiakhuonBe = GiakhuonBe.toLocaleString();

        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        document.getElementById("giakhuonbe").innerHTML =
          "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        break;
      case "Hộp tay xách (hay thùng gà)":
        if (!isNaN(t)) {
          var D;
          var dieukien = (d + r) * 2;
          if (dieukien >= 135) {
            D = (d + r) * 2 + 10;
          } else {
            D = (d + r) * 2 + 5;
          }
          var K = t + r / 2 + c + r / 2 + 6;

          var ThanhTien = Math.trunc(D * K * gia);
          var GiakhuonBe_ = D * K * 140 + 150000;
          var GiakhuonBe = Math.trunc(GiakhuonBe_ + GiakhuonBe_ * 0.2);

          var showThanhtien = ThanhTien.toLocaleString();
          var showGiakhuonBe = GiakhuonBe.toLocaleString();

          document.getElementById("thanhtien").innerHTML =
            "Giá thành: " + showThanhtien + " VNĐ";
          document.getElementById("giakhuonbe").innerHTML =
            "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        } else {
          document.getElementById("thanhtien").innerHTML = "";
          document.getElementById("giakhuonbe").innerHTML = "";
          document.getElementById("noti").innerHTML =
            "Vui lòng nhập đầy đủ thông tin!";
          state = 1;
        }
        break;
      case "Hộp giày":
        var D = 2 * c + d + 13;
        var K = 2 * c + 2 * r + 13;

        var ThanhTien = Math.trunc(D * K * gia);
        var GiakhuonBe_ = D * K * 140 + 150000;
        var GiakhuonBe = Math.trunc(GiakhuonBe_ + GiakhuonBe_ * 0.2);

        var showThanhtien = ThanhTien.toLocaleString();
        var showGiakhuonBe = GiakhuonBe.toLocaleString();

        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        document.getElementById("giakhuonbe").innerHTML =
          "Giá khuôn bế: " + showGiakhuonBe + " VNĐ";
        break;
      case "Thùng âm dương (gỗ)":
        var D = 2 * c + d + 3;
        var R = 2 * c + r + 3;

        var ThanhTien = Math.trunc(D * R * gia * 2);
        var showThanhtien = ThanhTien.toLocaleString();

        document.getElementById("thanhtien").innerHTML =
          "Giá thành: " + showThanhtien + " VNĐ";
        break;
      case "Không":
        document.getElementById("noti").innerHTML = "Vui lòng chọn loại thùng!";
        state = 1;
        break;
    }
    changeState(state);
  } else {
    document.getElementById("thanhtien").innerHTML = "";
    document.getElementById("giakhuonbe").innerHTML = "";
    document.getElementById("noti").innerHTML =
      "Vui lòng nhập đầy đủ thông tin!";
    changeState(1);
  }
}
