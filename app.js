console.log(data);
var index = 0;
    answers = [];
    dropdownVisible = false;
    firstLoad = true;
    fromProgress = false;

function init(){
  insertQuestion(data, index);
  insertAnswer(index);
  for (var i = 0; i < data.length; i++) {
    questNumber = i + 1;
    tpl = '<p id="' + questNumber + '" onclick="selectFromProgress(id)">Pregunta ' + questNumber + "</p>";
    document.getElementById("dropdownContent").insertAdjacentHTML('beforeend', tpl);
  }
  firstLoad = false;
}

function saveAnswer(answer) {
  console.log(answer);
  var questNumber = index + 1;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].questNumber === questNumber) {
      answers[i].answer = answer;
      console.log(answers);
      return answers;
    }
  }
  answers.push({
    questNumber: questNumber,
    answer: answer
  })
  console.log(answers);
  return answers;
}

function selectFromProgress(questNumber) {
  fromProgress = true;
  questNumber = parseInt(questNumber);
  index = questNumber - 1;
  document.getElementById('dynamicData').innerHTML = '';
  insertQuestion(data, index);
  insertAnswer(index);
  if (index === data.length - 1) {
    document.getElementById("next").innerHTML = 'Terminar y salir <i class="fas fa-door-open"></i>';
  } else {
    document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
  }
}

function insertAnswer(index) {
  var type = data[index][index + 1].answerType,
      elementLocation = document.getElementById("dynamicData"),
      answer,
      numberAnswers,
      possAnswer,
      value,
      units,
      attachments,
      markedAnswer,
      indexInAnswers;
  if ( answers.find(pos => pos.questNumber === index + 1) ) {
    indexInAnswers = answers.findIndex(pos => pos.questNumber === index + 1)
    markedAnswer = answers[indexInAnswers].answer;
  }
  switch (type) {
    case "OPEN":
      units = data[index][index + 1].units;
      answer = '<p class="top"><input type="text" id="answerInput" name="selected" class="input-box primary-font" '
                + 'onKeypress="if(event.keyCode == 13) event.returnValue = false" onKeyup="saveAnswer(this.value)"> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "NUMBER":
      answer = '<input type="number" id="answerInput" name="selected" class="input-box top primary-font" '
                + 'onKeypress="if(event.keyCode == 13) event.returnValue = false" onKeyup="saveAnswer(this.value)" onchange="saveAnswer(this.value)" min="0" max="20"> ';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "MULTI":
      numberAnswers = data[index][index + 1].numberAnswers;
      for (var i = 0; i < numberAnswers; i++) {
        possAnswer = data[index][index + 1].possibleAnswers[i];
        answer = '<p><input type="radio" name="selected" id=possibleAnswer' + i + ' value=possibleAnswer' + i + ' onchange="saveAnswer(this.value)">  ' + possAnswer + '</p>';
        if (numberAnswers < 4) {
          answer += '<br>';
        }
        elementLocation.insertAdjacentHTML('beforeend', answer);
      }
      if (markedAnswer) {
        document.getElementById(markedAnswer).checked = true;
      }
      numberAnswers = null;
      possAnswer = null;
      break;
    case "MULTI_BUTTONS":
        attachments = [];
        answer = '';
        if ( data[index][index + 1].attachments.length ) {
          for (var i = 0; i < data[index][index + 1].attachments.length; i++) {
            attachments.push(data[index][index + 1].attachments[i]);
            btnId = 'multiBtn' + i;
            answer += '<button type="button" id="' + btnId + '" class="multi-button answer_btn primary-font left transition-button" onclick="btnClicked(id, id)">'
                      + attachments[i] + '</button>';
          }
          elementLocation.insertAdjacentHTML('beforeend', answer);
          if (markedAnswer) {
            document.getElementById(markedAnswer).classList.add("btn_clicked");
          }
        }
      break;
    case "OPEN_LONG":
      units = data[index][index + 1].units;
      answer = '<p><input type="text" name="selected" style="font-size:1.2vw;width:30vw"> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "BINARY":
      a1 = data[index][index + 1].possibleAnswers[0];
      a2 = data[index][index + 1].possibleAnswers[1];
      answer = '<button type="button" id="btn1" class="answer_btn primary-font transition-button" onclick="btnClicked(data[index][index + 1].possibleAnswers[0], id)">'
                + a1 + '</button>'
                + '<button type="button" id="btn2" class="answer_btn primary-font transition-button" onclick="btnClicked(data[index][index + 1].possibleAnswers[1], id)">'
                + a2 + '</button>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer && markedAnswer === a1) {
        document.getElementById("btn1").classList.add("btn_clicked");
      } else if (markedAnswer && markedAnswer === a2) {
        document.getElementById("btn2").classList.add("btn_clicked");
      }
      break;
    default:
      alert("Ups! Ha habido algún error");
  }
  fromProgress = false;
}

function btnClicked(value, id) {
  console.log(value);
  var elements = document.getElementsByClassName("answer_btn"), i = 0;
  console.log(elements);
  for (i; i < elements.length; i++) {
    elements[i].classList.remove("btn_clicked");
  }
  document.getElementById(id).classList.add("btn_clicked");
  saveAnswer(value);
}

function progressDropDown() {
  if ( dropdownVisible ) {
    document.getElementById("contentContainer").classList.remove("show");
    //document.getElementById("dropdownContent").classList.remove("show");
    dropdownVisible = false;
  } else {
    document.getElementById("contentContainer").classList.add("show");
    //document.getElementById("dropdownContent").classList.add("show");
    dropdownVisible = true;
  }
  markedAsAnswered();
}

function markedAsAnswered() {
  for (var i = 0; i < answers.length; i++) {
    id = answers[i].questNumber;
    document.getElementById(id.toString()).classList.add("answered");
  }
}

window.onclick = function(event) {
  // console.log(event);
  // console.log(event.srcElement);
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

function showAlert() {
  return confirm("¿Seguro que quieres terminar y ver tu resultado?");
}

function getNext(){
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
    if (index === data.length - 1) {
      document.getElementById("next").innerHTML = 'Terminar y salir <i class="fas fa-door-open"></i>';
    }
    insertQuestion(data, index);
    insertAnswer(index);
  } else {
    finish = showAlert();
    finish ? console.log("finish") : null;
    //checkAnswers();
  }
}

function getPrevious() {
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
  if (document.getElementsByTagName('I')[2].className === "fas fa-door-open") {
    document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
  }
}
