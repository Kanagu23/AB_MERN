import { useReducer } from "react";

const initialState = {
  username: "",
  password: "",
  loading: false,
  error: null,
  isLoggedIn: false
};

function reducer(state, action) {

  switch (action.type) {

    case "SET_USERNAME":
      return {
        ...state,
        username: action.payload
      };

    case "SET_PASSWORD":
      return {
        ...state,
        password: action.payload
      };

    case "LOGIN_START":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        isLoggedIn: true
      };

    case "LOGIN_ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload
      };

    case "LOGOUT":
      return initialState;

    default:
      return state;
  }
}

function Login() {

  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div>

      <h2>Login</h2>

      <input
        type="text"
        placeholder="Username"
        value={state.username}
        onChange={(e) =>
          dispatch({
            type: "SET_USERNAME",
            payload: e.target.value
          })
        }
      />

      <br />

      <input
        type="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) =>
          dispatch({
            type: "SET_PASSWORD",
            payload: e.target.value
          })
        }
      />

      <br />

      <button
        onClick={() =>
          dispatch({
            type: "LOGIN_START"
          })
        }
      >
        Login
      </button>

      {state.loading && (
        <p>Logging in...</p>
      )}

      {state.error && (
        <p>{state.error}</p>
      )}

      {state.isLoggedIn && (
        <p>Login successful!</p>
      )}

    </div>
  );
}

export default Login;
