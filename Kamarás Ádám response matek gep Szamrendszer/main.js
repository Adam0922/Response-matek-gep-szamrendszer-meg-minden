//Licenc információk (pl.: freeware, shareware, pl.:GNU FPL)
// document.getElementById("sciOps").style.display = "none";
// document.getElementById("btnSci").style.display = "none";
//Számológép alaphelyzetbe állítása
function calcReset() {
  location.reload();
}

//HTML elemek elérése változókban
let inputA = document.querySelector("input[name='numA']");
let inputB = document.querySelector("input[name='numB']");
let errorMessage = document.querySelector("span.err-msg");
let output = document.querySelector("span.out");
let modeText = document.querySelector("span.mode-text");
let lstSci = document.getElementById("sciOps");
let lstSel = document.getElementById("selOps");
let lstNum = document.getElementById("selNum");
let sciBox = document.getElementById("cbSci");
let NumBox = document.getElementById("szamCalc");

//Tudományos mód műveleti lista letiltása.
lstSci.style.display = "none";
lstNum.style.display = "none";
sciBox.checked = false;
NumBox.checked = false;

//Számolási logika megvalósítása
function calcNum() {
  // debugger;
  let listOps = selOps.options[selOps.selectedIndex].innerHTML;
  //Számolási logika id-else algoritmussal
  if (inputA.value == "" || inputB.value == "") {
    errorMessage.innerHTML = "Nem adtál meg értéket!";
  } else {
    errorMessage.innerHTML = "";
    switch (listOps) {
      case "+":
        output.innerHTML = Add(
          parseFloat(inputA.value),
          parseFloat(inputB.value)
        );
        break;
      case "-":
        output.innerHTML = Sub(
          parseFloat(inputA.value),
          parseFloat(inputB.value)
        );
        break;
      case "*":
        output.innerHTML = Multi(
          parseFloat(inputA.value),
          parseFloat(inputB.value)
        );
        break;
      case "/":
        output.innerHTML = Div(
          parseFloat(inputA.value),
          parseFloat(inputB.value)
        );
        break;
    }
  }
}

//Számolási logika függvényekkel
function Add(a, b) {
  return a + b;
}

function Sub(a, b) {
  return a - b;
}

function Multi(a, b) {
  return a * b;
}

function Div(a, b) {
  return a / b;
}

//A számológép átkacsolása tudományos módba
function swToSci() {
  // debugger;
  let swToSciCheckbox = document.getElementById("cbSci");

  // Ezután adj hozzá egy eseménykezelőt a checkboxhoz
  swToSciCheckbox.addEventListener("change", function () {
    // Ellenőrizzük, hogy a checkbox be van-e pipálva
    if (this.checked) {
      // Ha igen, engedélyezzük a inputB elemet
      inputB.removeAttribute("disabled");
    }
  });
  errorMessage.innerHTML = "";
  inputA.value = "";
  inputB.value = "";
  output.innerHTML = "0";
  modeText.innerHTML = "[Tudományos mód]";
  if (sciBox.checked == true) {
    lstNum.style.display = "none";
    lstSci.style.display = "block";
    lstSel.style.display = "none";
    document.getElementById("sciOps").selectedIndex = 0;
    NumBox.checked = false;
    inputB.removeAttribute("disabled");
  } else {
    modeText.innerHTML = "[Normál mód]";
    lstSci.style.display = "none";
    lstNum.style.display = "none";
    lstSel.style.display = "block";
    inputB.removeAttribute("disabled");
  }
}

//A számológép átkacsolása számrendszer módba
function swToNum() {
  // debugger;
  errorMessage.innerHTML = "";
  inputA.value = "";
  inputB.value = "";
  output.innerHTML = "0";
  modeText.innerHTML = "[Számrendszer mód]";
  if (NumBox.checked == true) {
    lstSci.style.display = "none";
    lstSel.style.display = "none";
    lstNum.style.display = "block";
    inputB.disabled = "true";
    document.getElementById("selNum").selectedIndex = 0;
    sciBox.checked = false;
  } else {
    modeText.innerHTML = "[Normál mód]";
    lstSci.style.display = "none";
    lstNum.style.display = "none";
    lstSel.style.display = "block";
    inputB.removeAttribute("disabled");
  }
}

function calcSci() {
  let listSciOps = parseInt(document.getElementById("sciOps").value);
  //Számolási logika id-else algoritmussal
  if (inputA.value == "") {
    errorMessage.innerHTML = "Nem adtál meg értéket!";
    output.innerHTML = "0";
  } else {
    errorMessage.innerHTML = "";
    switch (listSciOps) {
      case 0:
        if (inputB.value == "") {
          errorMessage.innerHTML = "Nem adtál meg értéket!";
          output.innerHTML = "0";
        } else {
          output.innerHTML = Percent(inputA.value, inputB.value);
          break;
        }

      case 1:
        if (inputB.value == "") {
          errorMessage.innerHTML = "Nem adtál meg értéket!";
          output.innerHTML = "0";
        } else {
          output.innerHTML = Power(inputA.value, inputB.value);
          break;
        }
      case 2:
        output.innerHTML = squareRoot(inputA.value);
        break;
      case 3:
        output.innerHTML = cubeRoot(inputA.value);
        break;
      case 4:
        output.innerHTML = log(inputA.value);
        break;
      case 5:
        output.innerHTML = Sin(inputA.value);
        break;
      case 6:
        output.innerHTML = Cos(inputA.value);
        break;
      case 7:
        output.innerHTML = Tan(inputA.value);
        break;
    }
  }
}

function Percent(a, b) {
  let peResult = (a / 100) * b;
  if (Number.isInteger(peResult)) {
    return peResult.toFixed(0);
  } else {
    return peResult.toFixed(5);
  }
}

function Power(a, b) {
  let sqResult = a ** b;
  if (Number.isInteger(sqResult)) {
    return sqResult.toFixed(0);
  } else {
    return sqResult.toFixed(5);
  }
}

function squareRoot(a) {
  let sqResult = Math.sqrt(a);
  if (Number.isInteger(sqResult)) {
    return sqResult.toFixed(0);
  } else {
    return sqResult.toFixed(5);
  }
}

function cubeRoot(a) {
  let sqResult = Math.cbrt(a);
  if (Number.isInteger(sqResult)) {
    return cbResult.toFixed(0);
  } else {
    return sqResult.toFixed(5);
  }
}

function log(a) {
  let lgResult = Math.log10(a);
  if (Number.isInteger(lgResult)) {
    return lgResult.toFixed(0);
  } else {
    return lgResult.toFixed(5);
  }
}

//Szinusz, koszinusz, tangens kiszámítása "Arrow function" alkalmazásával
let Sin = (a) => Math.sin((a * Math.PI) / 180);

let Cos = (a) => Math.cos((a * Math.PI) / 180);

let Tan = (a) => Math.tan((a * Math.PI) / 180);

function Calc() {
  if (sciBox.checked == true) {
    calcSci();
  } else if (NumBox.checked == true) {
    Convert();
  } else {
    calcNum();
  }
}

function disBInput() {
  let sciVal = document.getElementById("sciOps").value;
  if (sciVal >= 2 && sciVal <= 7) {
    inputB.disabled = "true";
    inputB.value = "";
  } else {
    inputB.removeAttribute("disabled");
  }
}

function disaBInput() {
  let sciNum = document.getElementById("selNum").value;
  if (sciNum >= 0) {
    inputB.disabled = "true";
    inputB.value = "";
  } else {
    inputB.removeAttribute("disabled");
  }
}

function Convert(dec, nsys) {
  debugger;
  dec = inputA.value;
  let listNumOps = parseInt(document.getElementById("selNum").value);
  if (inputA.value == "") {
    errorMessage.innerHTML = "Nem adtál meg értéket!";
    output.innerHTML = "0";
  } else {
    output.innerHTML = ""; // Itt állítjuk üresre az output értékét

    errorMessage.innerHTML = "";
    switch (listNumOps) {
      case 0:
        nsys = "2";
        break;
      case 1:
        nsys = "10";
        break;
      case 2:
        nsys = "16";
        break;
    }

    let arr = [];
    let num, temp;

    while (dec > 0) {
      num = parseInt(dec / nsys);
      temp = dec % nsys;

      if (temp > 9) {
        temp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"][
          temp - 10
        ];
      }

      arr.push(temp);
      dec = num;
    }

    // Megfordítjuk a tömböt, és összefűzzük a stringet
    let arrev = arr.reverse();
    let result = "";
    for (let i = 0; i < arrev.length; i++) {
      result += arrev[i];
    }
    output.innerHTML = result;
  }
}
