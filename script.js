const playerOneWinCount = document.querySelector(".player-one-win");
const playerTwoWinCount = document.querySelector(".player-two-win");
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
  const getTotalWins = () => totalWon;
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
    getTotalWins,

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
  let hasWon = false;
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
  let getWinState = () => hasWon;
  let resetWinState = () => {
    hasWon = false;
  };
  renderBoard();
  const defaultBoard = () => {
    console.log(gameState);
    gameState = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    renderBoard();
  };

  function checkForWin(player, symbol, selection) {
    compareSelect(symbol, player, selection);

    function compareSelect(symbol, playerObj, selection) {
      let player = selection;
      if (
        (player[0][0] === `${symbol}`) &
        (player[0][1] === `${symbol}`) &
        (player[0][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()

      } else if (
        (player[1][0] === `${symbol}`) &
        (player[1][1] === `${symbol}`) &
        (player[1][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[2][0] === `${symbol}`) &
        (player[2][1] === `${symbol}`) &
        (player[2][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[0][0] === `${symbol}`) &
        (player[1][0] === `${symbol}`) &
        (player[2][0] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[0][1] === `${symbol}`) &
        (player[1][1] === `${symbol}`) &
        (player[2][1] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[0][2] === `${symbol}`) &
        (player[1][2] === `${symbol}`) &
        (player[2][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[0][0] === `${symbol}`) &
        (player[1][1] === `${symbol}`) &
        (player[2][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      } else if (
        (player[2][0] === `${symbol}`) &
        (player[1][1] === `${symbol}`) &
        (player[0][2] === `${symbol}`)
      ) {
        playerObj.wonRound();
        hasWon = true;
        console.log("win");
        gameFlow.updateScore()
      }
    }
  }

  const exportWin = (playerObj, symbol) => {
    checkForWin(playerObj, symbol);
  };
  const exportState = () => gameState;

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
    renderBoard();
  }
  const getRound = () => currentRound;
  const setRound = (round) => {
    currentRound = round;
  };
  const getClickedZone = (player1, player2) => {
    for (let i = 0; i < selectionZones.length; i++) {
      selectionZones[i].addEventListener("mousedown", (e) => {
        playerOneWinCount.textContent = `${player1.getTotalWins()}`;
        playerTwoWinCount.textContent = `${player2.getTotalWins()}`;
        if (e.target.textContent === "") {

          let id = e.target.id;
          if (hasWon === true) {
            gameFlow.runRound(player1, player2);
           
            hasWon = false;
        }
          if (player1.getTurn() === true) {
            player1.addSelectedId(id);
            changeGameState(player1.getSelectedId(), player1.getSymbol());
            renderBoard();
            checkForWin(player1, player1.getSymbol(), gameState);
            
            player2.setTurn(true);
            player1.setTurn(false);
          } else if (player2.getTurn() === true) {
            player2.addSelectedId(id);
            changeGameState(player2.getSelectedId(), player2.getSymbol());
            renderBoard();
            checkForWin(player2, player2.getSymbol(), gameState);
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
    selectionZones[indexToRemove].removeEventListener("mousedown", (e) => {
      if (e.target.textContent === "") {
        if (e.target.textContent === "") {
          let id = e.target.id;
          if (player1.getTurn() === true) {
            player1.addSelectedId(id);
            changeGameState(player1.getSelectedId(), player1.getSymbol());
            renderBoard();
            checkForWin(player1, player1.getSymbol());
            player2.setTurn(true);
            player1.setTurn(false);
          } else if (player2.getTurn() === true) {
            player2.addSelectedId(id);
            changeGameState(player2.getSelectedId(), player2.getSymbol());
            renderBoard();
            checkForWin(player2, player2.getSymbol());
            player1.setTurn(true);
            player2.setTurn(false);
          }
        }
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
    exportWin,
    exportState,
    getWinState,
    resetWinState,
  };
})();
const gameFlow = (() => {
    let gameStarted = false;
    const playerOne = player();
    const playerTwo = player();
  const startButton = document.querySelector("#start");
  const resetButton = document.querySelector("#reset")
  const defaultState = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const updateScore = () => {
    playerOneWinCount.textContent = `${playerOne.getTotalWins()}`;
    playerTwoWinCount.textContent = `${playerTwo.getTotalWins()}`;
  }
  function startGameButton() {
    startButton.addEventListener("click", () => {
      setDefault(playerOne, playerTwo);
      gameStarted = false;
      createRound(playerOne, playerTwo);
      updateScore();

    });
  }
  function resetGameButton() {
    resetButton.addEventListener("click", () => {
        setDefault(playerOne, playerTwo);
        updateScore();
    })

  }
  function setDefault(player1, player2) {
    player1.setTurn(true);
    player2.setTurn(false);
    player1.setSymbol("x");
    player2.setSymbol("o");
    if (gameStarted === false) {
    player1.resetWins();
    player2.resetWins();
    gameStarted = true;
    }
    gameBoard.defaultBoard();
  }
  function createRound(player1, player2) {
    runRound(player1, player2)
  }
  const runRound = (player1, player2) => {
    setDefault(player1, player2);
    gameBoard.getClickedZone(player1, player2);
  };
  startGameButton();
  resetGameButton();
  return {runRound, updateScore};
})();
