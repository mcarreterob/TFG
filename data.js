var data = [
  {
    "1": {
      "question": "La máquina de impactos se puede utilizar para una variedad de impactos leves o fuertes,"
                  + " mientras que la pelota de caucho para impactos pesados y suaves",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Verdadero"
    }
  },
  {
    "2": {
      "question": "Según la norma, el tiempo de reverberación es el tiempo requerido por el nivel de presión"
                  + " acústica en un recinto para decrecer ciertos dB una vez haya cesado la fuente sonora."
                  + " ¿Cuántos decibelios tiene que decrecer?",
      "answerType": "OPEN",
      "units": "dB",
      "correctAnswer": 60
    }
  },
  {
    "3": {
      "question": "El nivel de ruido de fondo, ¿en qué recinto debe ser medido?",
      "answerType": "MULTI",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Receptor",
          "1": "Emisor"
      },
      "correctAnswer": "Receptor"
    }
  },
  {
    "4": {
      "question": "El área de absorción equivalente se puede calcular utilizando la fórmula del TR de Sabine"
                  + " (T = 0.161V/A) si y sólo si es el único elemento absorbente en el recinto.",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Verdadero"
    }
  },
  {
    "5": {
      "question": "Las mediciones que deben hacerse incluyen:",
      "answerType": "MULTI",
      "numberAnswers": 4,
      "possibleAnswers": {
          "0": "Los niveles de presión acútsica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "1": "Los niveles de presión acútsica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "2": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor.",
          "3": "Los niveles de presión acútsica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto receptor."
      },
      "correctAnswer": "Los niveles de presión acútsica en el recinto receptor con la fuente de impactos funcionando,"
                        + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                        + "apagada y los TR en el recinto receptor."
    }
  },
  {
    "6": {
      "question": "Si se requiere información adicional en el rango de frecuencias:",
      "answerType": "MULTI",
      "numberAnswers": 5,
      "possibleAnswers": {
          "0": "Se utilizarán los filtros de bandas de tercio de octaba con frecuencias centrales 50, 63, y 80 Hz para baja frecuencia.",
          "1": "Se utilizarán los filtros de bandas de tercio de octaba con frecuencias centrales 4000 y 5000 Hz para alta frecuencia.",
          "2": "Las dos anteriores son correctas, pero también habría que utilizar un filtro con fc = 125 Hz y otro con fc = 2000 Hz.",
          "3": "Las dos primeras opciones son correctas.",
          "4": "Ninguna de las anteriores."
      },
      "correctAnswer": "Las dos primeras opciones son correctas."
    }
  },
  {
    "7": {
      "question": "En caso de que se considere necesario modificar el campo sonoro introduciendo de manera temporal "
                  + "mobiliario adicional o difusores dentro del recinto receptor, podríamos hacerlo como consideremos "
                  + "oportuno sin ningún tipo de restricción a tener en cuenta.",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "8": {
      "question": "Señale la respuesta correcta:",
      "answerType": "MULTI",
      "numberAnswers": 5,
      "possibleAnswers": {
          "0": "La máquina de impactos se debe colocar en cuatro posiciones diferentes distribuidas de manera aleatoria. "
                + "La distancia de la máquina de impactos desde los bordes del suelo debe ser de más de 0.5 metros.",
          "1": "La máquina de impactos se debe colocar en al menos cuatro posiciones diferentes distribuidas de manera aleatoria. "
                + "La distancia de la máquina de impactos desde los bordes del suelo debe ser de más de 0.5 metros.",
          "2": "La máquina de impactos se debe colocar en al menos cuatro posiciones diferentes distribuidas de manera aleatoria. "
                + "La distancia de la máquina de impactos desde los bordes del suelo debe ser de al menos 0.5 metros.",
          "3": "La norma no especifica el número de posiciones de la máquina de impactos, solo especifica que la distancia de la "
                + "máquina de impactos desde los bordes del suelo debe ser de al menos 0.5 metros.",
          "4": "Ninguna de las anteriores."
      },
      "correctAnswer": "Las dos primeras opciones son correctas."
    }
  },
  {
    "9": {
      "question": "La excitación por parte de la pelota de caucho se debe realizar en cuatro o más posiciones diferentes, "
                  + "teniendo en cuenta las características de la superficie de ensayo. "
                  + "Para ello, la pelota debe dejarse caer verticalmente en "
                  + "caída libre desde una altura aproximada (+-1cm) de...",
      "answerType": "OPEN",
      "units": "cm",
      "correctAnswer": 1
    }
  },
  {
    "10": {
      "question": "'Las mediciones no deberían iniciarse hasta que el nivel de ruido se haya estabilizado. Si no se obtienen "
                  + "condiciones estables pasados 5 min, las mediciones deberían realizarse durante un período de medición "
                  + "bien definido.' ¿En qué caso se debe seguir este procedimiento?<br><br>"
                  + "Nota: la respuesta son dos palabras.",
      "answerType": "OPEN",
      "units": "",
      "correctAnswer": "dependencia temporal"
    }
  },
  {
    "11": {
      "question": "Utilizando posiciones fijas de micrófono, el operador puede o no estar presente en el recinto. En caso de estar "
                  + "presente, el tronco del cuerpo del operador debe permanecer a una distancia de al menos 2 metros desde el micrófono.",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "12": {
      "question": "Según la norma, utilizando micrófono fijo para la máquina de impactos como fuente, se debe realizar el mismo número de "
                  + "mediciones para cada posición de la máquina de impactos y se debe realizar al menos una medición para "
                  + "cada posición de la máquina de impactos.",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "13": {
      "question": "Identifique, separadas por comas, las trayectorias de barrido manual de micrófono de la figura.<br><br>"
                  + "<img style='position:relative;left:35vw;top:1vw' src='img/trayectorias-micro.png' alt='trayectorias' width='333' height='359'>",
      "answerType": "OPEN_LONG",
      "units": "",
      "correctAnswer": "circular, helicoidal, cilíndrica, tres semicírculos"
    }
  },
  {
    "14": {
      "question": "El procedimiento de baja frecuencia se debe utilizar para bandas de 1/3 octava de 50 Hz, 63 Hz, 80 Hz y 125 Hz "
                  + "en el recinto receptor cuando su volumen es inferior a 25 metros cúbicos.",
      "answerType": "TRUE_FALSE",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "15": {
      "question": "<img style='float:right;position:relative;top:1vw' src='img/posicion-micro.png' alt='trayectorias' width='243' height='198'>"
                  + "La figura muestra un ejemplo de posición de micrófono de esquina para el procedimiento de baja frecuencia. "
                  + "d-1 = 1,5 metros; d-2 = 1,35 metros. "
                  + "¿Está colocado correctamente el micrófono?",
      "answerType": "MULTI",
      "numberAnswers": 4,
      "possibleAnswers": {
          "0": "Sí.",
          "1": "La distancia d-1 es demasiado grande, la distancia d-2 es correcta.",
          "2": "Ambas distancias son demasiado grandes, deben cumplir d < 0,3 m.",
          "3": "Ninguna de las respuestas anteriores son correctas."
      },
      "correctAnswer": "Ninguna de las respuestas anteriores son correctas."
    }
  },
  {
    "16": {
      "question": "¿Cuál es el número mínimo de esquinas en las que se deben hacer mediciones utilizando un micrófono fijo "
                  + "o de mano para cada posición de la fuente de impactos?<br>"
                  + "Nota: escriba el valor numérico, p.e.: 2 (no escriba 'dos').",
      "answerType": "OPEN",
      "units": "",
      "correctAnswer": "4"
    }
  },
  {
    "17": {
      "question": "Para el procedimiento de baja frecuencia, ¿es necesario medir el ruido de fondo en cada esquina utilizada "
                  + "para calcular los niveles de presión acústica de la esquina?",
      "answerType": "MULTI",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí.",
          "1": "No."
      },
      "correctAnswer": "Sí."
    }
  }
  ];
