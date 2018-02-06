import {combineReducers} from 'redux';
import entities from './entities'
import loginPageData from './loginPageData'
import trialCars from './trialCars'

let reducers = combineReducers({
  entities,
  loginPageData,
  trialCars
});

export default reducers;
