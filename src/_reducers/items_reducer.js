import * as constants from '../_actions/_types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';

export default function (state = [], action) {

  switch (action.type) {

    case REHYDRATE:

       return action.payload.itemsInCart || [];

    case constants.ADD_ITEM_TO_CART:

      // filter to add only unique jobkey
      // from the current state
      return  [action.payload, ...state];

    case constants.CLEAR_LIKED_JOBS:

      return [];
    
    default:
      return state;

  }


}