// console.log(data);
var index = 0,
    answers = [],
    dropdownVisible = false,
    firstLoad = true,
    fromProgress = false,
    end = false,
    coordInputs = 2,
    sourcePositionInputs = 2,
    sceneData = [],
    checkedPosition = false,
    currentSourcePosition = 1,
    randomQuestions = [],
    numbers = [];

function init(){
  getRandomQuestions();
  insertQuestion(randomQuestions, index);
  insertAnswer(index);
  var questNumber;
  for (var i = 0; i < randomQuestions.length; i++) {
    questNumber = i + 1;
    tpl = '<p id="' + questNumber + '" onclick="selectFromProgress(id)">Pregunta ' + questNumber + "</p>";
    document.getElementById("dropdownContent").insertAdjacentHTML('beforeend', tpl);
  }
  firstLoad = false;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomQuestions() {
  // var numbers = []
  var maxRetries = 6
  // BINARY
  for (var i = 0; i < 6; i++) {
    var randInt = getRandomInt(0, 11)
    if (numbers.findIndex(number => number === randInt) !== -1) {
      for (var j = 0; j < maxRetries; j++) {
        randInt = getRandomInt(0, 11)
        if (numbers.findIndex(number => number === randInt) === -1) {
          break
        }
      }
    }
    numbers.push(randInt)
    randomQuestions.push(binary[randInt])
  }
  // OPEN
  for (var i = 0; i < 1; i++) {
    var randInt = getRandomInt(0, 1)
    if (numbers.findIndex(number => number === randInt) !== -1) {
      for (var j = 0; j < maxRetries; j++) {
        randInt = getRandomInt(0, 1)
        if (numbers.findIndex(number => number === randInt) === -1) {
          break
        }
      }
    }
    numbers.push(randInt)
    randomQuestions.push(open[randInt])
  }
  // MULTI
  for (var i = 0; i < 1; i++) {
    var randInt = getRandomInt(0, 1)
    if (numbers.findIndex(number => number === randInt) !== -1) {
      for (var j = 0; j < maxRetries; j++) {
        randInt = getRandomInt(0, 1)
        if (numbers.findIndex(number => number === randInt) === -1) {
          break
        }
      }
    }
    numbers.push(randInt)
    randomQuestions.push(multi[randInt])
  }
  // MULTI_BUTTONS
  for (var i = 0; i < 1; i++) {
    var randInt = getRandomInt(0, 1)
    if (numbers.findIndex(number => number === randInt) !== -1) {
      for (var j = 0; j < maxRetries; j++) {
        randInt = getRandomInt(0, 1)
        if (numbers.findIndex(number => number === randInt) === -1) {
          break
        }
      }
    }
    numbers.push(randInt)
    randomQuestions.push(multiButtons[randInt])
  }
  randomQuestions.push(number[0])
  console.log(randomQuestions);
}

function saveAnswer(answer) {
  //console.log(answer);
  var questNumber = index + 1;
  for (var i = 0; i < answers.length; i++) {
    if (answers[i].questNumber === questNumber) {
      answers[i].answer = answer;
      //console.log(answers);
      return answers;
    }
  }
  answers.push({
    questNumber: questNumber,
    answer: answer
  })
  //console.log(answers);
  return answers;
}

function selectFromProgress(questNumber) {
  fromProgress = true;
  questNumber = parseInt(questNumber);
  index = questNumber - 1;
  document.getElementById('dynamicData').innerHTML = '';
  insertQuestion(randomQuestions, index);
  //insertQuestion(data, index);
  insertAnswer(index);
  if (index === randomQuestions.length - 1) {
  //if (index === data.length - 1) {
    document.getElementById("next").innerHTML = 'Terminar y salir <i class="fas fa-door-open"></i>';
  } else {
    document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
  }
}

function insertAnswer(index) {
  var type = randomQuestions[index]/*[index + 1]*/.answerType,
  //var type = data[index]/*[index + 1]*/.answerType,
      elementLocation = document.getElementById("dynamicData"),
      answer,
      numberAnswers,
      possAnswer,
      value,
      units,
      attachments,
      markedAnswer,
      indexInAnswers;
      elementDisabled = end ? "disabled" : "";
  if ( answers.find(pos => pos.questNumber === index + 1) ) {
    indexInAnswers = answers.findIndex(pos => pos.questNumber === index + 1)
    markedAnswer = answers[indexInAnswers].answer;
  }
  switch (type) {
    case "OPEN":
      //units = data[index]/*[index + 1]*/.units;
      units = randomQuestions[index]/*[index + 1]*/.units;
      answer = '<p class="top"><input type="text" id="answerInput" name="selected" class="input-box primary-font medium-font-size" '
                + 'onKeypress="if(event.keyCode == 13) event.returnValue = false" onKeyup="saveAnswer(this.value)" ' + elementDisabled
                + '> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "NUMBER":
      answer = '<input type="number" id="answerInput" name="selected" class="input-box top primary-font medium-font-size" '
                + 'onKeypress="if(event.keyCode == 13) event.returnValue = false" onKeyup="saveAnswer(this.value)"'
                + ' onchange="saveAnswer(this.value)" min="0" max="20" ' + elementDisabled + '> ';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "MULTI":
      numberAnswers = randomQuestions[index]/*[index + 1]*/.numberAnswers;
      numberAnswers = randomQuestions[index]/*[index + 1]*/.numberAnswers;
      for (var i = 0; i < numberAnswers; i++) {
        possAnswer = randomQuestions[index]/*[index + 1]*/.possibleAnswers[i];
        //possAnswer = data[index]/*[index + 1]*/.possibleAnswers[i];
        answer = '<p><input type="radio" name="selected" id=possibleAnswer' + i + ' value=possibleAnswer'
                  + i + ' onchange="saveAnswer(this.value)" ' + elementDisabled + '>  ' + possAnswer + '</p>';
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
        //if ( data[index]/*[index + 1]*/.attachments.length ) {
        if ( randomQuestions[index]/*[index + 1]*/.attachments.length ) {
          for (var i = 0; i < randomQuestions[index]/*[index + 1]*/.attachments.length; i++) {
          //for (var i = 0; i < data[index]/*[index + 1]*/.attachments.length; i++) {
            attachments.push(randomQuestions[index]/*[index + 1]*/.attachments[i]);
          //  attachments.push(data[index]/*[index + 1]*/.attachments[i]);
            btnId = 'multiBtn' + i;
            answer += '<button type="button" id="' + btnId + '" class="multi-button answer_btn big-font-size primary-font left transition-button"'
                      + ' onclick="btnClicked(id, id)" ' + elementDisabled + '>'
                      + attachments[i] + '</button>';
          }
          elementLocation.insertAdjacentHTML('beforeend', answer);
          if (markedAnswer) {
            document.getElementById(markedAnswer).classList.add("btn_clicked");
          }
        }
      break;
    case "OPEN_LONG":
      //units = data[index]/*[index + 1]*/.units;
      units = randomQuestions[index]/*[index + 1]*/.units;
      answer = '<p><input type="text" name="selected" style="font-size:1.2vw;width:30vw" ' + elementDisabled + '> ' + units + '</p>';
      elementLocation.insertAdjacentHTML('beforeend', answer);
      if (markedAnswer) {
        document.getElementById('answerInput').value = markedAnswer;
      }
      break;
    case "BINARY":
      a1 = randomQuestions[index]/*[index + 1]*/.possibleAnswers[0];
      //a1 = data[index]/*[index + 1]*/.possibleAnswers[0];
      a2 = randomQuestions[index]/*[index + 1]*/.possibleAnswers[1];
      //a2 = data[index]/*[index + 1]*/.possibleAnswers[1];
      style = randomQuestions[index].move ? 'style="top:35vh"' : null;
      //style = data[index][index + 1].move ? 'style="top:35vh"' : null;
      answer = '<button ' + style + ' type="button" id="btn1" class="answer_btn big-font-size primary-font transition-button"'
                //+ ' onclick="btnClicked(data[index][index + 1].possibleAnswers[0], id)" ' + elementDisabled + '>'
                + ' onclick="btnClicked(randomQuestions[index].possibleAnswers[0], id)" ' + elementDisabled + '>'
                + a1 + '</button>'
                + '<button ' + style + ' type="button" id="btn2" class="answer_btn big-font-size primary-font transition-button"'
                + ' onclick="btnClicked(randomQuestions[index].possibleAnswers[1], id)" ' + elementDisabled + '>'
                //+ ' onclick="btnClicked(data[index][index + 1].possibleAnswers[1], id)" ' + elementDisabled + '>'
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
  var elements = document.getElementsByClassName("answer_btn"), i = 0;
  for (i; i < elements.length; i++) {
    elements[i].classList.remove("btn_clicked");
  }
  document.getElementById(id).classList.add("btn_clicked");
  saveAnswer(value);
}

function progressDropDown() {
  if ( dropdownVisible ) {
    document.getElementById("dropdownContent").classList.remove("show");
    //document.getElementById("dropdownContent").classList.remove("show");
    dropdownVisible = false;
  } else {
    document.getElementById("dropdownContent").classList.add("show");
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
  if (event.target == document.getElementById("myModal")) {
    closeModal();
  }
}

function insertQuestion(data, index) {
  // console.log(data);
  // console.log(index);
  // console.log(data[index]);
  // console.log(data[index].question);
  // console.log(numbers);
  // console.log(numbers[index]);
  document.getElementById("question").innerHTML = index + 1 + ". ";
  //document.getElementById("question").innerHTML += data[index][index + 1].question;
  document.getElementById("question").innerHTML += data[index].question;
}

function showAlert() {
  return confirm("¿Seguro que quieres terminar y ver tu resultado?.");
}

function getNext(){
  if(index < randomQuestions.length - 1) {
  //if(index < data.length - 1) {
    document.getElementById('dynamicData').innerHTML = '';
    index ++;
    if (index === randomQuestions.length - 1) {
    //if (index === data.length - 1) {
      document.getElementById("next").innerHTML = 'Terminar y evaluar respuestas';
    }
    insertQuestion(randomQuestions, index);
    //insertQuestion(data, index);
    insertAnswer(index);
  } else if (!end) {
    finish = showAlert() ? checkAnswers() : null;
  } else {
    document.location.href = document.location.origin + "/preScene.html"
  }
}

function checkAnswers() {
  var i = j = 0, questNumber, rightAnswers = [], limit = Math.round(randomQuestions.length * 0.8), passed = false;;
  //var i = j = 0, questNumber, rightAnswers = [], limit = Math.round(data.length * 0.8), passed = false;;
  for (i; i < answers.length; i++) {
    questNumber = answers[i].questNumber;
    if (answers[i].answer === randomQuestions[questNumber - 1].correctAnswer) {
    //if (answers[i].answer === data[questNumber - 1][questNumber].correctAnswer) {
      rightAnswers.push({
        questNumber: answers[i].questNumber,
        isRight: true
      })
      document.getElementById(questNumber.toString()).classList.add("answered-right");
    } else {
      document.getElementById(questNumber.toString()).classList.add("answered-wrong");
    }
  }
  generateModalContent(rightAnswers);
  console.log(rightAnswers);
  showModal();
  document.getElementById("next").innerHTML = 'Pasar al caso práctico <i class="fas fa-door-open"></i>';
  end = true;
}

function generateModalContent(rightAnswers) {
  var passed = false, limit = Math.round(randomQuestions.length * 0.8);
  //var passed = false, limit = Math.round(data.length * 0.8);
  document.getElementById("modalResult").innerText= rightAnswers.length + '/' + randomQuestions.length;
  //document.getElementById("modalResult").innerText= rightAnswers.length + '/' + data.length;
  passed = rightAnswers.length < limit ? false : true;
  if ( passed ) {
    document.getElementById("modalResult").classList.add("passed-color");
    document.getElementById("passed").style.display = "block";
  } else {
    document.getElementById("modalResult").classList.add("failed-color");
    document.getElementById("failed").style.display = "block";
  }
}

function showModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
  document.getElementById('dynamicData').innerHTML = '';
  insertAnswer(index);
}

function closeSceneResultsModal() {
  document.getElementById("myModal").style.display = "none";
}

function getPrevious() {
  if(index > 0) {
    document.getElementById('dynamicData').innerHTML = '';
    index --;
    insertQuestion(randomQuestions, index);
    //insertQuestion(data, index);
    insertAnswer(index);
  }
  if (document.getElementsByTagName('I')[2].className === "fas fa-door-open") {
    document.getElementById("next").innerHTML = '<i class="fa fa-chevron-right">';
  }
}


function showScene() {
  if (document.getElementById("scene-modal").style.display === "block") {
  document.getElementById("scene-modal").style.display = "none";
  } else {
  document.getElementById("scene-modal").style.display = "block";
  }
}

function addNewElement(value) {
  var tpl
  if (value) {
    tpl = '<div class="microphone-input" id="microphone-input">'
            + ' Coordenada X <input type="number" id="mic' + coordInputs + '" value="' + value[0] + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="-300" max="300" value="0" onkeyup="enforceMinMax(this)">'
            + ' Coordenada Y <input type="number" id="mic' + coordInputs + '" value="' + value[1] + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="-200" max="200" value="0" onkeyup="enforceMinMax(this)">'
            + ' Altura <input type="number" id="mic' + coordInputs + '" value="' + value[2] + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="0" max="300" value="0" onkeyup="enforceMinMax(this)">'
            + ' <button type="button" id="mic' + coordInputs + '" class="primary-font medium-font-size add-element-button"'
            + ' onclick="getElementPosition(this.id, \'MIC\', \'sourcePosition1\')"> Añadir </button>'
            + ' <button type="button" id="mic' + coordInputs + '" class="primary-font medium-font-size remove-element-button"'
            + ' onclick="deleteMesh(this.id)"><i class="fa fa-trash"></i></button>'
            + '</div>'
  } else {
    tpl = '<div class="microphone-input" id="microphone-input">'
            + ' Coordenada X <input type="number" id="mic' + coordInputs + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="-300" max="300" value="0" onkeyup="enforceMinMax(this)">'
            + ' Coordenada Y <input type="number" id="mic' + coordInputs + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="-200" max="200" value="0" onkeyup="enforceMinMax(this)">'
            + ' Altura <input type="number" id="mic' + coordInputs + '" name="mic' + coordInputs + '" class="primary-font medium-font-size coords" min="0" max="300" value="0" onkeyup="enforceMinMax(this)">'
            + ' <button type="button" id="mic' + coordInputs + '" class="primary-font medium-font-size add-element-button"'
            + ' onclick="getElementPosition(this.id, \'MIC\', \'sourcePosition1\')"> Añadir </button>'
            + ' <button type="button" id="mic' + coordInputs + '" class="primary-font medium-font-size remove-element-button"'
            + ' onclick="deleteMesh(this.id)"><i class="fa fa-trash"></i></button>'
            + '</div>'
  }

  document.getElementById("addMore").insertAdjacentHTML('beforebegin', tpl);
  coordInputs += 1;
}

function getElementPosition(name, type, sourcePosition, reload) {
  var position = [],
      inputsData;
  if (name) {
    inputsData = document.getElementsByName(name);
    //console.log('inputsData', inputsData);
    for (var i = 0; i < inputsData.length; i++) {
      position.push(parseInt(inputsData[i].value))
    }
  }
  //console.log('type', type,'name', name, 'position', position);
  storeSceneData(type, name, position, sourcePosition, reload)
  addNewMesh(type, name, position);
}

function storeSceneData(type, elementName, position, sourcePosition, reloadInputs) {
  var isAdded = checkIfElementIsAdded(elementName)
  if (!isAdded) {
    if (type === 'SOURCE') {
      sceneData.source = position
    } else {
      if (!sceneData.mics) {
        sceneData.mics = [position]
      } else {
        if (!reloadInputs) {
          sceneData.mics.push(position)
        }
      }
    }
  } else {
    if (type === 'SOURCE') {
      sceneData.source = position
    } else {
      var micNumber = elementName.split('c')[1]
      sceneData.mics[micNumber - 1] = position
    }
  }
  console.log('storeSceneData', sceneData);
}

function loadPositionInputs(sourcePosition) {
  coordInputs = 2;
  // if (sceneData[sourcePosition]) {
  //   console.log('THERE IS INFO ABOUT ', sourcePosition, sceneData[sourcePosition]);
  //   // console.log('cantidad de mics', sceneData[sourcePosition].mics.length);
  //   emptyPositionInputs()
  //   // emptyScene(sourcePosition)
  //   getPositionInputsData(sourcePosition, true)
  // } else {
    emptyScene(sourcePosition)
    console.log('THERE IS NO INFO ABOUT ', sourcePosition);
    resetPositionInputs(sourcePosition)
  // }
  console.log('loadPositionInputs sceneData', sceneData);
}

function getPositionInputsData(sourcePosition) {
  // console.log('SP', sourcePosition);
  var sourcePositionValues = []
  if (sceneData[sourcePosition]) {
    sourcePositionValues = sceneData[sourcePosition].source
  }
  // console.log('sourcePositionValues', sourcePositionValues);
  var tpl = '<div class="scene-inputs" id="scene-inputs"><div>Posición de la fuente</div>'
  + '<div class="source-input">'
  + '   Coordenada X <input type="number" id="source1" value="' + sourcePositionValues[0] + '" name="source1" class="primary-font medium-font-size coords" min="-300" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '   Coordenada Y <input type="number" id="source1" value="' + sourcePositionValues[1] + '" name="source1" class="primary-font medium-font-size coords" min="-200" max="200" value="0" onkeyup="enforceMinMax(this)">'
  + '   Altura <input type="number" id="source1" value="' + sourcePositionValues[2] + '" name="source1" class="primary-font medium-font-size coords" min="0" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '   <button type="button" id="source1" class="primary-font medium-font-size add-element-button" onclick="getElementPosition(this.id, \'SOURCE\', \'' + sourcePosition + '\')"> Añadir </button>'
  + '   <button type="button" class="primary-font medium-font-size remove-element-button" onclick="deleteMesh(\'source1\')"><i class="fa fa-trash"></i></button>'
  + ' </div><div class="mic-position-title">Posiciones de micrófono</div>'
  + ' <button type="button" id="addMore" class="primary-font medium-font-size add-more-button" onclick="addNewElement()"><i class="fa fa-plus"></i></button>'
  + '<button type="button" id="save" class="primary-font medium-font-size add-more-button save-button" onclick="saveAndCheckPositions()"><i class="far fa-save"></i></button>'
  document.getElementById('scene-inputs-container').insertAdjacentHTML('afterbegin', tpl)
  var micsLength = sceneData[sourcePosition].mics.length
  //console.log('sourcePosition', sceneData[sourcePosition], 'micsLength', micsLength);
  for (var i = 0; i < micsLength; i++) {
    addNewElement(sceneData[sourcePosition].mics[i], sourcePosition) // CREO QUE AÑADE COSAS QUE NO DEBE, REVISAR
    getElementPosition('mic' + (i + 1), 'MIC', sourcePosition)
  }
  //console.log('el que acabo de ponerrrrrrr', sceneData[sourcePosition].mics);
  getElementPosition('source1', 'SOURCE', sourcePosition)
}

function emptyPositionInputs() {
  const inputContainer = document.getElementById('scene-inputs')
  inputContainer.remove()
}

function resetPositionInputs(sourcePosition) {
  const tpl = '<div class="scene-inputs" id="scene-inputs"><div>Posición de la fuente</div>'
  + '<div class="source-input">'
  + '   Coordenada X <input type="number" id="source1" name="source1" class="primary-font medium-font-size coords" min="-300" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '   Coordenada Y <input type="number" id="source1" name="source1" class="primary-font medium-font-size coords" min="-200" max="200" value="0" onkeyup="enforceMinMax(this)">'
  + '   Altura <input type="number" id="source1" name="source1" class="primary-font medium-font-size coords" min="0" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '   <button type="button" id="source1" class="primary-font medium-font-size add-element-button" onclick="getElementPosition(this.id, \'SOURCE\', \'' + sourcePosition + '\')"> Añadir </button>'
  + '   <button type="button" class="primary-font medium-font-size remove-element-button" onclick="deleteMesh(\'source1\')"><i class="fa fa-trash"></i></button>'
  + ' </div><div class="mic-position-title">Posiciones de micrófono</div>'
  + ' <div class="microphone-input" id="microphone-input">'
  + '     Coordenada X <input type="number" id="mic1" name="mic1" class="primary-font medium-font-size coords" min="-300" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '     Coordenada Y <input type="number" id="elem1" name="mic1" class="primary-font medium-font-size coords" min="-200" max="200" value="0" onkeyup="enforceMinMax(this)">'
  + '     Altura <input type="number" id="mic1" name="mic1" class="primary-font medium-font-size coords" min="0" max="300" value="0" onkeyup="enforceMinMax(this)">'
  + '     <button type="button" id="mic1" class="primary-font medium-font-size add-element-button" onclick="getElementPosition(this.id, \'MIC\', \'' + sourcePosition + '\')"> Añadir </button>'
  + '     <button type="button" id="mic1" class="primary-font medium-font-size remove-element-button" onclick="deleteMesh(this.id)"><i class="fa fa-trash"></i></button>'
  + ' </div>'
  + ' <button type="button" id="addMore" class="primary-font medium-font-size add-more-button" onclick="addNewElement()"><i class="fa fa-plus"></i></button>'
  + '<button type="button" id="save" class="primary-font medium-font-size add-more-button save-button" onclick="saveAndCheckPositions()"><i class="far fa-save"></i></button>'
  + '</div>'
  emptyPositionInputs()
  document.getElementById('scene-inputs-container').insertAdjacentHTML('afterbegin', tpl)
}

function addNewSourcePosition() {
  //console.log('addNewSourcePosition log');
  if (checkedPosition) {
    checkedPosition = false
    document.getElementById("failed").style.display = "none";
    document.getElementById("failReasons").style.display = "none";
    document.getElementById("passed").style.display = "none";
    var tpl = '<div class="source-position-input">'
            + '<button type="button" id="sourcePosition' + sourcePositionInputs + '" class="source-position-button primary-font medium-font-size" onclick="loadPositionInputs(this.id)">Posición de fuente ' + sourcePositionInputs + '</button>'
            + '</div>'
    document.getElementById("addMoreSource").insertAdjacentHTML('beforebegin', tpl);
    loadPositionInputs('sourcePosition' + sourcePositionInputs)
    sourcePositionInputs += 1;
  } else {
    alert("Para añadir una posición nueva, primero debes guardar los datos de la posición en la que te encuentras. Ten en cuenta que, al hacerlo, se evaluarán y no podrás volver a modificarlos.")
  }
}

function getDistance(coord1, coord2) {
  return (Math.sqrt((coord2[0] - coord1[0]) ** 2 + (coord2[1] - coord1[1]) ** 2 + (coord2[2] - coord1[2]) ** 2)).toFixed(2)
}

function saveAlert() {
  return confirm("¿Estás seguro de que quieres terminar esta posición? Si confirmas, serán evaluados los datos introducidos y no podrán volver a ser modificados.")
}

function distancesFromTheLimitsAreOk(coords) {
  console.log(coords);
  if ((coords[0] < -250 || coords[0] > 250) || (coords[1] < -150 || coords[1] > 150)
      || (coords[2] < 50 || coords[2] > 200) ) {
        return false
  } else {
    return true
  }
}

function saveAndCheckPositions() {
  var badPositioning = false
  if (saveAlert()) {
    checkedPosition = true
    if (!sceneData.source || !sceneData.mics) {
      document.getElementById("failed").style.display = "block";
      document.getElementById("failReasons").style.display = "block";
    } else {
      if (sceneData.mics.length >= 2) {
        for (var i = 0; i < sceneData.mics.length; i++) {
          if (!distancesFromTheLimitsAreOk(sceneData.mics[i])) {
                console.log('badPositioning: too close to the limits');
                badPositioning = true
          }
          if (!badPositioning) {
            if (getDistance(sceneData.mics[i], sceneData.source) < 100) {
              console.log('badPositioning: too close to the source');
              badPositioning = true
            }
            for (var j = 0; j < sceneData.mics.length; j++) {
              if (i !== j) {
                if (getDistance(sceneData.mics[i], sceneData.mics[j]) < 70) {
                  console.log('badPositioning: too close to other mic position');
                  badPositioning = true
                }
              }
            }
          }
        }
      } else {
        console.log('badPositioning: not enough');
        badPositioning = true
      }
      console.log('badPositioning', badPositioning);
      if (!distancesFromTheLimitsAreOk(sceneData.source) || badPositioning) {
        document.getElementById("failed").style.display = "block";
        document.getElementById("failReasons").style.display = "block";
        console.log("Alguno(s) de los elementos que has situado no estaban a la distancia correcta de los límites del recinto");
      } else {
        document.getElementById("passed").style.display = "block";
      }
    }
    var inputs = document.getElementsByTagName('input')
    for (var j = 0; j < inputs.length; j++) {
      inputs[j].disabled = true
    }
    showModal()
    // document.getElementById('sourcePosition' + currentSourcePosition).disabled = true
    // const elementsAdded = document.getElementsByClassName('add-element-button')
    // for (var i = 0; i < elementsAdded.length; i++) {
    //   elementsAdded[i].disabled = true
    //   document.getElementsByClassName('remove-element-button')[i].disabled = true
    // }
    // document.getElementsByClassName('remove-element-button')[0].disabled = true
    // document.getElementById('addMore').disabled = true
    // document.getElementById('save').disabled = true
    disableSceneInputs()
    sceneData = []
    currentSourcePosition ++
  } else {
    null
  }
}

function disableSceneInputs() {
  document.getElementById('sourcePosition' + currentSourcePosition).disabled = true
  const elementsAdded = document.getElementsByClassName('add-element-button')
  for (var i = 0; i < elementsAdded.length; i++) {
    elementsAdded[i].disabled = true
    document.getElementsByClassName('remove-element-button')[i].disabled = true
  }
  document.getElementsByClassName('remove-element-button')[0].disabled = true
  document.getElementById('addMore').disabled = true
  document.getElementById('save').disabled = true
}

function endAlert() {
  confirm('¿Estás seguro que quieres terminar el caso práctico?')
}

function end() {
  if (checkedPosition) {
    if (endAlert()) {
      disableSceneInputs()
      /* MOSTRARÁ POPUP CON RESULTADOS FINALES GENERALES (?) */
    }
  } else {
    alert("Para terminar el caso práctico, primero debes guardar los datos de la posición en la que te encuentras. Ten en cuenta que, al hacerlo, se evaluarán y no podrás volver a modificarlos.")
  }
}

function enforceMinMax(input) {
  if(input.value != ""){
    if(parseInt(input.value) < parseInt(input.min)){
      input.value = input.min;
    }
    if(parseInt(input.value) > parseInt(input.max)){
      input.value = input.max;
    }
  }
}
