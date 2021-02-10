import { Reducer } from 'redux';
import { IAddress, IAddressState } from './types';

const INITIAL_STATE: IAddressState = {
  data: {} as IAddress,
};

const address: Reducer<IAddressState> = () => {
  return INITIAL_STATE;
};

export default address;
