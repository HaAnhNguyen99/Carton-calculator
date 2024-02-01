function change() {
  var loaiThung_element = document.getElementById("select-loaithung");
  var loaiThung_value =
    loaiThung_element.options[loaiThung_element.selectedIndex].text;

  if (loaiThung_value === "3 lớp") {
    document.getElementById("lop5").style.display = "none";
  } else {
    document.getElementById("lop5").style.display = "contents";
  }
  reset();
}

function reset() {
  var c = (document.getElementById("cao-element").value = "");
  var d = (document.getElementById("dai-element").value = "");
  var r = (document.getElementById("rong-element").value = "");
  var dl1 = (document.getElementById("lop_1").value = "");
  var dl2 = (document.getElementById("lop_2").value = "");
  var dl3 = (document.getElementById("lop_3").value = "");
  var dl4 = (document.getElementById("lop_4").value = "");
  var dl5 = (document.getElementById("lop_5").value = "");
  document.getElementById("sl-element").innerHTML = "";
}

function changeState(state) {
  if (state === 1) document.getElementById("noti").style.display = "block";
  else {
    document.getElementById("noti").style.display = "none";
  }
}

//Tinh D0
function D0(d, r) {
  return (d + r) * 2 + 3;
}

//Tinh R0
function R0(r, c) {
  return r + c;
}

//Tinh D1
function D1(D0, R0, DL1) {
  return ((D0 * R0) / 10000) * DL1;
}

//Tinh D2
function D2(D0, R0, DL2) {
  return ((D0 * R0) / 10000) * DL2;
}

//Tinh D3
function D3(D0, R0, DL3) {
  return ((D0 * R0) / 10000) * DL3;
}

//Tinh D4
function D4(D0, R0, DL4) {
  return ((D0 * R0) / 10000) * DL4;
}

//Tinh D5
function D5(D0, R0, DL5) {
  return ((D0 * R0) / 10000) * DL5;
}

//In kq ra man hinh
function print(kq) {
  console.log("Khối lượng đơn hàng A1: " + kq.toFixed(2) + " (Gram)");
  document.getElementById("KLuong").innerHTML =
    "Khối lượng đơn hàng A1: " + kq.toFixed(2) + " (Gram)";
}

//Tinh KL thung 3 lop
function KL3L(d, r, c, DL1, DL2, DL3, sl) {
  //Tinh D0
  let D_0 = D0(d, r);
  let R_0 = R0(r, c);
  let D_1 = D1(D_0, R_0, DL1);
  let D_2 = D2(D_0, R_0, DL2);
  let D_3 = D3(D_0, R_0, DL3);

  const kq = (D_1 + D_2 + D_3) * sl;
  console.log(kq);
  print(kq);
}

//Tinh KL thung 5 lop
function KL5L(d, r, c, DL1, DL2, DL3, DL4, DL5, sl) {
  //Tinh D0
  let D_0 = D0(d, r);
  let R_0 = R0(r, c);
  let D_1 = D1(D_0, R_0, DL1);
  let D_2 = D2(D_0, R_0, DL2);
  let D_3 = D3(D_0, R_0, DL3);
  let D_4 = D4(D_0, R_0, DL4);
  let D_5 = D5(D_0, R_0, DL5);

  const kq = (D_1 + D_2 + D_3 + D_4 + D_5) * sl;
  print(kq);
  console.log(kq);
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
  var sl = parseFloat(
    document.getElementById("sl-element").value.replace(",", ".")
  );

  var dl1 = parseFloat(
    document.getElementById("lop_1").value.replace(",", ".")
  );

  var dl2 = parseFloat(
    document.getElementById("lop_2").value.replace(",", ".")
  );

  var dl3 = parseFloat(
    document.getElementById("lop_3").value.replace(",", ".")
  );

  var dl4 = parseFloat(
    document.getElementById("lop_4").value.replace(",", ".")
  );

  var dl5 = parseFloat(
    document.getElementById("lop_5").value.replace(",", ".")
  );

  if (!isNaN(c) && !isNaN(d) && !isNaN(r) && !isNaN(sl)) {
    let state = 0;
    var loaithung_element = document.getElementById("select-loaithung");
    var loaithung =
      loaithung_element.options[loaithung_element.selectedIndex].text;

    switch (loaithung) {
      case "3 lớp":
        KL3L(d, r, c, dl1, dl2, dl3, sl);
        break;
      case "5 lớp":
        KL5L(d, r, c, dl1, dl2, dl3, dl4, dl5, sl);
        break;
    }
  } else {
    document.getElementById("thanhtien").innerHTML = "";
    document.getElementById("giakhuonbe").innerHTML = "";
    document.getElementById("noti").innerHTML =
      "Vui lòng nhập đầy đủ thông tin!";
    changeState(1);
  }
}
