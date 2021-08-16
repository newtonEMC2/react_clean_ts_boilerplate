import { SET_USERS } from '../types';

const initState = {
  collection: [],
};

export const usersReducer: any = (state:any = initState, action:any) => {
  switch (action.type) {
    case SET_USERS:
      return { ...state, collection: action.payload };

    default:
      return state;
  }
};
