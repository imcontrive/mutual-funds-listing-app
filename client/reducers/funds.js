const initialState = {
  funds: {}
};

function funds(state = initialState, action) {
  switch (action.type) {
    case "GET_FUNDS_SUCCESS":
      console.log(state, "state from reducers");
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
}

export default funds;
