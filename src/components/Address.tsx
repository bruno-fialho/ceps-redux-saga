import React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../store';
import { IAddressState } from '../store/modules/address/types';

const Address: React.FC = () => {
  const addressData = useSelector<IState, IAddressState>(state => state.data);

  return (
    <div>
      <h3>Endereço:</h3>

      <div>
        <div>
          <label htmlFor="rua">
            Rua
            <input
              type="text"
              disabled
              className="rua"
              value={
                addressData.address.logradouro
                  ? `${addressData.address.logradouro}`
                  : ''
              }
              style={{ marginLeft: '10px', width: '200px' }}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="bairro">
            Bairro
            <input
              type="text"
              disabled
              className="bairro"
              value={
                addressData.address.bairro
                  ? `${addressData.address.bairro}`
                  : ''
              }
              style={{ marginLeft: '10px', width: '100px' }}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="cidade">
            Cidade
            <input
              type="text"
              disabled
              className="cidade"
              value={
                addressData.address.localidade
                  ? `${addressData.address.localidade}`
                  : ''
              }
              style={{ marginLeft: '10px', width: '100px' }}
            />
          </label>
        </div>
        <br />
        <div>
          <label htmlFor="estado">
            Estado
            <input
              type="text"
              disabled
              className="estado"
              value={addressData.address.uf ? `${addressData.address.uf}` : ''}
              style={{ marginLeft: '10px', width: '30px' }}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default Address;
