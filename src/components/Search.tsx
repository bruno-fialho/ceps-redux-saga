import React, { FormEvent, useState } from 'react';
import {} from 'react-redux';

import api from '../services/api';
import { IAddress } from '../store/modules/address/types';

// import { Container } from './styles';

const Search: React.FC = () => {
  const [newCep, setNewCep] = useState('');
  const [address, setAddress] = useState<IAddress>({} as IAddress);

  async function handleSearchAddress(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    try {
      const response = await api.get(`${newCep}/json/`);

      const newAddress = response.data;

      setAddress(newAddress);
      setNewCep('');
    } catch (err) {
      console.log('error');
    }
  }

  return (
    <>
      <h1>Buscar CEP</h1>
      <form onSubmit={handleSearchAddress}>
        <input
          value={newCep}
          onChange={e => setNewCep(e.target.value)}
          placeholder="Digite o CEP"
          required
          minLength={8}
          maxLength={8}
        />
        <button style={{ marginLeft: '10px' }} type="submit">
          Pesquisar
        </button>
      </form>

      {address.cep !== undefined &&
        Object.keys(address).length !== 0 &&
        address.constructor === Object && (
          <div>
            <h3>
              Endereço para
              {` ${address.cep}`}
            </h3>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Logradouro: </strong>
              <p style={{ marginLeft: '10px' }}>{`${address.logradouro}`}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Bairro: </strong>
              <p style={{ marginLeft: '10px' }}>{`${address.bairro}`}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Cidade: </strong>
              <p style={{ marginLeft: '10px' }}>{`${address.localidade}`}</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong>Estado: </strong>
              <p style={{ marginLeft: '10px' }}>{`${address.uf}`}</p>
            </div>
          </div>
        )}

      {address.erro && (
        <div>
          <p style={{ color: 'red' }}>CEP não encontrado, digite novamente.</p>
        </div>
      )}
    </>
  );
};

export default Search;
