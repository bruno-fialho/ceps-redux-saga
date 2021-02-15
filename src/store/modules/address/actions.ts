import { ActionTypes, IAddress } from './types';

export function searchAddressFromApi(cep: string) {
  return {
    type: ActionTypes.addressRequest,
    payload: {
      cep,
    },
  };
}

export function asearchAddressSuccess(foundAddress: IAddress) {
  return {
    type: ActionTypes.addressRequestSucceed,
    payload: {
      foundAddress,
    },
  };
}

export function searchAddressFailure() {
  return {
    type: ActionTypes.addressRequestFailure,
  };
}
