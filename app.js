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

function capturar()
    {
        // obtenemos e valor por el numero de elemento
        var porElementos=document.forms["form1"].elements.selected.value;
        console.log(document.forms["form1"].elements.selected.value);
        // Obtenemos el valor por el id
        // var porId=document.getElementById("nombre").value;
        // // Obtenemos el valor por el Nombre
        // var porNombre=document.getElementsByName("nombre")[0].value;
        // // Obtenemos el valor por el tipo de tag
        // var porTagName=document.getElementsByTagName("input")[0].value;
        // Obtenemos el valor por el nombre de la clase
        //var porClassName=document.getElementsByClassName("formulario")[0].value;

        document.getElementById("resultado").innerHTML=" \
            Por elementos: "+porElementos;
    }
