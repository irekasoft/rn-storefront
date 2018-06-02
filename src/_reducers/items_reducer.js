import * as constants from '../_actions/_types';
import _ from 'lodash';
import { REHYDRATE } from 'redux-persist/constants';

export default function (state = [], action) {

  switch (action.type) {

    case REHYDRATE:

       return action.payload.likedJobs || [];

    case constants.LIKE_JOB:

      // filter to add only unique jobkey
      // from the current state
      return _.uniqBy([
        action.payload, ...state
      ], 'jobkey' );

    case constants.CLEAR_LIKED_JOBS:

      return [];
    
    default:
      return state;

  }


}