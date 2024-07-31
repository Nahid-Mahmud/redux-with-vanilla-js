// select dom elements

const counterElement = document.getElementById("counter");

const incrementButton = document.getElementById("increment");

const decrementButton = document.getElementById("decrement");

// initial state
const initialState = {
  value: 0,
};

// create reducer function

const counterReducer = (state = initialState, action) => {
  if (action?.type === "increment") {
    return {
      ...state,
      value: state?.value + 1,
    };
  } else if (action?.type === "decrement") {
    return {
      ...state,
      value: state?.value - 1,
    };
  } else {
    return state;
  }
};

// create store

const store = Redux.createStore(counterReducer);

// subscribe to store

const render = () => {
  const state = store.getState();
  counterElement.innerHTML = state?.value?.toString();
};

store.subscribe(render);

// button listeners

incrementButton.addEventListener("click", () => {
  store?.dispatch({
    type: "increment",
  });
});

decrementButton?.addEventListener("click", () => {
  store?.dispatch({
    type: "decrement",
  });
});
