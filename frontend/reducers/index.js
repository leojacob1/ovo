import axios from 'axios';
import {ON_NEW_WEIGHTINGS} from '../actions/types';

var initialState = {};

const defaultWeightings = {"obp": 30,
                    "slg": 30,
                    "soRate": 7,
                    "bbRate": 4,
                    "sbPct": 5,
                    "sb": 6,
                    "ba": 7,
                    "hrRate": 8,
                    "rbi": 3 };

initialState.weightings = defaultWeightings;

const rootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ON_NEW_WEIGHTINGS:
      // console.log("new weightings in reducer", action.weightings);
      return {weightings: action.weightings};
    default:
      return state;
  }
};

export default rootReducer;
