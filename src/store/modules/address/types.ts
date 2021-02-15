export enum ActionTypes {
  addressRequest = 'ADDRESS_REQUEST',
  addressRequestSucceed = 'ADDRESS_REQUEST_SUCCEED',
  addressRequestFailure = 'ADDRESS_REQUEST_FAILED',
}

export interface IAddress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface IAddressState {
  address: IAddress;
  error: boolean;
}

interface RequestAction {
  type: typeof ActionTypes.addressRequest;
  payload: { cep: string };
}

interface SuccessAction {
  type: typeof ActionTypes.addressRequestSucceed;
  payload: { foundAddress: IAddress };
}

interface FailureAction {
  type: typeof ActionTypes.addressRequestFailure;
}

export type AddressActionTypes = RequestAction | SuccessAction | FailureAction;
