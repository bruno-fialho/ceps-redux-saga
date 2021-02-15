/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { Reducer } from 'redux';
import produce from 'immer';
import { ActionTypes, IAddress, IAddressState } from './types';

const INITIAL_STATE: IAddressState = {
  address: {} as IAddress,
  error: false,
};

const data: Reducer<IAddressState> = (
  state = INITIAL_STATE,
  action,
): IAddressState => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.addressRequestSucceed: {
        const { foundAddress } = action;

        draft.address = foundAddress;
        draft.error = false;

        break;
      }
      case ActionTypes.addressRequestFailure: {
        draft.address = {} as IAddress;
        draft.error = true;

        break;
      }
      default: {
        return draft;
      }
    }
  });
};

export default data;
