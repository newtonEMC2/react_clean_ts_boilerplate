import { API_REQUEST } from '../types';

interface ApiRequestAction {
    fn: any,
    body: any,
    params: any,
    urlParams: any,
    onSuccess: string,
    onError: string,
    to: string,
    router: any,
    reducerAction: string,
}

export const apiRequest: any = ({
  fn, body, params, urlParams, onSuccess, onError, to, router, reducerAction,
}: ApiRequestAction) => ({
  type: API_REQUEST,
  payload: body,
  meta: {
    fn, onSuccess, onError, to, router, params, urlParams, reducerAction,
  },
});
