import {
  LOGIN,
  SET_TOKEN_ERROR,
  USER_LOGOUT,
  SET_ERROR,
  PUT_QUALIFICATION,
  GET_TICKETS1,
  GET_TICKETS2,
  GET_TICKETS3,
  GET_TICKETS4,
  GET_TICKETS5,
  GET_ANEXOS,
} from "./actionsTypes";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";

const { API_URL_BASE } = getParamsEnv();

export const login = (userLogin) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(API_URL_BASE + "login", userLogin);
      return dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error.request.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error.request.status,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error.request.status });
      }
    }
  };
};

export const setLogout = () => {
  return async function (dispatch) {
    try {
      // const response = await axios.post(API_URL_BASE + "/logoutuser", {
      //   token,
      // });
      return dispatch({
        type: USER_LOGOUT,
      });
    } catch (error) {
      //throw Error(error.message);
      // Aunque falle la red, registro la salida del usuario lo mismo:
      return dispatch({
        type: USER_LOGOUT,
      });
    }
  };
};

export const getTickets1 = (
  textsearcht1 = "",
  attributet1 = "createdAt",
  attribute2t1 = "createdAt",
  ordert1 = "asc",
  paget1 = 0,
  sizet1 = -1,
  createDateEndt1 = "",
  createDateStartt1 = "",
  anexoTypet1 = 0,
  enterpriseRequestt1 = "",
  personRequestt1 = "",
  docWorkOrdert1 = "",
  userCreationt1 = "",
  userUpgradet1 = "",
  token
) => {
  const endPoint = API_URL_BASE + "tickets?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearcht1}&attribute=${attributet1}&attribute2=${attribute2t1}&order=${ordert1}&page=${paget1}&size=${sizet1}&createDateEnd=${createDateEndt1}&createDateStart=${createDateStartt1}&anexoType=${anexoTypet1}&enterpriseRequest=${enterpriseRequestt1}&personRequest=${personRequestt1}&docWorkOrder=${docWorkOrdert1}&userCreation=${userCreationt1}&userUpgrade=${userUpgradet1}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_TICKETS1,
        payload: data.existingTickets,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getTickets2 = (
  textsearcht2 = "",
  attributet2 = "createdAt",
  attribute2t2 = "createdAt",
  ordert2 = "asc",
  paget2 = 0,
  sizet2 = -1,
  createDateEndt2 = "",
  createDateStartt2 = "",
  anexoTypet2 = 1,
  enterpriseRequestt2 = "",
  personRequestt2 = "",
  docWorkOrdert2 = "",
  userCreationt2 = "",
  userUpgradet2 = "",
  token
) => {
  const endPoint = API_URL_BASE + "tickets?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearcht2}&attribute=${attributet2}&attribute2=${attribute2t2}&order=${ordert2}&page=${paget2}&size=${sizet2}&createDateEnd=${createDateEndt2}&createDateStart=${createDateStartt2}&anexoType=${anexoTypet2}&enterpriseRequest=${enterpriseRequestt2}&personRequest=${personRequestt2}&docWorkOrder=${docWorkOrdert2}&userCreation=${userCreationt2}&userUpgrade=${userUpgradet2}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_TICKETS2,
        payload: data.existingTickets,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getTickets3 = (
  textsearcht3 = "",
  attributet3 = "createdAt",
  attribute2t3 = "createdAt",
  ordert3 = "asc",
  paget3 = 0,
  sizet3 = -1,
  createDateEndt3 = "",
  createDateStartt3 = "",
  anexoTypet3 = 2,
  enterpriseRequestt3 = "",
  personRequestt3 = "",
  docWorkOrdert3 = "",
  userCreationt3 = "",
  userUpgradet3 = "",
  token
) => {
  const endPoint = API_URL_BASE + "tickets?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearcht3}&attribute=${attributet3}&attribute2=${attribute2t3}&order=${ordert3}&page=${paget3}&size=${sizet3}&createDateEnd=${createDateEndt3}&createDateStart=${createDateStartt3}&anexoType=${anexoTypet3}&enterpriseRequest=${enterpriseRequestt3}&personRequest=${personRequestt3}&docWorkOrder=${docWorkOrdert3}&userCreation=${userCreationt3}&userUpgrade=${userUpgradet3}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_TICKETS3,
        payload: data.existingTickets,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getTickets4 = (
  textsearcht4 = "",
  attributet4 = "createdAt",
  attribute2t4 = "createdAt",
  ordert4 = "asc",
  paget4 = 0,
  sizet4 = -1,
  createDateEndt4 = "",
  createDateStartt4 = "",
  anexoTypet4 = 3,
  enterpriseRequestt4 = "",
  personRequestt4 = "",
  docWorkOrdert4 = "",
  userCreationt4 = "",
  userUpgradet4 = "",
  token
) => {
  const endPoint = API_URL_BASE + "tickets?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearcht4}&attribute=${attributet4}&attribute2=${attribute2t4}&order=${ordert4}&page=${paget4}&size=${sizet4}&createDateEnd=${createDateEndt4}&createDateStart=${createDateStartt4}&anexoType=${anexoTypet4}&enterpriseRequest=${enterpriseRequestt4}&personRequest=${personRequestt4}&docWorkOrder=${docWorkOrdert4}&userCreation=${userCreationt4}&userUpgrade=${userUpgradet4}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_TICKETS4,
        payload: data.existingTickets,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getTickets5 = (
  textsearcht5 = "",
  attributet5 = "createdAt",
  attribute2t5 = "createdAt",
  ordert5 = "asc",
  paget5 = 0,
  sizet5 = -1,
  createDateEndt5 = "",
  createDateStartt5 = "",
  anexoTypet5 = 4,
  enterpriseRequestt5 = "",
  personRequestt5 = "",
  docWorkOrdert5 = "",
  userCreationt5 = "",
  userUpgradet5 = "",
  token
) => {
  const endPoint = API_URL_BASE + "tickets?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearcht5}&attribute=${attributet5}&attribute2=${attribute2t5}&order=${ordert5}&page=${paget5}&size=${sizet5}&createDateEnd=${createDateEndt5}&createDateStart=${createDateStartt5}&anexoType=${anexoTypet5}&enterpriseRequest=${enterpriseRequestt5}&personRequest=${personRequestt5}&docWorkOrder=${docWorkOrdert5}&userCreation=${userCreationt5}&userUpgrade=${userUpgradet5}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_TICKETS5,
        payload: data.existingTickets,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getAnexos = (
  textsearchAnexos = "",
  typeAnexos,
  attributeAnexos = "type",
  attributeAnexos2 = "order",
  orderAnexos = "asc",
  pageAnexos = 0,
  sizeAnexos = -1,
  token
) => {
  const endPoint = API_URL_BASE + "anexos?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearchAnexos}&type=${typeAnexos}&attribute=${attributeAnexos}&attribute2=${attributeAnexos2}&order=${orderAnexos}&page=${pageAnexos}&size=${sizeAnexos}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return dispatch({
        type: GET_ANEXOS,
        payload: data.existingAnexos,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const putQualification = (idqualification, qualification, token) => {
  const endPoint = API_URL_BASE + "qualificationupdate/";
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${endPoint}${idqualification}?token=${token}`,
        qualification
      );

      return dispatch({
        type: PUT_QUALIFICATION,
        payload: data.updateQualification,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};
