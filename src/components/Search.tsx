import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../store';

import { searchAddressFromApi } from '../store/modules/address/actions';
import { IAddressState } from '../store/modules/address/types';

const Search: React.FC = () => {
  const addressData = useSelector<IState, IAddressState>(state => state.data);

  const dispatch = useDispatch();
  const [newCep, setNewCep] = useState('');

  const handleSearchAddressFromApi = useCallback(
    event => {
      event.preventDefault();

      dispatch(searchAddressFromApi(newCep));
    },
    [dispatch, newCep],
  );

  return (
    <>
      <h1>Buscar CEP</h1>
      <form onSubmit={handleSearchAddressFromApi}>
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

        {addressData.error && (
          <p style={{ color: 'red' }}>CEP não encontrado, digite novamente.</p>
        )}
      </form>
    </>
  );
};

export default Search;
