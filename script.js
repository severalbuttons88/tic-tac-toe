const player = (name) => {
  let myTurn = false;
  let playerName = name;
  let playerSelections = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const setName = (name) => (playerName = name);
  const getName = () => name;

  const getSelections = () => playerSelections;
  const addSelection = (value, index) => {
    let combinedArray = playerSelections.flat();
    combinedArray.splice(index, 1, value);
    separatedArray = [];
    while (combinedArray.length)
      separatedArray.push(combinedArray.splice(0, 3));
    playerSelections = separatedArray;
    return separatedArray;
  };

  const getTurn = () => myTurn;
  const setTurn = (turn) => {
    if (turn === false) {
      myTurn = false;
      return myTurn;
    } else if (turn === true) {
      myTurn = true;
      return myTurn;
    }
  };

  return { setName, getSelections, setTurn, addSelection, getTurn, getName };
};
const gameBoard = (() => {
  //gameboard module
  const selectionZones = document.querySelectorAll(".selection");

  let gameState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  function renderBoard() {
    let combinedState = [].concat(...gameState);
    combinedState.map((cell, index) => {
      let selectedCell = selectionZones[index];
      let cellId = Number(selectedCell.id);
      selectedCell.textContent = `${cell}`;
    });
  }
  const getClickedZone = () => {
    let id = null;
    selectionZones.addEventListener("mousedown", (e) => {
      if (e.target.textContent === "") {
        id = e.target.id;
      }
    });
    selectionZones.addEventListener("mouseup", () => {
      selectionZones.removeEventListener("mouseDown", (e) => {
        if (e.target.textContent === "") {
          id = e.target.id;
        }
      });
    });

    return id;
  };

  const changeGameState = (currentState) => {
    gameState = currentState;
    renderBoard();
  };

  return { changeGameState, getClickedZone };
})();

const gameFlow = (() => {
  const defaultState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const runRound = (player1, player2) => {
    gameBoard.changeGameState(defaultState);
    player1.setTurn(true);
    player2.setTurn(false);
  };
  const createGame = (() => {
    const playerOne = player();
    const playerTwo = player();
    runRound(playerOne, playerTwo);
  })();

  const playerOne = player();
  const playerTwo = player();
})();
