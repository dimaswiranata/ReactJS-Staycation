import { FETCH_PAGE } from "../types";
import axios from "configs/axios";

export const fetchPage = (url, page) => (dispatch) => {
  return axios.get(url, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    }}).then((response) => {
    dispatch({
      type: FETCH_PAGE,
      payload: {
        [page]: response.data,
      },
    });
    return response.data;
  });
};
