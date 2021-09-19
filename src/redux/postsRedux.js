/* selectors */
export const getAll = ({posts}) => posts.data;
export const getById = ({posts}, id) => {
  let result = posts.data.filter(obj => {
    return obj.id === id;
  });
  console.log(result[0]);
  return result[0];
};

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPLOAD_POST = createActionName('UPLOAD_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const uploadPost = payload => ({ payload, type: UPLOAD_POST });
/* thunk creators */

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case UPLOAD_POST: {
      return {
        data: [
          ...statePart.data,
          action.payload,
        ],
      };
    }
    default:
      return statePart;
  }
};
