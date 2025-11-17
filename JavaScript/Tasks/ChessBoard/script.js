const chess = document.querySelector(".chessboard");
const row1 = `<div class="square light"></div><div class="square dark"></div>`.repeat(4);
const row2 = `<div class="square dark"></div><div class="square light"></div>`.repeat(4);
const fullBoard = `${row1}${row2}`.repeat(4);
chess.innerHTML = fullBoard;

