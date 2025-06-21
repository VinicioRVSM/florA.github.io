// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

//Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "No hay invierno que te apague", time: 10 },
  { text: "ni verano que te agobie", time: 14 },
  { text: "tu belleza no se esconde", time: 18 },
  { text: "ni en los días en que llore.", time: 22 },

  { text: "Tus ojos son luna clara", time: 26 },
  { text: "que iluminan sin pedir", time: 30 },
  { text: "y tu sonrisa es la calma", time: 34 },
  { text: "que me enseña a sonreír", time: 38 },

  { text: "Tienes el alma de flor", time: 42 },
  { text: "de esas que florecen solas", time: 46 },
  { text: "aunque el viento las sacuda", time: 50 },
  { text: "y la vida no sea alfombra", time: 54 },

  { text: "Si a veces el ánimo cae", time: 58 },
  { text: "y las dudas se hacen eco", time: 62 },
  { text: "recuerda que tú eres arte", time: 66 },
  { text: "y lo hermoso vive dentro", time: 70 },

  { text: "SE TE KIERE ANGY", time: 74 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);