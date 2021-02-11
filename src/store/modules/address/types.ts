export interface IAddress {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  erro: boolean;
}

export interface IAddressState {
  data: IAddress;
}
