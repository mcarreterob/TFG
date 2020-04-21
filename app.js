console.log(data);
var index = 1;
function init(){
  document.getElementById("question").innerHTML = index + ". ";
  document.getElementById("question").innerHTML += data[index].question;
}

function insertAnswer(type) {
  if (type ==="TRUE_FALSE") {

  }
}

function insertQuestion(data, index) {
  document.getElementById("question").innerHTML = index + ". ";
  document.getElementById("question").innerHTML += data[index].question;
}
