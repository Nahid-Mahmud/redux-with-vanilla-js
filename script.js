// select dom elements

const counterElement = document.getElementById("counter");

const incrementButton = document.getElementById("increment");

const decrementButton = document.getElementById("decrement");

// action identifiers

const INCREMENT = "increment";
const DECREMENT = "decrement";

// action creators

const increment = (value = 1) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const decrement = (value = 1) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

// initial state
const initialState = {
  value: 0,
};

// create reducer function

const counterReducer = (state = initialState, action) => {
  if (action?.type === INCREMENT) {
    return {
      ...state,
      value: state?.value + action?.payload,
    };
  } else if (action?.type === DECREMENT) {
    return {
      ...state,
      value: state?.value - action?.payload,
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

// update ui initally

render();

// button listeners

incrementButton.addEventListener("click", () => {
  store?.dispatch(increment(10));
});

decrementButton?.addEventListener("click", () => {
  store?.dispatch(decrement(5));
});
