import { API_REQUEST } from '../../types';

export const apiMiddl = ({ dispatch }: any) => (next:any) => async (action:any) => {
  next(action);

  if (action.type === API_REQUEST) {
    const {
      onSuccess, onError, fn, to, router, params, urlParams, reducerAction,
    } = action.meta;
    fn({ data: action.payload, params, urlParams })
      .then((data:any) => dispatch({
        type: onSuccess,
        payload: data,
        meta: {
          router, to, params, urlParams, reducerAction,
        },
      }))
      .catch((error:any) => dispatch({
        type: onError,
        payload: error,
        meta: {
          router, to, params, urlParams, reducerAction,
        },
      }));
  }
};
