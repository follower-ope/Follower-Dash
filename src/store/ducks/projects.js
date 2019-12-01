export const Types = {
  GET_REQUEST: 'project/GET_REQUEST',
  GET_SUCCESS: 'project/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function project(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export const Creators = {
  projectsRequest: data => ({
    type: Types.GET_REQUEST_PROJECTS,
    payload: { data },
  }),
  projectSuccess: () => {
    return { type: Types.GET_SUCCESS_PROJECTS };
  },
};
