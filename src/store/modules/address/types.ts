export interface IAddress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export interface IAddressState {
  data: IAddress;
}
