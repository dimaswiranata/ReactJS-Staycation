import { CHECKOUT_BOOKING } from "../types";

const initialState = null;

export default function (state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_BOOKING:
      // mengembalikan hasil payload yang didapatkan
      // dan ditampilkan ke redux devtools
      return action.payload;
    default:
      return state;
  }
}