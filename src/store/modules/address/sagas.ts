import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';
import { searchAddressFromApi } from './actions';
import { ActionTypes } from './types';

type CheckAddressFromApiRequest = ReturnType<typeof searchAddressFromApi>;

interface IAddressResponse {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
}

function* checkAddressFromApi({ payload }: CheckAddressFromApiRequest) {
  const { cep } = payload;

  const addressData: AxiosResponse<IAddressResponse> = yield call(
    api.get,
    `${cep}/json/`,
  );

  const foundAddress = {
    logradouro: addressData.data.logradouro,
    bairro: addressData.data.bairro,
    localidade: addressData.data.localidade,
    uf: addressData.data.uf,
  };

  if (
    foundAddress.logradouro !== undefined &&
    Object.keys(foundAddress).length !== 0 &&
    foundAddress.constructor === Object
  ) {
    yield put({ type: ActionTypes.addressRequestSucceed, foundAddress });
  } else {
    yield put({ type: ActionTypes.addressRequestFailure });
  }
}

export default all([
  takeLatest(ActionTypes.addressRequest, checkAddressFromApi),
]);
