function getInitialBoard() {
    return [
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
      ["", "", "", "", "", "", ""],
    ];
  }

const initialState = {
    board: getInitialBoard(),
    turn: "1",
    winner: 0,
    points: {
      1: 0,
      2: 0,
    },
  };
  
  const actionTypes = {
    SET_BOARD: "SET_BOARD",
    SET_TURN: "SET_TURN",
    SET_WINNER: "SET_WINNER",
    SET_POINTS: "SET_POINTS",
    RESET_GAME: "RESET_GAME",
  };

  export const gameReducer = (state, action) => {
    switch (action.type) {
      case actionTypes.SET_BOARD:
        return { ...state, board: action.payload };
      case actionTypes.SET_TURN:
        return { ...state, turn: action.payload };
      case actionTypes.SET_WINNER:
        return { ...state, winner: action.payload };
      case actionTypes.SET_POINTS:
        return { ...state, points: action.payload };
      case actionTypes.RESET_GAME:
        return initialState;
      default:
        return state;
    }
  };