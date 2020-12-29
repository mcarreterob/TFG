console.log(data);
var index = 0;
var answers = {};
var dropdownVisible = false;
function init(){
  insertQuestion(data, index);
  insertAnswer(index);
}

function insertAnswer(index) {
  var type = data[index][index + 1].answerType,
      elementLocation = document.getElementById("dynamicData"),
      answer,
      numberAnswers,
      possAnswer,
      value;
  switch (type) {
    case "TRUE_FALSE":
      answer = '<p style="position:relative;top:1vw"><input type="radio" name="selected" value="Verdadero">  Verdadero</p>'
                + '<br><p><input type="radio" name="selected" value="Falso">  Falso</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      break;
    case "OPEN":
      units = data[index][index + 1].units;
      answer = '<p style="position:relative;top:4vw"><input type="text" name="selected" style="font-size:1.2vw;width:15vw"> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      break;
    case "MULTI":
      numberAnswers = data[index][index + 1].numberAnswers;
      for (var i = 0; i < numberAnswers; i++) {
        possAnswer = data[index][index + 1].possibleAnswers[i];
        answer = '<p><input type="radio" name="selected" value=' + possAnswer + '>  ' + possAnswer + '</p>';
        if (numberAnswers < 4) {
          answer += '<br>';
        }
        elementLocation.insertAdjacentHTML('beforeend', answer);
      }
      numberAnswers = null;
      possAnswer = null;
      break;
    case "OPEN_LONG":
      units = data[index][index + 1].units;
      answer = '<p style="position:relative;top:4vw"><input type="text" name="selected" style="font-size:1.2vw;width:30vw"> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      break;
    case "BINARY":
      a1 = data[index][index + 1].possibleAnswers[0];
      a2 = data[index][index + 1].possibleAnswers[1];
      answer = '<button type="button" id="btn1" class="answer_btn transition-button" onclick="btnClicked(data[index][index + 1].possibleAnswers[0], id)">' + a1 + '</button>' + '<button type="button" id="btn2" class="answer_btn transition-button" onclick="btnClicked(data[index][index + 1].possibleAnswers[1], id)">' + a2 + '</button>'
      elementLocation.insertAdjacentHTML('beforeend', answer);
      break;
    default:
      alert("Ups! Ha habido algún error");
  }
}

function btnClicked(value, id) {
  console.log(value);
  var elements = document.getElementsByClassName("answer_btn"), i = 0;
  for (i; i < elements.length; i++) {
    document.getElementsByClassName("answer_btn")[i].classList.remove("btn_clicked");
  }
  document.getElementById(id).classList.add("btn_clicked");
}

function progressDropDown() {
  console.log("LLL");
  if ( dropdownVisible ) {
      document.getElementById("dropdownContent").classList.remove("show");
      dropdownVisible = false;
  } else {
    document.getElementById("dropdownContent").classList.add("show");
    dropdownVisible = true;
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.progress-menu-container') && !event.target.matches('.fa.fa-chevron-down')) {
    var dropdowns = document.getElementsByClassName("progress-dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        dropdownVisible = false;
      }
    }
  }
}

function insertQuestion(data, index) {
  document.getElementById("question").innerHTML = index + 1 + ". ";
  document.getElementById("question").innerHTML += data[index][index + 1].question;
}

function getNext()
    {
          console.log(index);
      if(index < data.length - 1) {
        if ( document.forms["form1"].elements.selected ) {
          var porElementos=document.forms["form1"].elements.selected.value;
          console.log(document.forms["form1"].elements.selected.value);
        } else {
          var elemsLength = document.forms["form1"].elements.length;
          for (var i = 0; i < elemsLength; i++) {
            if (document.forms["form1"].elements[1].classList[1] === "btn_clicked") {
              console.log(document.forms["form1"].elements[1].innerText);
            } else{
              console.log(document.forms["form1"].elements[0].innerText);
            }
          }
          document.forms["form1"].elements[1].classList[1]
        }
        document.getElementById('dynamicData').innerHTML = '';
        index ++;
        insertQuestion(data, index);
        insertAnswer(index);
      } else {
        document.getElementById("next").innerHTML = 'Terminar y salir <i class="fas fa-door-open"></i>';
      }
    }

function getPrevious()
    {
      if(index > 0) {
        if ( document.forms["form1"].elements.selected ) {
          var porElementos=document.forms["form1"].elements.selected.value;
          console.log(document.forms["form1"].elements.selected.value);
        }
        document.getElementById('dynamicData').innerHTML = '';
        index --;
        insertQuestion(data, index);
        insertAnswer(index);
      }
      if (document.getElementsByTagName('I')[1].className === "fas fa-door-open") {
        document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
      }
    }
