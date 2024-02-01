const SongE = 0.0015;
const SongB = 0.0025;
const SongC = 0.0035;
const SongBC = 0.006;
const SongBE = 0.004;

function change() {
  var loaiThung_element = document.getElementById("select-loaithung");
  var loaiThung_value =
    loaiThung_element.options[loaiThung_element.selectedIndex].text;

  if (loaiThung_value === "3 lớp") {
    document.getElementById("song_3").style.display = "block";
    document.getElementById("song_5").style.display = "none";
  } else {
    document.getElementById("song_3").style.display = "none";
    document.getElementById("song_5").style.display = "block";
  }

  let element = document.getElementById("myoption");
  let hidden = element.getAttribute("hidden");
  reset();
}

function reset() {
  var c = (document.getElementById("cao-element").value = "");
  var d = (document.getElementById("dai-element").value = "");
  var r = (document.getElementById("rong-element").value = "");
  var gia = (document.getElementById("sl-element").value = "");
  document.getElementById("sl-element").innerHTML = "";
}

function changeState(state) {
  if (state === 1) document.getElementById("noti").style.display = "block";
  else {
    document.getElementById("noti").style.display = "none";
  }
}

//Tinh D
function D(d, r) {
  return (d + r) / 100;
}

//Tinh R
function R(r, c) {
  return (r + c) / 100;
}

//Tinh C
function C(song) {
  return song * 3;
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

  var song3_element = document.getElementById("song-select");
  var song3 = song3_element.options[song3_element.selectedIndex].text;

  var song5_element = document.getElementById("song5-select");
  var song5 = song5_element.options[song5_element.selectedIndex].text;

  if (!isNaN(c) && !isNaN(d) && !isNaN(r) && !isNaN(sl)) {
    let state = 0;
    if (document.getElementById("song_3").style.display !== "none") {
      switch (song3) {
        case "E":
          var khoi = D(d, r) * R(r, c) * C(SongE) * sl;
          console.log(khoi.toFixed(2));
          break;
        case "B":
          var khoi = D(d, r) * R(r, c) * C(SongB) * sl;
          console.log("D: " + D(d, r));
          console.log("R: " + R(r, c));
          console.log("C: " + C(SongB));
          console.log("Khoi: " + khoi.toFixed(2));
          break;
        case "C":
          var khoi = D(d, r) * R(r, c) * C(SongC) * sl;
          console.log(khoi.toFixed(2));
          break;
      }
    } else {
      console.log(song5);
      switch (song5) {
        case "BC":
          var khoi = D(d, r) * R(r, c) * C(SongBC) * sl;
          console.log("D: " + D(d, r));
          console.log("R: " + R(r, c));
          console.log("C: " + C(SongBC));
          console.log("Khoi: " + khoi.toFixed(2));
          break;
        case "BE":
          var khoi = D(d, r) * R(r, c) * C(SongBE) * sl;
          console.log(khoi.toFixed(2));
          break;
      }
    }
  } else {
    document.getElementById("thanhtien").innerHTML = "";
    document.getElementById("giakhuonbe").innerHTML = "";
    document.getElementById("noti").innerHTML =
      "Vui lòng nhập đầy đủ thông tin!";
    changeState(1);
  }
}
