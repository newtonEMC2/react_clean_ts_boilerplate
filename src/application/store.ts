import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import { apiMiddl } from './middlewares/core/api.middl';
import { splitterMiddl } from './middlewares/core/splitter.middl';
// import uiMiddl from './middlewares/core/ui.middl';
// import notificationMiddl from './middlewares/core/notification.middl';
// import normalizeMiddl from './middlewares/core/normalize.middl';
import usersMiddl from './middlewares/feature/users.middl';

// order of middl matters!
const coreMiddl = [
  splitterMiddl, // always first
  apiMiddl,
  // uiMiddl,
  // notificationMiddl,
  // normalizeMiddl, // always last
];

const featureMiddl = [
  usersMiddl,
];

// dev tool
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const serializeState:any = (state:any) => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch (e) {
    console.log(e);
  }
};

const deserializeState = ():any => {
  try {
    const state = JSON.parse(localStorage.getItem('state')!);
    return (state === null) ? undefined : state;
  } catch (e) {
    console.log(e);
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  deserializeState(),
  composeEnhancers(
    applyMiddleware(...featureMiddl, ...coreMiddl),
  ),
);

store.subscribe(() => serializeState(store.getState()));

export default store;
