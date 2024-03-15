const pTurno = document.getElementById('sJogadorDaVez');
const result = document.getElementById('result');
const repet = document.getElementById('repet');
let status = true;
let turno = "X";
let tentativas = 9;
let marc;
let casa21 = 0;
let casa22 = 0;
let casa23 = 0;
let casa24 = 0;
let casa25 = 0;
let casa26 = 0;
let casa27 = 0;
let casa28 = 0;
let casa29 = 0;

function mudarTurno() {
  if (turno == "X") {
    pTurno.innerText = "Vez do jogador X:";
  } else {
    pTurno.innerText = "Vez do jogador O:";
  }
}
mudarTurno();

function bloq(arg) {
  if (arg == 1) { casa21 = 1; }
  else if (arg == 2) { casa22 = 1; }
  else if (arg == 3) { casa23 = 1; }
  else if (arg == 4) { casa24 = 1; }
  else if (arg == 5) { casa25 = 1; }
  else if (arg == 6) { casa26 = 1; }
  else if (arg == 7) { casa27 = 1; }
  else if (arg == 8) { casa28 = 1; }
  else if (arg == 9) { casa29 = 1; }
}

function marcar(event, numCasa) {
  const casa = event.target;
  let ver = casa.id;
  if ((turno == "X" && tentativas > 0) && (numCasa == 1 && casa21 == 0 || numCasa == 2 && casa22 == 0 || numCasa == 3 && casa23 == 0 || numCasa == 4 && casa24 == 0 || numCasa == 5 && casa25 == 0 || numCasa == 6 && casa26 == 0 || numCasa == 7 && casa27 == 0 || numCasa == 8 && casa28 == 0 || numCasa == 9 && casa29 == 0)) {
    casa.innerText = "X";
    console.log(`A ${ver} foi marcada pelo jogador ${turno}!`);
    tentativas--;
    marc = `X${numCasa}`;
    bloq(numCasa);
    turno = "O";
  } else if ((turno == "O" && tentativas > 0) && (numCasa == 1 && casa21 == 0 || numCasa == 2 && casa22 == 0 || numCasa == 3 && casa23 == 0 || numCasa == 4 && casa24 == 0 || numCasa == 5 && casa25 == 0 || numCasa == 6 && casa26 == 0 || numCasa == 7 && casa27 == 0 || numCasa == 8 && casa28 == 0 || numCasa == 9 && casa29 == 0)) {
    casa.innerText = "O";
    console.log(`A ${ver} foi marcada pelo jogador ${turno}!`);
    tentativas--;
    marc = `O${numCasa}`;
    bloq(numCasa);
    turno = "X";
  }
  mudarTurno();
  tent();
  venc();
}
     
function valid() {
  switch (marc) {
    case ("X1"): casa1 = "X"; break;
    case ("X2"): casa2 = "X"; break;
    case ("X3"): casa3 = "X"; break;
    case ("X4"): casa4 = "X"; break;
    case ("X5"): casa5 = "X"; break;
    case ("X6"): casa6 = "X"; break;
    case ("X7"): casa7 = "X"; break;
    case ("X8"): casa8 = "X"; break;
    case ("X9"): casa9 = "X"; break;
    case ("O1"): casa1 = "O"; break;
    case ("O2"): casa2 = "O"; break;
    case ("O3"): casa3 = "O"; break;
    case ("O4"): casa4 = "O"; break;
    case ("O5"): casa5 = "O"; break;
    case ("O6"): casa6 = "O"; break;
    case ("O7"): casa7 = "O"; break;
    case ("O8"): casa8 = "O"; break;
    case ("O9"): casa9 = "O"; break;
  }
}

function venc() {
  valid();
  if (casa1 == casa2 && casa2 == casa3 || casa1 == casa4 && casa4 == casa7 || casa1 == casa5 && casa5 == casa9) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = `O jogador ${casa1} ganhou!`;
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
    tentativas = 0;
  } else if (casa4 == casa5 && casa5 == casa6) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = `O jogador ${casa4} ganhou!`;
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
    tentativas = 0;
  } else if (casa7 == casa8 && casa8 == casa9 || casa7 == casa5 && casa5 == casa3) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = `O jogador ${casa7} ganhou!`;
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
    tentativas = 0;
  } else if (casa2 == casa5 && casa5 == casa8) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = `O jogador ${casa2} ganhou!`;
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
    tentativas = 0;
  } else if (casa3 == casa6 && casa6 == casa9) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = `O jogador ${casa3} ganhou!`;
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
    tentativas = 0;
  }
}

function tent() {
  if (tentativas == 0) {
    pTurno.innerText = `Fim de jogo!`;
    result.innerText = "Infelizmente deu velha(empate)!";
    repet.innerHTML = `<a href="index.html">Reiniciar Partida!</a>`;
  }
}