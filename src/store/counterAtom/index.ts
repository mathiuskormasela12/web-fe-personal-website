import {atomWithStorage} from 'jotai/utils';

export const counterAtom = atomWithStorage('counter', 0);