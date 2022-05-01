var data = [
  {
    "1": {
      "question": "La máquina de impactos se puede utilizar para una variedad de impactos leves o fuertes,"
                  + " mientras que la pelota de caucho para impactos pesados y suaves",
      "answerType": "BINARY",
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
      "correctAnswer": "60"
    }
  },
  {
    "3": {
      "question": "El nivel de ruido de fondo, ¿en qué recinto debe ser medido?",
      "answerType": "BINARY",
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
      "question": "El área de absorción equivalente se puede calcular utilizando la fórmula del TR de Sabine<br>"
                  + " (T = 0.161V/A) si y sólo si es el único elemento absorbente en el recinto.",
      "answerType": "BINARY",
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
          "0": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "1": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "2": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor.",
          "3": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto receptor."
      },
      "correctAnswer": "possibleAnswer3"
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
      "correctAnswer": "possibleAnswer3"
    }
  },
  {
    "7": {
      "question": "En caso de que se considere necesario modificar el campo sonoro introduciendo de manera temporal "
                  + "mobiliario adicional o difusores dentro del recinto receptor, podríamos hacerlo como consideremos "
                  + "oportuno sin ningún tipo de restricción a tener en cuenta.",
      "answerType": "BINARY",
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
      "correctAnswer": "possibleAnswer2"
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
      "correctAnswer": "100"
    }
  },
  {
    "10": {
      "question": "'Las mediciones no deberían iniciarse hasta que el nivel de ruido se haya estabilizado. Si no se obtienen "
                  + "condiciones estables pasados 5 min, las mediciones deberían realizarse durante un período de medición "
                  + "bien definido.' ¿En qué caso se debe seguir este procedimiento?",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Dependencia temporal",
          "1": "Independencia temporal"
      },
      "correctAnswer": "Dependencia temporal"
    }
  },
  {
    "11": {
      "question": "Utilizando posiciones fijas de micrófono, el operador puede o no estar presente en el recinto. En caso de estar "
                  + "presente, el tronco del cuerpo del operador debe permanecer a una distancia de al menos 2 metros desde el micrófono.",
      "answerType": "BINARY",
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
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "13": {
      "question": "¿Qué figura representa la trayectoria helicoidal?",
      "attachments": [
        "<img src='img/trayectoria1.png' alt='trayectoria1' class='image-button'>",
        "<img src='img/trayectoria2.png' alt='trayectoria2' class='image-button'>",
        "<img src='img/trayectoria3.png' alt='trayectoria3' class='image-button'>",
        "<img src='img/trayectoria4.png' alt='trayectoria4' class='image-button'>",
      ],
      "answerType": "MULTI_BUTTONS",
      "correctAnswer": "multiBtn1"
    }
  },
  {
    "14": {
      "question": "El procedimiento de baja frecuencia se debe utilizar para bandas de 1/3 octava de 50 Hz, 63 Hz, 80 Hz y 125 Hz "
                  + "en el recinto receptor cuando su volumen es inferior a 25 metros cúbicos.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    }
  },
  {
    "15": {
      "question": "La figura muestra un ejemplo de posición de micrófono de esquina para el procedimiento de baja frecuencia. "
                  + "d-1 = 1,5 metros; d-2 = 1,35 metros. "
                  + "¿Está colocado correctamente el micrófono?"
                  + "<img style='float:right;position:relative;top:4vh;right:8vw;width:17vw;height:16vw' src='img/posicion-micro.jpg' alt='trayectorias'>",
      "answerType": "MULTI",
      "numberAnswers": 4,
      "possibleAnswers": {
          "0": "Sí.",
          "1": "La distancia d-1 es demasiado grande, la distancia d-2 es correcta.",
          "2": "Ambas distancias son demasiado grandes, deben cumplir d < 0,3 m.",
          "3": "Ninguna de las respuestas anteriores son correctas."
      },
      "correctAnswer": "possibleAnswer3"
    }
  },
  {
    "16": {
      "question": "¿Cuál es el número mínimo de esquinas en las que se deben hacer mediciones utilizando un micrófono fijo "
                  + "o de mano para cada posición de la fuente de impactos?",
      "answerType": "NUMBER",
      "units": "",
      "correctAnswer": "4"
    }
  },
  {
    "17": {
      "question": "Para el procedimiento de baja frecuencia, ¿es necesario medir el ruido de fondo en cada esquina utilizada "
                  + "para calcular los niveles de presión acústica de la esquina?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    }
  },
  {
    "18": {
      "question": "¿Qué figura representa la trayectoria cilíndrica?",
      "attachments": [
        "<img src='img/trayectoria1.png' alt='trayectoria1' class='image-button'>",
        "<img src='img/trayectoria2.png' alt='trayectoria2' class='image-button'>",
        "<img src='img/trayectoria3.png' alt='trayectoria3' class='image-button'>",
        "<img src='img/trayectoria4.png' alt='trayectoria4' class='image-button'>",
      ],
      "answerType": "MULTI_BUTTONS",
      "correctAnswer": "multiBtn2"
    }
  },
  {
    "19": {
      "question": "¿Qué figura representa la trayectoria tres semicírculos?",
      "attachments": [
        "<img src='img/trayectoria1.png' alt='trayectoria1' class='image-button'>",
        "<img src='img/trayectoria2.png' alt='trayectoria2' class='image-button'>",
        "<img src='img/trayectoria3.png' alt='trayectoria3' class='image-button'>",
        "<img src='img/trayectoria4.png' alt='trayectoria4' class='image-button'>",
      ],
      "answerType": "MULTI_BUTTONS",
      "correctAnswer": "multiBtn3"
    }
  },
  {
    "20": {
      "question": "¿Cuántos dB es preferible que esté el nivel de ruido de fondo por debajo del nivel de señal y el ruido de fondo combinado?",
      "answerType": "MULTI",
      "numberAnswers": 4,
      "possibleAnswers": {
          "0": "<6dB",
          "1": "6dB",
          "2": "6dB < L < 10dB",
          "3": ">10dB"
      },
      "correctAnswer": "possibleAnswer3"
    }
  },
  {
    "21": {
      "question": "En caso de que la diferencia entre el nivel de ruido de fondo y el nivel de señal+ruido de fondo sea inferior a 10dB pero "
                  + "superior a 6dB, ¿habría que calcular correcciones?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    }
  },
  {
    "22": {
      "question": "En caso de que la diferencia entre el nivel de ruido de fondo y el nivel de señal+ruido de fondo sea inferior o igual a 6dB, "
                  + "¿es correcto corregir con 1,3dB en cualquier banda de frecuencia?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    }
  },
  {
    "23": {
      "question": "Si hablamos de las mediciones del TR en el recinto receptor, ¿ejecutaría correctamente el procedimiento por defecto "
                  + "la siguiente secuencia de código?"
                  + "<img class='code-image' src='img/TR-recintoR-proc-defecto.png' alt='TR-codeseq'>",
      "answerType": "BINARY",
      "move": true,
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    }
  }
  ];
var binary = [
  {
    //"1": {
      "question": "La máquina de impactos se puede utilizar para una variedad de impactos leves o fuertes,"
                  + " mientras que la pelota de caucho para impactos pesados y suaves",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Verdadero"
    //}
  },
  {
    //"3": {
      "question": "El nivel de ruido de fondo, ¿en qué recinto debe ser medido?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Receptor",
          "1": "Emisor"
      },
      "correctAnswer": "Receptor"
    //}
  },
  {
    //"4": {
      "question": "El área de absorción equivalente se puede calcular utilizando la fórmula del TR de Sabine<br>"
                  + " (T = 0.161V/A) si y sólo si es el único elemento absorbente en el recinto.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Verdadero"
    //}
  },
  {
    //"7": {
      "question": "En caso de que se considere necesario modificar el campo sonoro introduciendo de manera temporal "
                  + "mobiliario adicional o difusores dentro del recinto receptor, podríamos hacerlo como consideremos "
                  + "oportuno sin ningún tipo de restricción a tener en cuenta.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    //}
  },
  {
    //"10": {
      "question": "'Las mediciones no deberían iniciarse hasta que el nivel de ruido se haya estabilizado. Si no se obtienen "
                  + "condiciones estables pasados 5 min, las mediciones deberían realizarse durante un período de medición "
                  + "bien definido.' ¿En qué caso se debe seguir este procedimiento?",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Dependencia temporal",
          "1": "Independencia temporal"
      },
      "correctAnswer": "Dependencia temporal"
    //}
  },
  {
    //"11": {
      "question": "Utilizando posiciones fijas de micrófono, el operador puede o no estar presente en el recinto. En caso de estar "
                  + "presente, el tronco del cuerpo del operador debe permanecer a una distancia de al menos 2 metros desde el micrófono.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    //}
  },
  {
    //"12": {
      "question": "Según la norma, utilizando micrófono fijo para la máquina de impactos como fuente, se debe realizar el mismo número de "
                  + "mediciones para cada posición de la máquina de impactos y se debe realizar al menos una medición para "
                  + "cada posición de la máquina de impactos.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    //}
  },
  {
    //"14": {
      "question": "El procedimiento de baja frecuencia se debe utilizar para bandas de 1/3 octava de 50 Hz, 63 Hz, 80 Hz y 125 Hz "
                  + "en el recinto receptor cuando su volumen es inferior a 25 metros cúbicos.",
      "answerType": "BINARY",
      "possibleAnswers": {
          "0": "Verdadero",
          "1": "Falso"
      },
      "correctAnswer": "Falso"
    //}
  },
  {
    //"17": {
      "question": "Para el procedimiento de baja frecuencia, ¿es necesario medir el ruido de fondo en cada esquina utilizada "
                  + "para calcular los niveles de presión acústica de la esquina?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    //}
  },
  {
    //"21": {
      "question": "En caso de que la diferencia entre el nivel de ruido de fondo y el nivel de señal+ruido de fondo sea inferior a 10dB pero "
                  + "superior a 6dB, ¿habría que calcular correcciones?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    //}
  },
  {
    //"22": {
      "question": "En caso de que la diferencia entre el nivel de ruido de fondo y el nivel de señal+ruido de fondo sea inferior o igual a 6dB, "
                  + "¿es correcto corregir con 1,3dB en cualquier banda de frecuencia?",
      "answerType": "BINARY",
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    //}
  },
  {
    //"23": {
      "question": "Si hablamos de las mediciones del TR en el recinto receptor, ¿ejecutaría correctamente el procedimiento por defecto "
                  + "la siguiente secuencia de código?"
                  + "<img class='code-image' src='img/TR-recintoR-proc-defecto.png' alt='TR-codeseq'>",
      "answerType": "BINARY",
      "move": true,
      "numberAnswers": 2,
      "possibleAnswers": {
          "0": "Sí",
          "1": "No"
      },
      "correctAnswer": "Sí"
    //}
  }
]
var open = [
  {
    //"2": {
      "question": "Según la norma, el tiempo de reverberación es el tiempo requerido por el nivel de presión"
                  + " acústica en un recinto para decrecer ciertos dB una vez haya cesado la fuente sonora."
                  + " ¿Cuántos decibelios tiene que decrecer?",
      "answerType": "OPEN",
      "units": "dB",
      "correctAnswer": "60"
    //}
  },
  {
    //"9": {
      "question": "La excitación por parte de la pelota de caucho se debe realizar en cuatro o más posiciones diferentes, "
                  + "teniendo en cuenta las características de la superficie de ensayo. "
                  + "Para ello, la pelota debe dejarse caer verticalmente en "
                  + "caída libre desde una altura aproximada (+-1cm) de...",
      "answerType": "OPEN",
      "units": "cm",
      "correctAnswer": "100"
    //}
  }
]
var multi = [
  {
    //"5": {
      "question": "Las mediciones que deben hacerse incluyen:",
      "answerType": "MULTI",
      "numberAnswers": 4,
      "possibleAnswers": {
          "0": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "1": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor y en el recinto receptor.",
          "2": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto emisor y en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto emisor.",
          "3": "Los niveles de presión acústica en el recinto receptor con la fuente de impactos funcionando,"
                + " los niveles de ruido de fondo en el recinto receptor cuando la fuente de impactos está "
                + "apagada y los TR en el recinto receptor."
      },
      "correctAnswer": "possibleAnswer3"
    //}
  },
  {
    //"6": {
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
      "correctAnswer": "possibleAnswer3"
    //}
  }
]
var multiButtons = [
  {
    //"13": {
      "question": "¿Qué figura representa la trayectoria helicoidal?",
      "attachments": [
        "<img src='img/trayectoria1.png' alt='trayectoria1' class='image-button'>",
        "<img src='img/trayectoria2.png' alt='trayectoria2' class='image-button'>",
        "<img src='img/trayectoria3.png' alt='trayectoria3' class='image-button'>",
        "<img src='img/trayectoria4.png' alt='trayectoria4' class='image-button'>",
      ],
      "answerType": "MULTI_BUTTONS",
      "correctAnswer": "multiBtn1"
    //}
  },
  {
    //"18": {
      "question": "¿Qué figura representa la trayectoria cilíndrica?",
      "attachments": [
        "<img src='img/trayectoria1.png' alt='trayectoria1' class='image-button'>",
        "<img src='img/trayectoria2.png' alt='trayectoria2' class='image-button'>",
        "<img src='img/trayectoria3.png' alt='trayectoria3' class='image-button'>",
        "<img src='img/trayectoria4.png' alt='trayectoria4' class='image-button'>",
      ],
      "answerType": "MULTI_BUTTONS",
      "correctAnswer": "multiBtn2"
    //}
  }
]
var number = [
  {
    //"16": {
      "question": "¿Cuál es el número mínimo de esquinas en las que se deben hacer mediciones utilizando un micrófono fijo "
                  + "o de mano para cada posición de la fuente de impactos?",
      "answerType": "NUMBER",
      "units": "",
      "correctAnswer": "4"
    //}
  }
]
