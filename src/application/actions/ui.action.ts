import {
  SHOW_SPINNER, HIDE_SPINNER,
} from '../types';

// SPINNER
export const showSpinner:any = () => ({
  type: SHOW_SPINNER,
});

export const hideSpinner:any = () => ({
  type: HIDE_SPINNER,
});
