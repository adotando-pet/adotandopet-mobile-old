import { combineReducers } from 'redux';

import { reducer as auth } from './auth';
import { reducer as advertisement } from './advertisement';
import { reducer as adoption } from './adoption';
import { reducer as pet } from './pet';

export default combineReducers({
  auth,
  advertisement,
  adoption,
  pet,
});
