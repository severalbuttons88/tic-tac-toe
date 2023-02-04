const player = (name) => {
  let selectedId = "";
  let totalWon = 0;
  let symbol = "";
  let myTurn = false;
  let playerName = name;
  let playerSelections = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  const wonRound = () => {
    totalWon += 1;
  };
  const resetWins = () => {
    totalWon = 0;
  };
  const getRounds = () => totalWon;

  const setName = (name) => (playerName = name);
  const getName = () => name;
  const setSymbol = (appliedSymbol) => {
    symbol = appliedSymbol;
  };
  const getSymbol = () => symbol;

  const getSelections = () => playerSelections;
  const addSelectedId = (id) => {
    selectedId = id;
  };
  const getSelectedId = () => selectedId;
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

  return {
    setName,
    getSelections,
    setTurn,
    addSelection,
    getTurn,
    getName,
    setSymbol,
    getSymbol,
    wonRound,
    getRounds,
    resetWins,
    addSelectedId,
    getSelectedId,
  };
};
const gameBoard = (() => {
  const selectionZones = document.querySelectorAll(".selection");
  const playerOneDiv = document.querySelector(".player1");
  const playerTwoDiv = document.querySelector(".player2");
  let lastUsedID = "";
  let currentRound = 0;
  let gameState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const changeDiv = (player, value) => {
    if ((player = 1)) {
      playerOneDiv.setAttribute("id", `${value}`);
    } else if ((player = 2)) {
      playerTwoDiv.setAttribute("id", `${value}`);
    }
  };

  function renderBoard() {
    let combinedState = [].concat(...gameState);
    combinedState.map((cell, index) => {
      let selectedCell = selectionZones[index];
      selectedCell.textContent = `${cell}`;
    });
  }
  renderBoard();
  const defaultBoard = () => {
    gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  function changeGameState(playerInput, symbol) {
    let combinedArray = [].concat(...gameState);
    combinedArray.map((cell, index, array) => {
      if (index === Number(playerInput)) {
        array[index] = `${symbol}`;
        currentCell = document.getElementById(`${playerInput}`);
        currentCell.textContent = `${symbol}`;
      }
    });
    separatedArray = [];
    while (combinedArray.length)
      separatedArray.push(combinedArray.splice(0, 3));
    gameState = separatedArray;
    console.log(gameState);
    renderBoard();
  }
  const getRound = () => currentRound;
  const setRound = (round) => {
    currentRound = round;
  };
  const getClickedZone = (player1, player2) => {
    for (let i = 0; i < selectionZones.length; i++) {
      selectionZones[i].addEventListener("click", (e) => {
        if (e.target.textContent === "") {
          let id = e.target.id;
          if (player1.getTurn() === true) {
            player1.addSelectedId(id);
            changeGameState(player1.getSelectedId(), player1.getSymbol());
            renderBoard();
            player2.setTurn(true);
            player1.setTurn(false);
          } else if (player2.getTurn() === true) {
            player2.addSelectedId(id);
            changeGameState(player2.getSelectedId(), player2.getSymbol());
            renderBoard();
            player1.setTurn(true);
            player2.setTurn(false);
          }
        }
      });
    }
  };
  const runState = (playerInput, symbol) => {
    changeGameState(playerInput, symbol);
  };
  const getLastId = () => lastUsedID;

  const removeClickedZone = (indexToRemove) => {
    selectionZones[indexToRemove].removeEventListener("click", (e) => {
      if (e.target.textContent === "") {
        let id = e.target.id;
        playTurn(player1, player2, id);
      }
    });
  };

  return {
    changeGameState,
    getClickedZone,
    removeClickedZone,
    getRound,
    setRound,
    changeDiv,
    defaultBoard,
    getLastId,
    runState,
  };
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
    player1.setSymbol("x");
    player2.setSymbol("o");
    gameBoard.defaultBoard;
  }

  const runRound = (player1, player2) => {
    setDefault(player1, player2);
    gameBoard.getClickedZone(player1, player2);
  };

  const createGame = (() => {
    const playerOne = player();
    const playerTwo = player();
    runRound(playerOne, playerTwo);
  })();

  const playerOne = player();
  const playerTwo = player();
  return {};
})();
