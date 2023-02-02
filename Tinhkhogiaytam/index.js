const loaithung_element = document.getElementById("select-loaithung");
const Mocgai_element = document.getElementById("Mocgai");
const lblName = document.getElementById("label");

const cao = document.getElementById("cao-element");
const dai = document.getElementById("dai-element");
const rong = document.getElementById("rong-element");
const bienso = document.getElementById("bienso-input");
const socon = document.getElementById("socon-element");

const Kho = document.getElementById("Kho");
const Dai = document.getElementById("Dai");
const noti = document.getElementById("noti");

const change = () => {
  var loaithung_value =
    loaithung_element.options[loaithung_element.selectedIndex].text;

  if (
    loaithung_value === "Hộp nắp đậy 2 đầu" ||
    loaithung_value === "Hộp nắp đậy đít gài"
  ) {
    lblName.innerText = "Chiều cao móc gài";
    Mocgai_element.style.display = "block";
  } else if (loaithung_value === "Hộp tay xách (hay thùng gà)") {
    Mocgai_element.style.display = "block";
    lblName.innerText = "Chiều cao tay xách";
  } else {
    Mocgai_element.style.display = "none";
  }
  reset();
};

function changeState(state) {
  if (state === 1) document.getElementById("noti").style.display = "block";
  else {
    document.getElementById("noti").style.display = "none";
  }
}

function reset() {
  cao.value = "";
  dai.value = "";
  rong.value = "";
  bienso.value = "";
  socon.value = "";

  Kho.innerHTML = "";
  Dai.innerHTML = "";
}

function myFunction() {
  const c = parseFloat(cao.value.replace(",", "."));
  const d = parseFloat(dai.value.replace(",", "."));
  const r = parseFloat(rong.value.replace(",", "."));
  const t = parseFloat(bienso.value.replace(",", "."));
  const n = parseFloat(socon.value.replace(",", "."));
  if (!isNaN(c) && !isNaN(d) && !isNaN(r) && !isNaN(n)) {
    const loaithung =
      loaithung_element.options[loaithung_element.selectedIndex].text;

    let state = 0;
    let _dk;
    switch (loaithung) {
      case "Thùng A1":
        _dk = (d + r) * 2;
        Kho_value = (r + c) * n;
        _dk > 250 ? (Dai_value = d + r + 3) : (Dai_value = (d + r) * 2 + 3);
        Kho.innerHTML = "Khổ: " + Kho_value + " cm";
        Dai.innerHTML = "Dài: " + Dai_value + " cm";
        break;
      case "Thùng nắp chồng":
        Kho_value = (2 * r + c) * n;
        Dai_value = (d + r) * 2 + 3;
        Kho.innerHTML = "Khổ: " + Kho_value + " cm";
        Dai.innerHTML = "Dài: " + Dai_value + " cm";
        break;
      case "Thùng âm dương (gỗ)":
        Kho_value = (2 * c + r) * n;
        Dai_value = 2 * c + d;
        Kho.innerHTML = "Khổ: " + Kho_value + " cm";
        Dai.innerHTML = "Dài: " + Dai_value + " cm";
        break;
      case "Hộp nắp gài (dạng bem)":
        Kho_value = (4 * c + d) * n;
        Dai_value = 3 * c + 2 * r;
        Kho.innerHTML = "Khổ: " + Kho_value + " cm";
        Dai.innerHTML = "Dài: " + Dai_value + " cm";
        break;
      case "Hộp nắp đậy 2 đầu":
        if (!isNaN(t)) {
          _dk = (d + r) * 2;
          _dk > 135 ? (Dai_value = d + r) : (Dai_value = (d + r) * 2);

          Kho_value = ((t + r) * 2 + c) * n;

          Kho.innerHTML = "Khổ: " + Kho_value + " cm";
          Dai.innerHTML = "Dài: " + Dai_value + " cm";
        } else {
          Kho.innerHTML = "";
          Dai.innerHTML = "";
          noti.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
          state = 1;
        }
        break;
      case "Hộp tay xách (hay thùng gà)":
        if (!isNaN(t)) {
          _dk = (d + r) * 2;
          _dk > 135 ? (Dai_value = d + r) : (Dai_value = (d + r) * 2);

          Kho_value = (t + r / 2 + c + r / 2 + 3) * n;

          Kho.innerHTML = "Khổ: " + Kho_value + " cm";
          Dai.innerHTML = "Dài: " + Dai_value + " cm";
        } else {
          Kho.innerHTML = "";
          Dai.innerHTML = "";
          noti.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
          state = 1;
        }
        break;
      case "Hộp nắp đậy đít gài":
        if (!isNaN(t)) {
          Kho_value = (t + r + c + r / 2 + 3) * n;
          Dai_value = (d + r) * 2;
          Kho.innerHTML = "Khổ: " + Kho_value + " cm";
          Dai.innerHTML = "Dài: " + Dai_value + " cm";
        } else {
          Kho.innerHTML = "";
          Dai.innerHTML = "";
          noti.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
          state = 1;
        }
        break;

      case "Không":
        document.getElementById("noti").innerHTML = "Vui lòng chọn loại thùng!";
        state = 1;
        break;
    }
    changeState(state);
  } else {
    Kho.innerHTML = "";
    Dai.innerHTML = "";
    noti.innerHTML = "Vui lòng nhập đầy đủ thông tin!";
    changeState(1);
  }
}
