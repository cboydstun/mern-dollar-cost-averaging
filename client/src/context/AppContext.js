import { createContext, useReducer } from "react";
import axios from "axios";

const AppReducer = (state, action) => {
  switch (action.type) {
    case "GET_BUYS":
      return {
        ...state,
        loading: false,
        buys: action.payload,
      };

    case "ADD_BUY":
      return {
        ...state,
        buys: [...state.buys, action.payload],
      };

    case "DELETE_BUY":
      return {
        ...state,
        buys: state.buys.filter((buy) => buy._id !== action.payload),
      };

    case "EDIT_BUY":
      return {
        ...state,
        buys: action.payload,
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

const initialState = {
  buys: [],
  error: null,
  loading: true,
};

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const getBuys = async () => {
    try {
      const res = await axios.get("http://localhost:5001/api/buys");
      dispatch({ type: "GET_BUYS", payload: res.data });
    } catch (err) {
      dispatch({ type: "TRANSACTION_ERROR", payload: err.response.msg });
    }
  };

  async function deleteBuy(id) {
    try {
      await axios.delete(`/api/buys/${id}`);
      dispatch({
        type: "DELETE_BUY",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function addBuy(transaction) {
    try {
      const res = await axios.post("/api/buys", transaction);
      dispatch({ type: "ADD_BUY", payload: res.data });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  async function editBuy(value) {
    try {
      const res = await axios.put(`/api/buys/${value}`);
      dispatch({
        type: "EDIT_BUY",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <AppContext.Provider
      value={{
        buys: state.buys,
        loading: state.loading,
        error: state.error,
        dispatch,
        getBuys,
        addBuy,
        deleteBuy,
        editBuy,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
