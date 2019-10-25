export const Types = {
  GET_REQUEST_LOGIN: 'login/GET_REQUEST',
  GET_SUCCESS_LOGIN: 'login/GET_SUCCESS',
};

const INITIAL_STATE = {
  loading: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST_LOGIN:
      return { ...state, loading: true };
    case Types.GET_SUCCESS_LOGIN:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  loginRequest: data => ({
    type: Types.GET_REQUEST_LOGIN,
    payload: { data },
  }),
  loginSuccess: () => {
    console.log('teste');
    return { type: Types.GET_SUCCESS_LOGIN };
  },
};
