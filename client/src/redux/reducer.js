import {
  LOGIN,
  USER_LOGOUT,
  SET_ERROR,
  GET_TICKETS1,
  GET_TICKETS2,
  GET_TICKETS3,
  GET_TICKETS4,
  GET_TICKETS5,
  GET_ANEXOS,
  GET_DOCUMENTWORKORDERMANTTO,
  SET_TOKEN_ERROR,
} from "./actionsTypes";

const initialState = {
  userLogin: {},
  userDetail: {},
  tokenError: "",
  error: "",
  token: "",
  countUsers: "loader",
  tickets1: [],
  countTickets1: "loader",
  tickets2: [],
  countTickets2: "loader",
  tickets3: [],
  countTickets3: "loader",
  tickets4: [],
  countTickets4: "loader",
  tickets5: [],
  countTickets5: "loader",
  anexosTickets: [],
  countAnexosTickets: "loader",
  documentWorkOrderMantto: [],
  countDocumentWorkOrderMantto: "loader",
};

const rootReducer = (state = initialState, { type, payload }) => {
  let userLoginState = {};
  let setError = {};
  let setTokenError = {};
  let setTickets1 = {};
  let setTickets2 = {};
  let setTickets3 = {};
  let setTickets4 = {};
  let setTickets5 = {};
  let setAnexosTickets = {};
  let setDocumentWorkOrderMantto = {};
  switch (type) {
    //! Login of the user
    case LOGIN:
      userLoginState = {
        ...state,
        userLogin: payload.loginUser,
        token: payload.token,
        error: {},
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(userLoginState));
      return userLoginState;

    case USER_LOGOUT:
      localStorage.removeItem("myAppReduxState");
      localStorage.removeItem("dispatchPerformed");
      localStorage.removeItem("showRed");
      return initialState;

    case SET_ERROR:
      setError = {
        ...state,
        error: payload,
      };
      return setError;

    case SET_TOKEN_ERROR:
      setTokenError = {
        ...state,
        tokenError: payload,
      };
      return setTokenError;

    case GET_TICKETS1:
      setTickets1 = {
        ...state,
        tickets1: payload.rows,
        countTickets1: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setTickets1));
      return setTickets1;
    case GET_TICKETS2:
      setTickets2 = {
        ...state,
        tickets2: payload.rows,
        countTickets2: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setTickets2));
      return setTickets2;
    case GET_TICKETS3:
      setTickets3 = {
        ...state,
        tickets3: payload.rows,
        countTickets3: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setTickets3));
      return setTickets3;
    case GET_TICKETS4:
      setTickets4 = {
        ...state,
        tickets4: payload.rows,
        countTickets4: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setTickets4));
      return setTickets4;
    case GET_TICKETS5:
      setTickets5 = {
        ...state,
        tickets5: payload.rows,
        countTickets5: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setTickets5));
      return setTickets5;

    case GET_ANEXOS:
      setAnexosTickets = {
        ...state,
        anexosTickets: payload.rows,
        countAnexosTickets: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setAnexosTickets));
      return setAnexosTickets;
    case GET_DOCUMENTWORKORDERMANTTO:
      setDocumentWorkOrderMantto = {
        ...state,
        documentWorkOrderMantto: payload.rows,
        countDocumentWorkOrderMantto: payload.count,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(setDocumentWorkOrderMantto)
      );
      return setDocumentWorkOrderMantto;

    default:
      return state;
  }
};

export default rootReducer;
