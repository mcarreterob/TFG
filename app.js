console.log(data);
var index = 0;
var answers = {};
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
      answer = '<p><input type="radio" name="selected" value="Verdadero">  Verdadero</p>'
                + '<br><p><input type="radio" name="selected" value="Falso">  Falso</p>';
      elementLocation.insertAdjacentHTML('afterbegin', answer);
      break;
    case "OPEN":
      answer = '<p><input type="text" name="selected" style="font-size:1.2vw;width:2vw"> dB</p>';
      elementLocation.insertAdjacentHTML('afterbegin', answer);
      break;
    case "MULTI":
      numberAnswers = data[index][index + 1].numberAnswers;
      for (var i = 0; i < numberAnswers; i++) {
        possAnswer = data[index][index + 1].possibleAnswers[i];
        answer = '<p><input type="radio" name="selected" value=' + possAnswer + '>  ' + possAnswer + '</p>';
        elementLocation.insertAdjacentHTML('afterbegin', answer);
      }
      numberAnswers = null;
      possAnswer = null;
      break;
    default:
      alert("Ups! Ha habido algún error");
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
        var porElementos=document.forms["form1"].elements.selected.value;
        console.log(document.forms["form1"].elements.selected.value);
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
        var porElementos=document.forms["form1"].elements.selected.value;
        console.log(document.forms["form1"].elements.selected.value);
        document.getElementById('dynamicData').innerHTML = '';
        index --;
        insertQuestion(data, index);
        insertAnswer(index);
      }
      if (document.getElementsByTagName('I')[1].className === "fas fa-door-open") {
        document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
      }
    }
