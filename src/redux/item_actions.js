import axios from 'axios';
import qs from 'qs';

import * as constants from './_types';

const JOB_ROOT_URL = 'https://api.indeed.com/ads/apisearch?';

const JOB_QUERY_PARAMS = {

  publisher: '4201738803816157',
  format: 'json',
  v: '2',
  latlong: 1,
  radius: 10,
  q: 'javascript', 

};

export const addToCart = ( item ) => {
  console.log("addToCart");

  return {
    type: constants.ADD_ITEM_TO_CART,
    payload: item, 

  };
}

export const removeItemInsideCart = ( index ) => {

  console.log("removeItemInsideCart " + index);

  return {
    type: constants.REMOVE_ITEM_INSIDE_CART,
    payload: index, 

  };
}

export const actionClearAllInsideCart = () => {

  return {
    type: constants.REMOVE_ALL_ITEM_INSIDE_CART,
  };

}
