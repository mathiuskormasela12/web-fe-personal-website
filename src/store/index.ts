import {createStore} from 'jotai';
import { counterAtom } from './counterAtom';

const store = createStore();

export default store;

export {
  counterAtom
}