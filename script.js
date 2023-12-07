let currentPlayer = 'X';
let gameActive = true;
const cells = document.querySelectorAll('.cell');

function handleClick(cellIndex) {
  if (!gameActive || cells[cellIndex].textContent !== '') return;

  cells[cellIndex].textContent = currentPlayer;
  checkGameStatus();
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkGameStatus() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition;
    if (
      cells[a].textContent &&
      cells[a].textContent === cells[b].textContent &&
      cells[a].textContent === cells[c].textContent
    ) {
      gameActive = false;
      setTimeout(() => {
        document.getElementById('message1').classList.remove('hidden');
      }, 1000); // Atraso de 1 segundo antes de mostrar a primeira mensagem
      return;
    }
  }
}

function showLoveMessage() {
  document.querySelector('.game').style.display = 'none';
  document.getElementById('message1').style.display = 'block';
  document.getElementById('message2').classList.remove('hidden');
}
