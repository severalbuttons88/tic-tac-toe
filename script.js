const player = (name) => {
    let symbol = "";
  let myTurn = false;
  let playerName = name;
  let playerSelections = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const setName = (name) => (playerName = name);
  const getName = () => name;
  const setSymbol = (appliedSymbol) => {
    symbol = appliedSymbol;
  }

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

  return { setName, getSelections, setTurn, addSelection, getTurn, getName, setSymbol };
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
    for (let i = 0; i < selectionZones.length; i++) {
      selectionZones[i].addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          id = e.target.id;
          console.log(id);
        }
      });
    }
    return id;
  };
  const removeClickedZone = (indexToRemove) => {
    selectionZones[indexToRemove].removeEventListener("click", (e) => {
      if (e.target.textContent === "") {
        id = e.target.id;
      }
    });
  };

  const changeGameState = (currentState) => {
    gameState = currentState;
    renderBoard();
  };

  return { changeGameState, getClickedZone, removeClickedZone };
})();

const gameFlow = (() => {
  const defaultState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  function setDefault(player1, player2) {
    player1.setTurn(true);
    player2.setTurn(false);
  }
  function playTurn(player1, player2) {
    if (player1.getTurn() === true) {
        let id = gameBoard.getClickedZone();
        player1.addSelection
    }
  }
  const runRound = (player1, player2) => {
    gameBoard.changeGameState(defaultState);
    setDefault(player1, player2);

    if (player1.getTurn() === true) {
        player1.addSelection
    }
  };
  const createGame = (() => {
    const playerOne = player();
    const playerTwo = player();
    runRound(playerOne, playerTwo);
  })();

  const playerOne = player();
  const playerTwo = player();
})();
